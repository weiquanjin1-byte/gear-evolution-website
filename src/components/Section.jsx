export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-5 py-20">
      <div className="mb-10">
        <p className="font-display text-sm uppercase tracking-[0.28em] text-cyan-200/80">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
