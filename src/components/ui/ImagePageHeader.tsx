interface ImagePageHeaderProps {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  intro?: string;
  /** Position the focal area of the image when cropped */
  objectPosition?: string;
}

/**
 * A route header backed by a real DPS photo. Used in place of the white
 * PageHeader on pages where the image is the strongest framing device.
 */
export function ImagePageHeader({
  image,
  alt,
  eyebrow,
  title,
  intro,
  objectPosition = "center",
}: ImagePageHeaderProps) {
  return (
    <header className="relative isolate overflow-hidden bg-forest-900 text-paper">
      <img alt={alt}
        src={image}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        style={{ objectPosition }}
        loading="eager"
        decoding="async"
      />
      <span aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-900/85 via-forest-900/55 to-forest-900/45" />
      <span aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-forest-900/90 to-transparent" />

      <div className="shell relative px-6 pb-20 pt-36 md:pb-28 md:pt-44">
        <p className="mb-6 flex items-center gap-3 font-mono text-[0.68rem] font-medium uppercase tracking-[0.28em] text-ochre-light">
          <span className="h-px w-10 bg-ochre" />
          {eyebrow}
        </p>
        <h1 className="fluid-h2 max-w-4xl font-display font-light tracking-mega text-balance">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-paper/80">
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}
