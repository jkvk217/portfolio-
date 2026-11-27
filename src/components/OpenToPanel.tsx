import { CONTACT, IMAGES, SITE } from '../data'
import { cx } from '../lib/cx'
import { Badge } from './Bits'
import { Card } from './Card'

/**
 * "Open to" panel: the portrait first, then the roles Jack will take, the work
 * arrangements and the references note.
 *
 * `columns` sets how the role list wraps: 2 in a narrow column (Contact),
 * 4 across a full-width row (About). Entries flow left to right, so pairing
 * them in the data keeps related roles on the same row.
 */
export function OpenToPanel({ columns = 2, className }: { columns?: 2 | 4; className?: string }) {
  return (
    <Card as="section" aria-label="Open to and work arrangements" tone="night" className={cx('grid gap-6 p-6 sm:p-8', className)}>
      <div className="flex flex-col items-center gap-4 border-b border-white/12 pb-6 text-center">
        <img
          src={IMAGES.jack.src}
          alt=""
          width={225}
          height={225}
          className="size-36 shrink-0 rounded-full object-cover ring-1 ring-white/20 sm:size-40"
        />
        <div>
          <p className="text-lg leading-tight font-medium tracking-[-0.03em] text-white">{SITE.name}</p>
          <p className="mt-1 text-sm text-night-muted">Springfield, Illinois</p>
        </div>
      </div>

      <div>
        <h2 className="caps text-night-muted">Open to</h2>
        <ul
          className={cx('mt-4 grid grid-cols-2 gap-x-5 gap-y-3', columns === 4 && 'sm:grid-cols-4')}
        >
          {CONTACT.openTo.map((o) => (
            <li key={o} className="flex items-start gap-2.5 text-[15px] leading-snug text-white">
              <span aria-hidden className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-violet-light" />
              {o}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-white/12 pt-6">
        <h2 className="caps text-night-muted">Ways I can work</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {CONTACT.availability.map((a) => (
            <li key={a}>
              <Badge tone="light">{a}</Badge>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-[15px] text-night-muted">References from previous employers are available on request.</p>
    </Card>
  )
}
