import { Link } from 'react-router'

import { FOOTER, MENU, SITE, emailLink } from '../data'
import { Logo } from './Bits'
import { Card } from './Card'

export function Footer() {
  return (
    <footer className="px-2 pb-2">
      <Card tone="night" className="px-5 pt-10 pb-6 sm:px-8 sm:pt-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="max-w-md">
            <p className="display text-[clamp(1.8rem,1.4rem+1.2vw,2.6rem)] leading-[0.95]">Let’s talk</p>
            <p className="mt-3 mb-6 text-night-muted">{FOOTER.note}</p>
            <a
              href={emailLink()}
              target="_blank"
              rel="noreferrer"
              className="round inline-flex min-h-14 items-center gap-2 rounded-full bg-white/10 px-6 font-medium text-white transition-colors hov:bg-white/16"
            >
              {SITE.email}
            </a>
          </div>
          <nav aria-label="Footer">
            <p className="caps mb-3 text-night-muted">Explore</p>
            <ul className="grid grid-cols-2 gap-x-6">
              {MENU.map((m) => (
                <li key={m.to}>
                  <Link to={m.to} className="inline-flex min-h-10 items-center text-white transition-colors hov:text-violet-light">
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-1">
            <address className="text-night-muted not-italic">
              <p className="caps mb-3">Based in</p>
              {SITE.address.map((l) => (
                <span key={l} className="block text-white">
                  {l}
                </span>
              ))}
              <span className="mt-2 block text-sm">{SITE.hours}</span>
            </address>
            <div>
              <p className="caps mb-3 text-night-muted">Contact</p>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="inline-flex min-h-10 items-center text-white hov:text-violet-light">
                {SITE.phone}
              </a>
              <ul className="flex flex-wrap gap-x-4">
                {SITE.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="inline-flex min-h-10 items-center text-white hov:text-violet-light"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p
          aria-hidden
          className="display mt-16 -mb-[0.12em] text-center text-[clamp(2.6rem,-0.5rem+13vw,13rem)] leading-[0.85] tracking-[-0.07em] text-white select-none [word-spacing:0.22em]"
        >
          Jack Vink
        </p>
        <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-white/12 pt-5 text-sm text-night-muted sm:flex-row sm:items-center">
          <span className="flex items-center gap-2">
            <Logo light className="[&_svg]:size-6" />
            {FOOTER.legal}
          </span>
          <a href="#top" className="inline-flex min-h-10 items-center text-white hov:text-violet-light">
            Back to top
          </a>
        </div>
      </Card>
    </footer>
  )
}
