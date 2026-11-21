import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'

import { Footer } from './components/Footer'
import { ToastProvider } from './components/Overlay'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Experience } from './pages/Experience'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Skills } from './pages/Skills'

/** Scroll to the top on a new page, or to the #hash target when there is one. */
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      return
    }
    // Wait for the page transition to mount the target.
    const t = window.setTimeout(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 420)
    return () => window.clearTimeout(t)
  }, [pathname, hash])
  return null
}

function Pages() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        id="main"
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        <Routes location={location}>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="skills" element={<Skills />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  )
}

// '' at the domain root, '/portfolio-' when served from a GitHub Pages sub-path.
const BASENAME = import.meta.env.BASE_URL.replace(/\/$/, '')

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter basename={BASENAME}>
        <ToastProvider>
          <ScrollManager />
          <a href="#main" className="sr-only z-[100] rounded-full bg-violet px-5 py-3 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
            Skip to content
          </a>
          <div id="top" className="flex min-h-svh flex-col">
            <Pages />
            <Footer />
          </div>
        </ToastProvider>
      </BrowserRouter>
    </MotionConfig>
  )
}
