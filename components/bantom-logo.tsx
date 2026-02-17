import Image from "next/image"

interface BantomLogoProps {
  variant?: "full" | "compact"
  className?: string
}

export function BantomLogo({ variant = "full", className = "" }: BantomLogoProps) {
  if (variant === "full") {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <Image
          src="/images/logo-full.png"
          alt="Bantom Chartered Accountants - We Make Figures Make Sense"
          width={280}
          height={160}
          className="w-[200px] md:w-[260px] lg:w-[300px] h-auto"
          priority
        />
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        src="/images/logo-compact.png"
        alt="Bantom Chartered Accountants"
        width={200}
        height={120}
        className="w-[160px] md:w-[200px] lg:w-[220px] h-auto"
      />
    </div>
  )
}
