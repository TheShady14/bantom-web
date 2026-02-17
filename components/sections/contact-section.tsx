import { BantomLogo } from "../bantom-logo"

export function ContactSection() {
  return (
    <footer id="contact" className="scroll-mt-32" aria-labelledby="contact-title">
      <div className="h-[3px] bg-foreground" />

      <div className="bg-[hsl(0,0%,78%)]">
        <div className="flex justify-center pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-12">
          <BantomLogo variant="full" />
        </div>

        <h2 id="contact-title" className="sr-only">Contact Information</h2>

        <div className="max-w-2xl mx-auto px-6 md:px-12 text-center pb-10 md:pb-14">
          <div className="space-y-2 text-[15px] md:text-base font-sans text-foreground">
            <p>
              <span className="font-semibold">Ms Siphokazi Pearl Bantom</span>{" "}
              <span className="text-foreground/70">CA (SA)</span>
            </p>
            <p>
              <span className="font-semibold">SAICA No.</span> 20033167
            </p>
            <p>
              <span className="font-semibold">SARS Tax Practitioner No.</span> PR-0002816
            </p>
            <p className="pt-3">
              <span className="font-semibold">Bantom Accounting and Taxation Services (Pty) Ltd</span>
            </p>
            <p className="text-foreground/70">2014/003661/07</p>
            <p className="pt-3">
              <span className="font-semibold">Mobile</span>{" "}
              <a href="tel:+27670786524" className="underline-offset-2 hover:underline">
                +27 67 078 6524
              </a>
            </p>
            <p>
              <span className="font-semibold">Email</span>{" "}
              <a href="mailto:siphokazib@bantom.co.za" className="underline-offset-2 hover:underline">
                siphokazib@bantom.co.za
              </a>
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 md:px-12 pb-14 md:pb-20">
          <div className="h-px bg-foreground/20 mb-10 md:mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h3 className="font-semibold text-[15px] md:text-base text-foreground font-sans mb-4 tracking-wide">
                Johannesburg Office Address
              </h3>
              <address className="not-italic text-[15px] md:text-base leading-[1.8] text-foreground font-sans">
                Regus Business Centre<br />
                Ground Floor<br />
                35 Fricker Road<br />
                Illovo, Sandton<br />
                Johannesburg<br />
                2196
              </address>
            </div>
            <div>
              <h3 className="font-semibold text-[15px] md:text-base text-foreground font-sans mb-4 tracking-wide">
                Gqeberha Office Address
              </h3>
              <address className="not-italic text-[15px] md:text-base leading-[1.8] text-foreground font-sans">
                Harbour View Building<br />
                Regus Business Centre<br />
                1st Floor<br />
                Oakworth Road<br />
                Humewood<br />
                Gqeberha<br />
                6001
              </address>
            </div>
          </div>
        </div>

        <div className="bg-foreground py-4 text-center">
          <p className="text-[10px] md:text-xs text-white/80 font-sans tracking-[0.15em]">
            {"Bantom Chartered Accountants (Pty) Ltd. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
