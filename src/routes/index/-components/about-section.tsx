import { AboutIntro } from './about-intro'
import { CareerSection } from './career-section'
import { SkillsInterestsSection } from './skills-interests-section'

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-[76px] border-y border-[var(--line)] bg-[rgb(255_255_255/52%)] py-[108px] max-md:py-[76px]"
      aria-labelledby="about-title"
    >
      <AboutIntro />
      <CareerSection />
      <SkillsInterestsSection />
    </section>
  )
}
