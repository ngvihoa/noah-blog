const rawSiteUrl = import.meta.env.VITE_SITE_URL ?? 'http://localhost:3000'

export const siteUrl = rawSiteUrl.replace(/\/+$/, '')

const siteName = 'Noah / Viết Hòa'
const ogImage = `${siteUrl}/og/og-default.png`
const ogImageWidth = '1200'
const ogImageHeight = '630'

interface SeoOptions {
  title: string
  description: string
  path: string
  /** Absolute URL or a root-relative path to the social share image. */
  image?: string
}

export function seoHead({ title, description, path, image }: SeoOptions) {
  const url = `${siteUrl}${path}`
  const resolvedImage =
    image && !image.startsWith('http') ? `${siteUrl}${image}` : image
  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      ...(resolvedImage
        ? [
            { property: 'og:image', content: resolvedImage },
            { name: 'twitter:image', content: resolvedImage },
          ]
        : []),
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
    ],
    links: [{ rel: 'canonical', href: url }],
  }
}

export const siteHead = {
  meta: [
    { property: 'og:site_name', content: siteName },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: ogImageWidth },
    { property: 'og:image:height', content: ogImageHeight },
    { property: 'og:locale', content: 'en_US' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: ogImage },
  ],
  scripts: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Nguyễn Viết Hòa',
        alternateName: 'Noah',
        jobTitle: 'Software Developer',
        email: 'mailto:nvhoa29702@gmail.com',
        url: siteUrl,
        image: `${siteUrl}/images/viet-hoa-profile.jpg`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ho Chi Minh City',
          addressCountry: 'VN',
        },
        sameAs: [
          'https://github.com/ngvihoa',
          'https://www.linkedin.com/in/nvhoa29b02/',
        ],
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'VNU — Ho Chi Minh City University of Technology',
        },
      }),
    },
  ],
}
