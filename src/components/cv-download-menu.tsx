import { ChevronDown, Download } from 'lucide-react'
import { useEffect, useRef } from 'react'
import cvVariants from '~/data/cv.json'

export function CvDownloadMenu({ onOpen }: { onOpen: () => void }) {
  const detailsRef = useRef<HTMLDetailsElement>(null)
  const triggerRef = useRef<HTMLElement>(null)

  function closeMenu() {
    if (detailsRef.current) detailsRef.current.open = false
  }

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !detailsRef.current?.contains(event.target)
      ) {
        if (detailsRef.current) detailsRef.current.open = false
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  return (
    <details
      className="cv-menu"
      ref={detailsRef}
      onToggle={(event) => {
        if (event.currentTarget.open) onOpen()
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && detailsRef.current?.open) {
          event.preventDefault()
          closeMenu()
          triggerRef.current?.focus()
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeMenu()
      }}
    >
      <summary
        className="button button--secondary cv-menu__trigger"
        ref={triggerRef}
        aria-label="Download CV"
      >
        <span className="cv-menu__label-desktop">Download CV</span>
        <span className="cv-menu__label-mobile">CV</span>
        <ChevronDown aria-hidden="true" />
      </summary>
      <div className="cv-menu__panel">
        {cvVariants.map(({ label, fileName }) => (
          <a
            className="cv-menu__download"
            href={`/cv/${fileName}`}
            download={fileName}
            aria-label={`Download ${label} CV (PDF)`}
            key={fileName}
            onClick={() => {
              closeMenu()
              triggerRef.current?.focus()
            }}
          >
            <span>{label}</span>
            <span className="cv-menu__format">PDF</span>
            <Download aria-hidden="true" />
          </a>
        ))}
      </div>
    </details>
  )
}
