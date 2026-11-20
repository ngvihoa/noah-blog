import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { Mascot } from 'page-mascot'
import { profile } from '~/data/portfolio'
import { AgileOrbit } from './agile-orbit'

export function HeroSection() {
  return (
    <section
      className="hero page-shell min-h-[calc(100svh-4.75rem)] content-center pt-20 pb-18"
      aria-labelledby="hero-title"
    >
      <div className="hero__copy">
        <div className="enter-up mb-2 flex min-h-26 items-end gap-3">
          <p className="eyebrow mb-3! text-lg!">Hello, I’m {profile.alias}</p>
          <Mascot
            className="-mr-1 -mb-2 drop-shadow-[0_14px_24px_rgb(23_35_60/0.14)]"
            directions="/mascots/noah-directions.webp"
            reactions="/mascots/noah-reactions.webp"
            label="Noah mascot"
            size={104}
          />
        </div>
        <h1 id="hero-title" className="enter-up [--enter-step:1]">
          {profile.role}
        </h1>
        <p className="enter-up mb-[22px] max-w-[500px] [--enter-step:2] [font-family:var(--display)] text-[clamp(1.15rem,2vw,1.45rem)] font-bold tracking-[-0.02em] text-[var(--primary-dark)]">
          Thoughtful software. Polished interfaces.
        </p>
        <p className="hero__intro enter-up [--enter-step:3]">
          Based in Ho Chi Minh City, I build web and mobile products with 2+
          years of experience across frontend development, backend APIs, and
          data-access workflows.
        </p>
        <div className="hero__actions enter-up [--enter-step:4]">
          <Link className="button button--primary" to="/projects">
            View projects <ArrowRight aria-hidden="true" />
          </Link>
          <a className="button button--secondary" href="#about">
            About my process
          </a>
        </div>
      </div>
      <div className="enter-up min-w-0 max-lg:w-full [--enter-step:2]">
        <AgileOrbit />
      </div>
    </section>
  )
}
