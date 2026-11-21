import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'

import { Card } from '../components/Card'
import { Holo } from '../components/Holo'
import { PageHero } from '../components/Nav'
import { CONTACT, SITE } from '../data'
import { useDocumentTitle } from '../lib/storage'

export function Contact() {
  useDocumentTitle('Contact')
  return (
    <div className="grid gap-2 p-2">
      <PageHero title={CONTACT.title} eyebrow={CONTACT.eyebrow} intro={CONTACT.intro} art={<Holo kind="cloud" motion />} />

      <div className="grid gap-2 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <Card className="grid gap-10 p-6 sm:p-10">
          <div>
            <p className="caps text-muted">Email</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-2 inline-flex min-h-10 items-center text-[clamp(1.4rem,1rem+1.6vw,2.6rem)] leading-[1.1] tracking-[-0.04em] break-all text-ink transition-colors hov:text-violet"
            >
              {SITE.email}
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="caps text-muted">Phone</p>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="mt-2 flex min-h-10 items-center gap-2 font-medium transition-colors hov:text-violet">
                <Phone className="size-4 text-violet" aria-hidden />
                {SITE.phone}
              </a>
            </div>
            <div>
              <p className="caps text-muted">Location</p>
              <p className="mt-2 flex min-h-10 items-center gap-2 font-medium">
                <MapPin className="size-4 text-violet" aria-hidden />
                {SITE.address.join(', ')}
              </p>
            </div>
          </div>
          <div className="border-t border-line pt-8">
            <p className="caps text-muted">Availability</p>
            <p className="mt-2 max-w-md text-ink-2">{SITE.hours}, on site around Springfield or remote. Weekday mornings are the easiest time to reach me.</p>
            <a
              href={`mailto:${SITE.email}?subject=Hello%20Jack`}
              className="round mt-6 inline-flex min-h-14 items-center gap-2 rounded-full bg-violet px-7 font-medium text-white transition-colors hov:bg-violet-deep"
            >
              <Mail className="size-5" aria-hidden />
              Email Jack
              <ArrowRight className="size-5" aria-hidden />
            </a>
          </div>
        </Card>

        <div className="grid gap-2">
          <Card tone="night" className="grid gap-6 p-6 sm:p-8">
            <div>
              <h2 className="caps text-night-muted">Open to</h2>
              <ul className="mt-4 grid gap-3">
                {CONTACT.openTo.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-white">
                    <span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-violet-light" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[15px] text-night-muted">References from previous employers are available on request.</p>
          </Card>

          <Card className="p-6 sm:p-8">
            <h2 className="caps text-muted">Elsewhere</h2>
            <ul className="mt-3 divide-y divide-line">
              {SITE.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="flex min-h-12 items-center justify-between gap-4 font-medium transition-colors hov:text-violet"
                  >
                    {s.label}
                    <ArrowRight className="size-4 text-muted" aria-hidden />
                  </a>
                </li>
              ))}
              <li>
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="flex min-h-12 items-center justify-between gap-4 font-medium transition-colors hov:text-violet">
                  Phone
                  <span className="text-sm font-normal text-muted">{SITE.phone}</span>
                </a>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}
