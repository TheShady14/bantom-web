import Image from "next/image"

const services = [
  "Registration for Value Added Tax (VAT)",
  "Registration for Employees tax (PAYE)",
  "Application and assistance with obtaining Tax Compliance Certificates",
  "Tax returns preparations and submissions (Income Tax, PAYE and VAT) via e-filing",
  "Guaranteed attendance and negotiations with SARS when it conducts its audits",
  "Arranging deferred payments plans",
  "Resolving of tax problems",
  "Advise on how to lawfully minimise tax liabilities through efficient tax planning",
  "Advise in tax implications of matters",
  "General administration of corporate income tax",
]

export function TaxationSection() {
  return (
    <section id="taxation" className="scroll-mt-32" aria-labelledby="taxation-title">
      <div className="relative h-[45vh] md:h-[55vh] lg:h-[60vh] overflow-hidden">
        <Image
          src="/images/bg-taxation.jpg"
          alt="African oryx in desert landscape, black and white"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 flex items-center p-6 md:p-12 lg:p-20">
          <h2
            id="taxation-title"
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-tight tracking-tight"
          >
            Taxation<br />Services
          </h2>
        </div>
      </div>

      <div className="bg-background px-6 md:px-12 lg:px-20 py-10 md:py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-[15px] md:text-base lg:text-lg leading-relaxed text-foreground font-sans mb-6 md:mb-8">
            We assist our clients with compliance with various requirements of the Income Tax Act
          </p>
          <ul className="space-y-4 md:space-y-5">
            {services.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="w-[5px] h-[5px] rounded-full bg-foreground mt-[9px] shrink-0" aria-hidden="true" />
                <span className="text-[15px] md:text-base lg:text-lg leading-relaxed text-foreground font-sans">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
