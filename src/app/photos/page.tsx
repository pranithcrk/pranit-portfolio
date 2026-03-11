const photos = [
  { src: "/photos/photo1.jpg", alt: "Photo 1" },
  { src: "/photos/photo2.jpg", alt: "Photo 2" },
  { src: "/photos/photo3.jpg", alt: "Photo 3" },
  { src: "/photos/photo4.jpg", alt: "Photo 4" },
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
            className="break-inside-avoid rounded-lg overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-border)] aspect-[4/3] flex items-center justify-center text-[var(--color-text-muted)] text-[11px] hover:border-[var(--color-accent-dim)] transition-colors"
          >
            Add to public{photo.src}
          </div>
        ))}
      </div>
    </div>
  );
}
