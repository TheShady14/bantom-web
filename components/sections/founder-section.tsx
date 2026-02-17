import Image from "next/image"

export function FounderSection() {
  return (
    <section id="about-founder" className="scroll-mt-32" aria-labelledby="founder-title">
      <div className="relative h-[45vh] md:h-[55vh] lg:h-[60vh] overflow-hidden">
        <Image
          src="/images/bg-founder.jpg"
          alt="African lioness resting in grassland, black and white"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 flex items-end p-6 md:p-12 lg:p-20">
          <h2
            id="founder-title"
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-tight tracking-tight"
          >
            About Our<br />Founder
          </h2>
        </div>
      </div>

      <div className="bg-background px-6 md:px-12 lg:px-20 py-10 md:py-14 lg:py-20">
        <div className="max-w-3xl space-y-6 md:space-y-8">
          <p className="text-[15px] md:text-base lg:text-lg leading-relaxed text-foreground font-sans">
            Siphokazi Bantom is a registered Chartered Accountant under the South African Institute of Chartered
            Accountants (SAICA) and a SARS registered tax practitioner. She has a Bcom in Accounting and a Certificate
            in Theory of Accounting (Bcom Hons).
          </p>
          <p className="text-[15px] md:text-base lg:text-lg leading-relaxed text-foreground font-sans">
            Siphokazi completed her SAICA articles at a reputable audit firm in Johannesburg, where she gained invaluable
            practical experience in performing financial audits and independent reviews, preparation of financial statements,
            assisting clients with Revenue Services audits and training of junior articled clerks.
          </p>
          <p className="text-[15px] md:text-base lg:text-lg leading-relaxed text-foreground font-sans">
            After completing her articles, she gained commercial experience working as an accountant at various
            multinational corporations. As an accountant, she managed the accounting functions by ensuring financial
            compliance with financial controls and providing management with financial information that enabled them to
            plan, monitor and control their business units.
          </p>
          <p className="text-[15px] md:text-base lg:text-lg leading-relaxed text-foreground font-sans">
            {"Siphokazi serves as an Independent Trustee and Chairperson of Audit & Risk Committee in Cookhouse Wind Farm Community Trust, that has equity interest in an energy renewables company based in the Eastern Cape province. She also serves as an Independent Trustee at Khobab Renewable Energy Community Trust and Loeriesfontein Renewable Energy Community Trust in the Northern Cape province."}
          </p>
        </div>
      </div>
    </section>
  )
}
