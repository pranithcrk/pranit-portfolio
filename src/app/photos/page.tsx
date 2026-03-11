const photos = [
  { src: "/photos/A4108BE5-BCB8-4688-8B10-0D1DAA726555.JPG", alt: "" },
  { src: "/photos/IMG_0169.JPG", alt: "" },
  { src: "/photos/IMG_5414.JPG", alt: "" },
  { src: "/photos/IMG_6335.JPG", alt: "" },
];

export default function Photos() {
  return (
    <div>
      <p className="text-[var(--color-text-muted)] text-[13px] mb-8">
        A few things I&apos;ve seen along the way.
      </p>

      <div className="columns-2 gap-3 space-y-3">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="break-inside-avoid rounded-lg overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent-dim)] transition-colors"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
