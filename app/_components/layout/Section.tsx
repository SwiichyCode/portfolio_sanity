type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className, ...props }: Props) {
  return (
    <section className={`lg:max-w-section lg:w-full ${className}`} {...props}>
      {children}
    </section>
  );
}
