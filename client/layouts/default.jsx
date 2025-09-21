// layout/Default.jsx
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { ThemeProvider, useTheme } from '@/components/ThemeProvider'
import { Suspense } from 'react'

// Komponen khusus supaya bisa akses context ThemeProvider
function LayoutContent({ children }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <Suspense>{children}</Suspense>
      <Footer />
    </>
  )
}

export default function Default({ children }) {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <LayoutContent>{children}</LayoutContent>
    </ThemeProvider>
  )
}
