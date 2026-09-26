import { createFileRoute } from '@tanstack/react-router'
import { AboutSection } from './-components/about-section'
import { ContactCtaSection } from './-components/contact-cta-section'
import { FeaturedProjectSection } from './-components/featured-project-section'
import { FocusStrip } from './-components/focus-strip'
import { HeroSection } from './-components/hero-section'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main>
      <HeroSection />
      <div className="page-shell">
        <FocusStrip />
      </div>
      <FeaturedProjectSection />
      <AboutSection />
      <ContactCtaSection />
    </main>
  )
}
