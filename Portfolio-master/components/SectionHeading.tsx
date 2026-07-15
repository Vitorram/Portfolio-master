type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
