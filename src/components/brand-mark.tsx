export function BrandMark({ priority = false }: { priority?: boolean }) {
  return (
    <span className="brand-mark" aria-hidden="true">
      <img
        src="/logo_main.png"
        alt=""
        width="627"
        height="627"
        decoding="async"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </span>
  )
}
