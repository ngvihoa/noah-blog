import { createFileRoute } from '@tanstack/react-router'
import { seoHead, siteDescription, siteTitle } from '~/lib/seo'
import { AboutIntroSection } from './-components/about-intro'
import { AiWorkflowSection } from './-components/ai-workflow-section'
import { CareerSection } from './-components/career-section'
import { ContactCtaSection } from './-components/contact-cta-section'
import { FeaturedProjectSection } from './-components/featured-project-section'
import { FocusStrip } from './-components/focus-strip'
import { HeroSection } from './-components/hero-section'
import { SkillsInterestsSection } from './-components/skills-interests-section'
import { StackedSection } from './-components/stacked-section'

export const Route = createFileRoute('/')({
  head: () =>
    seoHead({
      title: siteTitle,
      description: siteDescription,
      path: '/',
    }),
  component: HomePage,
})

function HomePage() {
  return (
    <main>
      <HeroSection />
      <div className="page-shell">
        <FocusStrip />
      </div>
      <StackedSection
        layer={10}
        className="lg:relative! [&_div]:shadow-none! [&_div]:rounded-none! [&_div]:border-none!"
      >
        <FeaturedProjectSection />
      </StackedSection>
      <StackedSection layer={11}>
        <AboutIntroSection />
      </StackedSection>
      <StackedSection layer={12} pinBottom contentClassName="lg:overflow-clip">
        <CareerSection />
      </StackedSection>
      <StackedSection layer={13}>
        <AiWorkflowSection />
      </StackedSection>
      <StackedSection layer={14}>
        <SkillsInterestsSection />
      </StackedSection>
      <StackedSection layer={15}>
        <ContactCtaSection />
      </StackedSection>
    </main>
  )
}
