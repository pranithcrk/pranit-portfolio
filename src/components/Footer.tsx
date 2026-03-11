export default function Footer() {
  return (
    <footer className="mt-16 py-6 border-t border-[var(--color-border)] text-[var(--color-text-muted)] text-[12px] flex justify-between">
      <span>&copy; {new Date().getFullYear()} Pranit Patil</span>
      <span>Built with Next.js</span>
    </footer>
  );
}
