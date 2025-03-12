export function TypographyH1({ label, className }) {
  return (
    <h1
      className={`scroll-m-20 text-7xl font-extrabold tracking-tight lg:text-7xl ${className}`}
    >
      {label}
    </h1>
  );
}
