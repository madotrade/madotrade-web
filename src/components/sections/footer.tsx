export function Footer() {
  return (
    <footer className="px-6 py-14 text-center">
      <p className="font-[family-name:var(--font-inter)] text-sm font-bold tracking-wider text-text-secondary">
        MADO
      </p>
      <p className="mt-3 text-xs text-text-muted">
        © 2026 Madotrade. All rights reserved.
      </p>
      <p className="mt-3">
        <a
          href="mailto:contact@madotrade.com"
          className="text-xs text-text-muted transition-colors hover:text-accent-light"
        >
          contact@madotrade.com
        </a>
      </p>
    </footer>
  );
}
