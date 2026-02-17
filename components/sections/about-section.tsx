import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about-us" className="scroll-mt-32" aria-labelledby="about-us-title">
      <div className="relative h-[45vh] md:h-[55vh] lg:h-[60vh] overflow-hidden">
        <Image
          src="/images/bg-about.jpg"
          alt="African zebras in black and white"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 flex items-end p-6 md:p-12 lg:p-20">
          <h2
            id="about-us-title"
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-none tracking-tight"
          >
            About Us
          </h2>
        </div>
      </div>

      <div className="bg-background px-6 md:px-12 lg:px-20 py-10 md:py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-[15px] md:text-base lg:text-lg leading-relaxed text-foreground font-sans mb-6 md:mb-8">
            <strong className="font-semibold">Bantom Chartered Accountants (Pty) Ltd</strong> is a 100% black female owned
            company established in 2014 to provide specialised accounting, taxation, and business solutions.
          </p>
          <p className="text-[15px] md:text-base lg:text-lg leading-relaxed text-foreground font-sans mb-6 md:mb-8">
            We do analysis, compile reports and provide expert tax advice tailor-made to suit the needs of a business. In this
            way business owners have peace of mind, allowing them to focus on their day-to-day operations while we take
            care of statutory and financial duties.
          </p>
          <p className="text-[15px] md:text-base lg:text-lg leading-relaxed text-foreground font-sans">
            {"We know that every business is unique and run in its own way; this is why we offer client-based services suitable to our clients' needs."}
          </p>
        </div>
      </div>
    </section>
  )
}
