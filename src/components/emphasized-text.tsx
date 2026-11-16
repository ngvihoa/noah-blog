/** Render explicit **emphasis** as text/strong elements, without interpreting HTML. */
export function EmphasizedText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong className="font-bold text-[var(--ink)]" key={index}>
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  )
}
