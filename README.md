# Jack Vink — portfolio

A personal portfolio for Jack Vink, technical support and retail operations
specialist in Springfield, Illinois. It takes the structure and visual language
of the Lastwerk studio template and fills it with Jack's own history: fifteen
years of retail, technical support, electronics repair and service advising.

The home page opens on a white panel with a turning iridescent chrome knot,
three count-up figures and a huge uppercase headline, then stacks experience,
skills, working habits and contact panels on a pale grey canvas.

- **Home** (`/`): hero, what I bring, how I work, recent roles, systems and tools,
  a call to action.
- **Experience** (`/experience`): all eight roles since 2007 with dates,
  location, summary, responsibilities and focus tags.
- **Skills** (`/skills`): five capability areas with what each includes, plus
  everyday tools.
- **About** (`/about`): summary, numbers, how I work, education and
  certifications.
- **Contact** (`/contact`): email, phone, location, availability and the roles
  Jack is open to.
- A 404 page.

## Run it

```sh
bun install
bun run dev        # http://localhost:5305 (Vite + the Worker in workerd)
bun run build      # dist/client (assets) + dist/creative_agency/index.js (Worker)
bun run typecheck
```

## Edit it

- **`src/data.ts` holds every string and figure.** Start there.
  - `SITE`, `NAV`, `MENU`: name, contact details, links.
  - `HOME`, `APPROACH`: the home page copy and the four working habits.
  - `CAPABILITIES` (skills), `EXPERIENCE` (roles), `TOOLS`.
  - `ABOUT` (summary, numbers, education, certifications), `CONTACT`, `FOOTER`.
  - `RESUME.md` in the project root keeps the original resume as a reference.
- **Every image goes through one constant, `IMAGES`, in `src/data.ts`.** The
  placeholders in `public/images/` are generated, not photographs of Jack. To use
  your own, change each entry's `src` (a file in `public/images/` or any URL) and
  its `alt`. The `holo*` entries are the iridescent objects rendered by
  `<Holo kind="…">` in `src/components/Holo.tsx`; each has an SVG fallback.
- **Pages** are in `src/pages/`; routes are in `src/App.tsx` with react-router.
- **`src/worker/index.ts`** is the Cloudflare Worker: `GET /api/health` returns
  `{ ok: true }`, any other `/api/*` is a JSON 404, everything else falls through
  to the built assets.

### Tokens (`src/styles.css`)

| Group | Tokens |
| --- | --- |
| Colour | `canvas`, `card`, `soft`, `line`, `line-strong`, `ink`, `ink-2`, `muted`, `faint` (decoration only), `night`, `night-2`, `night-muted`, `violet`, `violet-deep`, `violet-soft`, `violet-light`, `pink`, `cyan`, `success`, `danger`, `scrim` |
| Type | `--font-sans` Inter Tight; utilities `display` (big uppercase) and `caps` (12px captions) |
| Radius | `xs` 10px, `control` 16px, `card-sm` 22px, `card` 30px; pills use `rounded-full` + `.round` |
| Shadow | `card`, `float`, `violet`, `focus` |
| Motion | `--duration-fast/base/slow/hero`, `--ease-out-soft`, `--ease-in-out-soft`; keyframes `spin-slow`, `float`, `marquee`, `shimmer` |
| State variants | `hov:`, `prs:`, `fv:` and `group-hov:` match the real hover, active and focus-visible states |

The site is light only. With `prefers-reduced-motion`, the knot stops turning,
the objects stop floating and figures show their final value; fades remain.

### Components (`src/components/`)

| File | Components |
| --- | --- |
| `Button.tsx` | `Button` / `ButtonLink` (solid, violet, outline, ghost, light; sm/md/lg; loading), `IconButton` |
| `Field.tsx` | `Field` + `Input` / `Select` / `Textarea`, `Checkbox`, `ChoiceGroup`, `FormMessage` |
| `Bits.tsx` | `ArrowLink`, `Logo`, `Reveal`, `Photo`, `CountUp`, `Stat`, `Title`, `Badge`, `Chip`, `EmptyState`, `Avatar` |
| `Card.tsx` | `Card` (white, soft, violet, night) |
| `Content.tsx` | `Marquee`, `TestimonialSlider`, `Accordion`, `Stepper` |
| `Overlay.tsx` | `Modal`, `Drawer`, `useFocusTrap`, `ToastProvider` / `useToast` |
| `Nav.tsx` | `Nav` (header row and site menu), `PageHero` |
| `ExperienceRow.tsx` | One role: dates and place, title, employer, summary, highlights, tags |
| Others | `Holo`, `CapabilityCard`, `Footer` |

## Android app

`android/` is a small native wrapper: one `WebView` activity serving the built
site from inside the APK, so it works offline. It needs the Android SDK and a
JDK (Android Studio's bundled JBR is fine). To rebuild after changing the site:

```sh
bun run build                                   # writes dist/client
rm -rf android/app/src/main/assets/* \
  && cp -r dist/client/. android/app/src/main/assets/
cd android && ./gradlew assembleDebug           # app/build/outputs/apk/debug/
```

Set `JAVA_HOME` to a JDK 17+ and `ANDROID_HOME` to your SDK if the wrapper cannot
find them. The debug APK installs on any phone running Android 7.0 or newer; it
is signed with the local debug key, which is fine for personal side-loading but
not for the Play Store.

## Deploy with Freebuff Sites

`deploy.json` already points at the build output. After `bun run build`, deploy
it with the `sites_deploy` tool from this directory.
