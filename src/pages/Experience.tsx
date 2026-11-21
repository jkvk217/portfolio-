import { ArrowRight } from 'lucide-react'

import { Reveal, Stat } from '../components/Bits'
import { ButtonLink } from '../components/Button'
import { Card } from '../components/Card'
import { ExperienceRow } from '../components/ExperienceRow'
import { Holo } from '../components/Holo'
import { PageHero } from '../components/Nav'
import { EXPERIENCE, HOME } from '../data'
import { useDocumentTitle } from '../lib/storage'

export function Experience() {
  useDocumentTitle('Experience')
  return (
    <div className="grid gap-2 p-2">
      <PageHero
        title={['My', 'experience']}
        eyebrow={`${EXPERIENCE.length} roles since 2007`}
        intro="Retail counters, repair benches, a virtual call centre, a printer help desk and an auto shop front desk. The same job in different clothes: find the problem, explain it clearly, close it properly."
        art={<Holo kind="cloud" motion />}
      />

      <Card as="section" aria-label="Experience in numbers" tone="night" className="grid grid-cols-3 gap-8 p-6 sm:p-8">
        {HOME.stats.map((s) => (
          <Stat key={s.label.join(' ')} value={s.value} label={s.label} align="left" tone="light" />
        ))}
      </Card>

      <ul className="grid gap-2">
        {EXPERIENCE.map((role, i) => (
          <li key={`${role.company}-${role.dates}`}>
            <Reveal delay={(i % 3) * 0.05}>
              <Card as="section" aria-label={`${role.title} at ${role.company}`}>
                <ExperienceRow role={role} detailed />
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>

      <Card className="flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
        <div>
          <p className="display text-[clamp(1.8rem,1.4rem+1.4vw,2.6rem)] leading-[0.95]">Want the short version?</p>
          <p className="mt-2 max-w-md text-muted">Email me and I will send a PDF copy of this history, with references on request.</p>
        </div>
        <ButtonLink to="/contact" variant="violet" size="lg" iconRight={<ArrowRight className="size-5" />}>
          Get in touch
        </ButtonLink>
      </Card>
    </div>
  )
}
