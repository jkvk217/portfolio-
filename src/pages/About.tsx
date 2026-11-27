import { ArrowRight } from 'lucide-react'

import { CountUp, Photo, Title } from '../components/Bits'
import { ButtonLink } from '../components/Button'
import { Card } from '../components/Card'
import { Holo } from '../components/Holo'
import { PageHero } from '../components/Nav'
import { OpenToPanel } from '../components/OpenToPanel'
import { ABOUT } from '../data'
import { useDocumentTitle } from '../lib/storage'

export function About() {
  useDocumentTitle('About')
  return (
    <div className="grid gap-2 p-2">
      <PageHero
        title={ABOUT.title}
        eyebrow={ABOUT.eyebrow}
        intro={ABOUT.intro}
        art={<Holo kind="prism" motion priority />}
      />

      <Card as="section" aria-label="About in numbers" tone="night" className="grid gap-8 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
        {ABOUT.stats.map((s) => (
          <div key={s.label}>
            <p className="text-[clamp(3.2rem,2.4rem+2.6vw,5.5rem)] leading-none font-normal tracking-[-0.06em]">
              <CountUp value={s.value} />
            </p>
            <p className="caps mt-3 text-night-muted">{s.label}</p>
          </div>
        ))}
      </Card>

      <OpenToPanel columns={4} />

      <div className="grid gap-2 lg:grid-cols-[1.1fr_1fr]">
        <Photo image="portrait" className="min-h-[420px] rounded-[var(--radius-card)]" />
        <Card as="section" aria-labelledby="values-title" className="flex flex-col p-6 sm:p-8">
          <Title id="values-title" lines={['How I', 'work']} />
          <ul className="mt-10 grid gap-6">
            {ABOUT.values.map((v, i) => (
              <li key={v.title} className="grid grid-cols-[auto_1fr] gap-x-5 border-t border-line pt-5">
                <span className="caps text-violet tabular-nums">0{i + 1}</span>
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.03em] uppercase">{v.title}</h3>
                  <p className="mt-1.5 text-muted">{v.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="grid gap-2 md:grid-cols-2">
        <Card as="section" aria-labelledby="education-title" className="p-6 sm:p-8">
          <h2 id="education-title" className="caps text-muted">
            Education
          </h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {ABOUT.education.map((e) => (
              <li key={e.programme} className="py-5">
                <p className="text-lg leading-tight font-medium tracking-[-0.03em]">{e.programme}</p>
                <p className="mt-1 text-[15px]">{e.school}</p>
                <p className="mt-1 text-sm text-muted">
                  {e.location} · {e.dates}
                </p>
              </li>
            ))}
          </ul>
        </Card>
        <Card as="section" aria-labelledby="certs-title" className="p-6 sm:p-8">
          <h2 id="certs-title" className="caps text-muted">
            Licences and certifications
          </h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {ABOUT.certifications.map((c) => (
              <li key={c.name} className="flex items-baseline justify-between gap-4 py-5">
                <p className="text-lg leading-tight font-medium tracking-[-0.03em]">{c.name}</p>
                <p className="caps shrink-0 text-muted tabular-nums">{c.dates}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[15px] text-muted">Both current, refreshed each year.</p>
        </Card>
      </div>

      <Card className="flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
        <div>
          <p className="display text-[clamp(1.8rem,1.4rem+1.4vw,2.6rem)] leading-[0.95]">Based in Springfield, Illinois</p>
          <p className="mt-2 max-w-md text-muted">On site across central Illinois, or remote for help desks and phone support.</p>
        </div>
        <ButtonLink to="/contact" variant="violet" size="lg" iconRight={<ArrowRight className="size-5" />}>
          Contact me
        </ButtonLink>
      </Card>
    </div>
  )
}
