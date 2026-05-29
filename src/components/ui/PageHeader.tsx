interface PageHeaderProps {
  eyebrow: string;
  title: string;
  intro?: string;
}

/**
 * White route header with an editorial title + an inline forest underline.
 * No animation theatre, no dark band — keeps the page reading clean from
 * the moment the nav clears.
 */
export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <header className="border-b border-line/10 bg-bg px-6 pb-14 pt-36 md:pb-20 md:pt-44">
      <div className="shell">
        <p className="mb-6 flex items-center gap-3 font-mono text-[0.68rem] font-medium uppercase tracking-[0.28em] text-forest-600">
          <span className="h-px w-10 bg-forest-600" />
          {eyebrow}
        </p>
        <h1 className="fluid-h2 max-w-4xl font-display font-light tracking-mega text-content text-balance">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-muted">
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}
