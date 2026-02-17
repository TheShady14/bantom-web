"use client"

import { useEffect, useState, type ReactNode } from "react"
import { SectionNav } from "./section-nav"

const sectionIds = [
  "about-us",
  "accounting",
  "taxation",
  "company-secretarial",
  "board-secretarial",
  "independent-reviews",
  "about-founder",
]

interface BantomPageClientProps {
  children: ReactNode
}

export function BantomPageClient({ children }: BantomPageClientProps) {
  const [activeSection, setActiveSection] = useState<string>("")
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight * 0.5)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showNav
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <SectionNav activeSection={activeSection} />
      </div>
      {children}
    </main>
  )
}
