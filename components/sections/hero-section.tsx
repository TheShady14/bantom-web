import Image from "next/image"
import { BantomLogo } from "../bantom-logo"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col" aria-label="Hero">
      <div className="bg-background flex items-center justify-center py-20 md:py-28 lg:py-32 px-6">
        <BantomLogo variant="full" />
      </div>

      <div className="relative flex-1 min-h-[50vh] md:min-h-[60vh] lg:min-h-[65vh]">
        <Image
          src="/images/bg-hero.jpg"
          alt="African Nguni cattle in black and white"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        <div className="absolute bottom-10 left-1/2 animate-gentle-bounce flex flex-col items-center gap-1">
          <span className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-white/70 font-sans">
            Scroll
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-white/70"
          >
            <path
              d="M8 2L8 14M3 9L8 14L13 9"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
