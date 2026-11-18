import console from 'node:console'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { URL } from 'node:url'

const variants = JSON.parse(
  await readFile(new URL('../src/data/cv.json', import.meta.url), 'utf8'),
)
const outputDirectory = new URL('../public/cv/', import.meta.url)

const files = await Promise.all(
  variants.map(async ({ fileName }) => {
    const contents = await readFile(
      new URL(`../pdf-cv/${fileName}`, import.meta.url),
    )

    if (contents.subarray(0, 5).toString() !== '%PDF-') {
      throw new Error(`Invalid CV PDF: ${fileName}`)
    }

    return { fileName, contents }
  }),
)

await mkdir(outputDirectory, { recursive: true })
await Promise.all(
  files.map(({ fileName, contents }) =>
    writeFile(new URL(fileName, outputDirectory), contents),
  ),
)

console.log(`Synced ${files.length} CV PDFs to public/cv.`)
