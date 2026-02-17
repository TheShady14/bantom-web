"use client"

import { useCallback } from "react"
import Image from "next/image"

interface SectionNavProps {
  activeSection?: string
}

const navItems = [
  { id: "about-us", label: "About Us", icon: "/images/icons/icon-about.png" },
  { id: "accounting", label: "Accounting\nServices", icon: "/images/icons/icon-accounting.png" },
  { id: "taxation", label: "Taxation\nServices", icon: "/images/icons/icon-taxation.png" },
  { id: "company-secretarial", label: "Company\nSecretarial\nServices", icon: "/images/icons/icon-company.png" },
  { id: "board-secretarial", label: "Board\nSecretarial\nServices", icon: "/images/icons/icon-board.png" },
  { id: "independent-reviews", label: "Independente\nReviews", icon: "/images/icons/icon-reviews.png" },
  { id: "about-founder", label: "About Our\nFounder", icon: "/images/icons/icon-founder.png" },
]

const bgShades = [
  "bg-[hsl(0,0%,91%)]",
  "bg-[hsl(0,0%,87%)]",
  "bg-[hsl(0,0%,83%)]",
  "bg-[hsl(0,0%,79%)]",
  "bg-[hsl(0,0%,83%)]",
  "bg-[hsl(0,0%,87%)]",
  "bg-[hsl(0,0%,91%)]",
]

export function SectionNav({ activeSection }: SectionNavProps) {
  const handleClick = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const navHeight = 120
      const top = element.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top, behavior: "smooth" })
    }
  }, [])

  return (
    <nav
      className="border-b border-[hsl(0,0%,72%)] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
      aria-label="Service sections"
    >
      <div className="flex items-stretch overflow-x-auto scrollbar-hide">
        {navItems.map(({ id, label, icon }, index) => {
          const isActive = activeSection === id
          return (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`flex flex-col items-center justify-start flex-1 min-w-[80px] md:min-w-[110px] lg:min-w-[130px] px-1 md:px-2 pt-3 pb-2 md:pt-4 md:pb-3 transition-all duration-300 ${bgShades[index]} ${
                isActive ? "nav-item-active" : "hover:brightness-95"
              }`}
              aria-current={isActive ? "true" : undefined}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center mb-1.5 md:mb-2">
                <Image
                  src={icon || "/placeholder.svg"}
                  alt=""
                  width={56}
                  height={56}
                  className={`w-full h-full object-contain transition-transform duration-300 ${
                    isActive ? "scale-110" : ""
                  }`}
                />
              </div>
              <span
                className={`text-[7px] md:text-[9px] lg:text-[10px] leading-[1.3] text-center font-sans whitespace-pre-line max-w-[80px] transition-all duration-300 ${
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-foreground/60"
                }`}
              >
                {label}
              </span>
              <div
                className={`mt-1.5 w-8 md:w-10 h-[2px] transition-all duration-300 ${
                  isActive ? "bg-foreground" : "bg-transparent"
                }`}
              />
            </button>
          )
        })}
      </div>
    </nav>
  )
}
