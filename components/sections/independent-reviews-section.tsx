import Image from "next/image"

export function IndependentReviewsSection() {
  return (
    <section id="independent-reviews" className="scroll-mt-32" aria-labelledby="independent-reviews-title">
      <div className="relative h-[45vh] md:h-[55vh] lg:h-[60vh] overflow-hidden">
        <Image
          src="/images/bg-reviews.jpg"
          alt="African giraffe above tree canopy, black and white"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 flex items-end p-6 md:p-12 lg:p-20">
          <h2
            id="independent-reviews-title"
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-tight tracking-tight"
          >
            Independente<br />Reviews
          </h2>
        </div>
      </div>

      <div className="bg-background px-6 md:px-12 lg:px-20 py-10 md:py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-[15px] md:text-base lg:text-lg leading-relaxed text-foreground font-sans">
            We also provide limited assurance on annual financial statements of companies with a Public Interest Score
            below 100.
          </p>
        </div>
      </div>
    </section>
  )
}
