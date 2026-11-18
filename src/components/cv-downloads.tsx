import { Download } from 'lucide-react'
import cvVariants from '~/data/cv.json'

export function CvDownloads({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="m-0! text-sm font-bold text-[var(--ink)]">
        Download CV (PDF)
      </p>
      <div className="flex flex-wrap gap-x-5 gap-y-1">
        {cvVariants.map(({ label, fileName }) => (
          <a
            className="text-link min-h-11 py-1! text-sm!"
            href={`/cv/${fileName}`}
            download={fileName}
            aria-label={`Download ${label} CV (PDF)`}
            key={fileName}
          >
            {label}
            <Download aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  )
}
