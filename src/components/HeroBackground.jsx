import { Sparkles as DreiSparkles, Grid } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function EnergyField() {
  const materialRef = useRef(null);
  const { viewport } = useThree();
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(1, 1) },
    }),
    [],
  );

  useFrame(({ clock, pointer, size }) => {
    if (!materialRef.current) return;

    materialRef.current.uniforms.uTime.value = clock.elapsedTime;
    materialRef.current.uniforms.uMouse.value.lerp(
      new THREE.Vector2(pointer.x, pointer.y),
      0.055,
    );
    materialRef.current.uniforms.uResolution.value.set(size.width, size.height);
  });

  return (
    <mesh scale={[viewport.width * 1.12, viewport.height * 1.12, 1]} position={[0, 0, -1.2]}>
      <planeGeometry args={[1, 1, 150, 96]} />
      <shaderMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
        uniforms={uniforms}
        vertexShader={`
          uniform float uTime;
          uniform vec2 uMouse;
          varying vec2 vUv;

          void main() {
            vUv = uv;
            vec3 pos = position;
            float waveA = sin((pos.x * 5.0) + uTime * 0.9 + uMouse.x * 1.8) * 0.035;
            float waveB = sin((pos.y * 6.0) - uTime * 0.65 + uMouse.y * 1.5) * 0.03;
            pos.z += waveA + waveB;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec2 uMouse;
          varying vec2 vUv;

          float hash(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
          }

          float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            vec2 u = f * f * (3.0 - 2.0 * f);
            return mix(
              mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
              mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
              u.y
            );
          }

          float fbm(vec2 p) {
            float value = 0.0;
            float amp = 0.5;
            for (int i = 0; i < 4; i++) {
              value += amp * noise(p);
              p *= 2.0;
              amp *= 0.5;
            }
            return value;
          }

          void main() {
            vec2 uv = vUv;
            vec2 center = uv - 0.5;
            vec2 mouse = uMouse * 0.08;

            float n = fbm((uv + mouse) * 4.2 + vec2(uTime * 0.06, -uTime * 0.04));
            float stream = sin((uv.x * 10.0 + uv.y * 4.0 + n * 2.4) - uTime * 1.15);
            float wave = smoothstep(0.55, 1.0, stream * 0.5 + 0.5);
            float ring = abs(length(center - mouse * 0.55) - 0.26 - sin(uTime * 0.7) * 0.025);
            float halo = smoothstep(0.04, 0.0, ring);
            float grid = (1.0 - smoothstep(0.0, 0.012, abs(fract(uv.x * 28.0) - 0.5))) * 0.08;
            grid += (1.0 - smoothstep(0.0, 0.012, abs(fract(uv.y * 18.0) - 0.5))) * 0.06;

            vec3 deep = vec3(0.012, 0.019, 0.055);
            vec3 cyan = vec3(0.0, 0.86, 1.0);
            vec3 violet = vec3(0.52, 0.28, 1.0);
            vec3 pink = vec3(1.0, 0.18, 0.85);

            vec3 color = deep;
            color += cyan * (wave * 0.24 + halo * 0.45 + grid);
            color += violet * (n * 0.28 + halo * 0.2);
            color += pink * pow(max(0.0, 1.0 - length(center + vec2(0.18, -0.08)) * 1.7), 3.0) * 0.2;

            float vignette = smoothstep(0.92, 0.28, length(center));
            gl_FragColor = vec4(color * vignette, 0.88);
          }
        `}
      />
    </mesh>
  );
}

function ParallaxRig() {
  const groupRef = useRef(null);

  useFrame(({ pointer }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.08, 0.045);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -pointer.y * 0.055, 0.045);
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, pointer.x * 0.16, 0.045);
  });

  return (
    <group ref={groupRef}>
      <EnergyField />
      <Grid
        position={[0, -1.7, -0.7]}
        rotation={[Math.PI / 2, 0, 0]}
        args={[12, 12]}
        cellSize={0.45}
        cellThickness={0.35}
        cellColor="#00e5ff"
        sectionSize={2.4}
        sectionThickness={0.8}
        sectionColor="#8b5cf6"
        fadeDistance={7}
        fadeStrength={1.8}
        infiniteGrid
      />
      <DreiSparkles
        count={75}
        scale={[7.5, 3.8, 2]}
        size={2.2}
        speed={0.35}
        color="#80f7ff"
        opacity={0.45}
        position={[0.8, 0.2, 0.2]}
      />
    </group>
  );
}

export default function HeroBackground() {
  return (
    <div className="hero-background" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#050814']} />
        <ParallaxRig />
      </Canvas>
      <div className="hero-background-overlay" />
      <div className="hero-scanline" />
    </div>
  );
}
