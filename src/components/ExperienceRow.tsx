import type { Role } from '../data'
import { Badge } from './Bits'

/** One job: dates and place on the left, role, employer and detail on the right. */
export function ExperienceRow({ role, detailed = false }: { role: Role; detailed?: boolean }) {
  return (
    <article className="grid gap-5 p-6 sm:p-8 md:grid-cols-[13rem_1fr] md:gap-10">
      <div>
        <p className="caps text-muted tabular-nums">{role.dates}</p>
        <p className="mt-2 text-sm text-muted">{role.location}</p>
        {role.current && (
          <Badge tone="violet" className="mt-3">
            Current
          </Badge>
        )}
      </div>
      <div>
        <h3 className="text-[clamp(1.3rem,1.05rem+0.75vw,1.75rem)] leading-[1.1] font-medium tracking-[-0.03em] text-balance">{role.title}</h3>
        <p className="mt-1.5 font-medium text-violet">{role.company}</p>
        <p className="mt-3 max-w-xl text-ink-2">{role.summary}</p>
        {detailed && (
          <ul className="mt-5 grid gap-2.5 text-[15px] text-ink-2">
            {role.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span aria-hidden className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-violet" />
                {h}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {role.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
    </article>
  )
}
