import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

import { ArrowLink, Photo, Reveal, Stat, Title } from '../components/Bits'
import { ButtonLink } from '../components/Button'
import { Card } from '../components/Card'
import { ExperienceRow } from '../components/ExperienceRow'
import { Holo } from '../components/Holo'
import { Nav } from '../components/Nav'
import { CapabilityCard } from '../components/ServiceCard'
import { APPROACH, CAPABILITIES, EXPERIENCE, HOME, TOOLS } from '../data'
import { cx } from '../lib/cx'
import { useDocumentTitle } from '../lib/storage'

const EASE = [0.22, 1, 0.36, 1] as const

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden rounded-[var(--radius-card)] bg-card px-5 pt-3 pb-6 sm:px-8 lg:pb-9">
      <Nav />
      <div className="relative flex flex-col lg:block lg:h-[clamp(560px,calc(100svh-262px),860px)]">
        {/* Stats, top right */}
        <div className="order-1 mt-8 grid grid-cols-3 gap-4 sm:mt-10 lg:absolute lg:top-[6%] lg:right-0 lg:mt-0 lg:flex lg:gap-[clamp(1.5rem,0.5rem+1.6vw,2.75rem)]">
          {HOME.stats.map((s) => (
            <Stat key={s.label.join(' ')} value={s.value} label={s.label} />
          ))}
        </div>

        {/* The chrome knot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, ease: EASE }}
          className="order-3 mx-auto mt-6 mb-2 w-[min(88vw,480px)] lg:absolute lg:top-[4%] lg:left-[24%] lg:m-0 lg:w-[min(30vw,calc((100svh-262px)*0.7),560px)]"
        >
          <Holo kind="knot" motion priority />
        </motion.div>

        {/* Captions, left */}
        <p className="caps relative z-10 order-2 mt-10 max-w-[12.5rem] lg:absolute lg:top-[40%] lg:left-0 lg:mt-0">{HOME.captionTop}</p>
        <p className="caps relative z-10 order-5 mt-8 max-w-[15rem] self-end text-right lg:absolute lg:top-[80%] lg:left-0 lg:mt-0 lg:max-w-[13rem] lg:self-auto">{HOME.captionBottom}</p>

        {/* Reach out + headline, bottom right */}
        <div className="relative z-10 order-4 mt-6 flex flex-col items-end lg:absolute lg:right-0 lg:bottom-0 lg:mt-0">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55, ease: EASE }} className="mb-[clamp(1rem,4svh,2.6rem)]">
            <ArrowLink to="/contact">{HOME.reachOut}</ArrowLink>
          </motion.div>
          <h1 id="hero-title" className="display text-right text-[clamp(3.1rem,15.6vw,5.4rem)] sm:text-[clamp(3.6rem,11.4vw,7rem)] lg:text-[min(8.2vw,15svh,8.6rem)]">
            {HOME.headline.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.04em]">
                <motion.span className="block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease: EASE }}>
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const [active, setActive] = useState(1)
  const shown = CAPABILITIES.slice(0, 3)
  return (
    <section aria-labelledby="skills-title" className="grid gap-2 md:grid-cols-2">
      <Card className="flex min-h-[340px] flex-col p-6 sm:p-8 md:min-h-0">
        <Title id="skills-title" lines={HOME.skillsTitle} className="relative z-10 self-end" />
        <div aria-hidden className="my-4 w-[min(48%,200px)]">
          <Holo kind="sphere" motion />
        </div>
        <ArrowLink to="/skills" tone="ink" size="sm" className="relative z-10 mt-auto self-end">
          All skills
        </ArrowLink>
      </Card>
      <ul className="grid gap-2">
        {shown.map((c, i) => (
          <li key={c.slug}>
            <CapabilityCard capability={c} active={active === i} onActivate={() => setActive(i)} />
          </li>
        ))}
      </ul>
    </section>
  )
}

function Manifesto() {
  return (
    <Card as="section" tone="night" aria-labelledby="manifesto-title" className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
      <div className="flex flex-col justify-between gap-10">
        <Reveal>
          <Title id="manifesto-title" lines={HOME.manifestoTitle} align="left" size="lg" />
        </Reveal>
        <div className="grid max-w-lg grid-cols-3 gap-4">
          {HOME.stats.map((s) => (
            <Stat key={s.label.join(' ')} value={s.value} label={s.label} align="left" tone="light" />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="caps ml-auto max-w-[28rem] text-right text-[13px] leading-[1.35] text-white">{HOME.manifesto}</p>
        <Photo image="nocturne" ratio="4/3" className="rounded-[var(--radius-card-sm)]" />
      </div>
    </Card>
  )
}

function Approach() {
  return (
    <section aria-labelledby="approach-title" className="grid gap-2">
      <Card className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-end">
        <p className="order-2 max-w-sm text-muted md:order-1">Four habits that shape every ticket, call and shift.</p>
        <Title id="approach-title" lines={HOME.approachTitle} className="order-1 md:order-2" />
      </Card>
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {APPROACH.map((a, i) => (
          <li key={a.title} className="h-full">
            <Reveal delay={i * 0.06} className="h-full">
              <Card tone={a.tone} className="flex h-full min-h-[380px] flex-col p-6 sm:p-7">
                <p className={cx('caps tabular-nums', a.tone === 'white' ? 'text-muted' : 'text-white/80')}>0{i + 1}</p>
                <h3 className="mt-2 self-end text-right text-[clamp(1.35rem,1.05rem+0.8vw,1.75rem)] leading-[1.05] tracking-[-0.03em] uppercase">
                  {a.title.split(' ').map((w) => (
                    <span key={w} className="block">
                      {w}
                    </span>
                  ))}
                </h3>
                <div className="mx-auto my-4 w-[62%] max-w-[220px]" aria-hidden>
                  <Holo kind={a.art} />
                </div>
                <p className={cx('mt-auto text-[15px] leading-snug', a.tone === 'white' ? 'text-muted' : 'text-white/85')}>{a.body}</p>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Experience() {
  return (
    <section aria-labelledby="experience-title" className="grid gap-2">
      <Card className="flex flex-wrap items-end justify-between gap-6 p-6 sm:p-8">
        <Title id="experience-title" lines={HOME.experienceTitle} align="left" />
        <ArrowLink to="/experience">Full experience</ArrowLink>
      </Card>
      <ul className="grid gap-2">
        {EXPERIENCE.slice(0, 4).map((role, i) => (
          <li key={`${role.company}-${role.dates}`}>
            <Reveal delay={i * 0.05}>
              <Card>
                <ExperienceRow role={role} />
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Tools() {
  return (
    <section aria-labelledby="tools-title" className="grid gap-2 lg:grid-cols-[1fr_1.45fr]">
      <Card className="flex min-h-[320px] flex-col justify-between gap-8 p-6 sm:p-8">
        <Title id="tools-title" lines={['Systems', 'I use']} align="left" />
        <div className="flex items-end justify-between gap-6">
          <div className="w-28" aria-hidden>
            <Holo kind="star" motion />
          </div>
          <p className="max-w-[16rem] text-right text-muted">
            Salesforce CRM, Microsoft 365 and four operating systems, used daily rather than listed.
          </p>
        </div>
      </Card>
      <Card tone="violet" className="flex flex-col justify-between gap-8 p-6 sm:p-10">
        <p className="caps text-white/80">{HOME.toolsLabel}</p>
        <ul className="flex flex-wrap gap-2">
          {TOOLS.map((tool) => (
            <li key={tool} className="round inline-flex h-10 items-center rounded-full bg-white/14 px-4 text-[15px] font-medium text-white">
              {tool}
            </li>
          ))}
        </ul>
        <p className="text-[15px] text-white/85">Fluent on Windows, macOS, iOS and Android, and comfortable reading a wiring schematic before touching a machine.</p>
      </Card>
    </section>
  )
}

function Cta() {
  return (
    <Card as="section" aria-labelledby="cta-title" className="grid gap-8 p-6 sm:p-8 md:grid-cols-[auto_1fr] md:items-end">
      <div className="mx-auto w-[min(70vw,340px)] md:mx-0" aria-hidden>
        <Holo kind="cloud" motion />
      </div>
      <div className="flex flex-col items-end gap-6 text-right">
        <Title id="cta-title" lines={HOME.cta.title} size="lg" />
        <p className="max-w-md text-muted">{HOME.cta.body}</p>
        <ButtonLink to="/contact" variant="violet" size="lg" iconRight={<ArrowRight className="size-5" />}>
          {HOME.cta.action}
        </ButtonLink>
      </div>
    </Card>
  )
}

export function Home() {
  useDocumentTitle()
  return (
    <div className="grid gap-2 p-2">
      <Hero />
      <Skills />
      <Manifesto />
      <Approach />
      <Experience />
      <Tools />
      <Cta />
    </div>
  )
}
