import { ArrowRight, Check } from 'lucide-react'

import { ArrowLink, Reveal, Title } from '../components/Bits'
import { ButtonLink } from '../components/Button'
import { Card } from '../components/Card'
import { Holo } from '../components/Holo'
import { PageHero } from '../components/Nav'
import { CAPABILITIES, TOOLS } from '../data'
import { cx } from '../lib/cx'
import { useDocumentTitle } from '../lib/storage'

export function Skills() {
  useDocumentTitle('Skills')
  return (
    <div className="grid gap-2 p-2">
      <PageHero
        title={['What I', 'can do']}
        eyebrow="Five areas, one person"
        intro="Technical support, customer service, operations, administrative support and retail operations. Whichever the ticket is, the job starts in the same place: understand it, then fix it properly."
        art={<Holo kind="sphere" motion />}
        aside={
          <ul className="mt-6 flex flex-wrap gap-1.5">
            {CAPABILITIES.map((c) => (
              <li key={c.slug}>
                <a href={`#${c.slug}`} className="round inline-flex h-10 items-center rounded-full border border-line-strong px-4 text-sm font-medium transition-colors hov:border-violet hov:text-violet">
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        }
      />

      {CAPABILITIES.map((c, i) => (
        <Card
          key={c.slug}
          as="section"
          id={c.slug}
          aria-labelledby={`${c.slug}-title`}
          tone={i === 1 ? 'violet' : 'white'}
          className="grid scroll-mt-2 gap-8 p-6 sm:p-8 lg:grid-cols-[auto_1fr_1fr] lg:items-center"
        >
          <div className="mx-auto w-[min(60vw,260px)] lg:mx-0 lg:w-[220px]" aria-hidden>
            <Holo kind={c.art} motion />
          </div>
          <div>
            <p className={cx('caps tabular-nums', i === 1 ? 'text-white/80' : 'text-muted')}>0{i + 1}</p>
            <h2 id={`${c.slug}-title`} className="display mt-3 text-[clamp(2.2rem,1.4rem+2.4vw,4rem)] leading-[0.9]">
              {c.title}
            </h2>
            <p className={cx('mt-5 max-w-md text-pretty', i === 1 ? 'text-white/90' : 'text-ink-2')}>{c.intro}</p>
          </div>
          <div>
            <h3 className={cx('caps', i === 1 ? 'text-white/80' : 'text-muted')}>What that includes</h3>
            <ul className={cx('mt-3 divide-y border-y', i === 1 ? 'divide-white/20 border-white/20' : 'divide-line border-line')}>
              {c.deliverables.map((d) => (
                <li key={d} className="flex items-center justify-between gap-4 py-3 text-[15px]">
                  {d}
                  <Check className={cx('size-4 shrink-0', i === 1 ? 'text-white' : 'text-violet')} aria-hidden />
                </li>
              ))}
            </ul>
          </div>
        </Card>
      ))}

      <div className="grid gap-2 lg:grid-cols-[1fr_1.4fr]">
        <Card className="flex flex-col justify-between gap-8 p-6 sm:p-8">
          <Title lines={['Everyday', 'tools']} align="left" />
          <ArrowLink to="/experience" tone="ink" size="sm">
            Where I used them
          </ArrowLink>
        </Card>
        <Card className="p-6 sm:p-8">
          <ul className="flex flex-wrap gap-2">
            {TOOLS.map((tool) => (
              <li key={tool} className="round inline-flex h-10 items-center rounded-full bg-soft px-4 text-[15px] font-medium">
                {tool}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Reveal>
        <Card tone="violet" className="flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-end sm:p-8">
          <div>
            <Title lines={['Need a hand?']} align="left" size="lg" as="p" />
            <p className="mt-3 max-w-md text-white/85">Available for full-time and contract work, on site in Springfield or remote.</p>
          </div>
          <ButtonLink to="/contact" variant="light" size="lg" iconRight={<ArrowRight className="size-5" />}>
            Get in touch
          </ButtonLink>
        </Card>
      </Reveal>
    </div>
  )
}
