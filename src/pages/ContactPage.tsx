import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { campuses, contact } from "@/lib/content/campuses";
import { useLocaleStore } from "@/lib/store/locale";
import { pick } from "@/lib/content/types";

export function ContactPage() {
  const locale = useLocaleStore((s) => s.locale);
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        intro="Reception, admissions, alumni and general enquiries — by phone, by email, or by visiting any of our three campuses."
      />
      <Section id="contact" className="bg-bg">
        <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Primary contact block */}
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-5">Reach out</p>
            <h2 className="font-display text-3xl font-light tracking-tight2">
              Sector 45, Gurugram
            </h2>
            <div className="mt-8 space-y-5 font-sans text-base text-content">
              <p className="text-muted">{contact.address}</p>
              <p>
                <a href={contact.phoneHref} className="text-content hover:text-forest-600">
                  {contact.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${contact.email}`} className="text-content hover:text-forest-600">
                  {contact.email}
                </a>
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href={`mailto:${contact.email}`} variant="solid">
                Email the school
              </Button>
              <Button href={contact.tour360} variant="outline">
                Take the 360° tour
              </Button>
            </div>
          </Reveal>

          {/* Three campus rail */}
          <Reveal delay={0.08} className="lg:col-span-7">
            <p className="eyebrow mb-5">Our campuses</p>
            <ul className="border-t border-line/15">
              {campuses.map((c, i) => (
                <li
                  key={c.id}
                  className="grid grid-cols-12 gap-4 border-b border-line/15 py-7"
                >
                  <span className="col-span-2 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-accent">
                    {String(i + 1).padStart(2, "0")} · {c.sector}
                  </span>
                  <div className="col-span-10">
                    <p className="font-display text-2xl font-light tracking-tight2">
                      {pick(c.name, locale)}
                    </p>
                    <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-label text-muted">
                      {pick(c.wing, locale)}
                    </p>
                    <p className="mt-3 font-sans text-sm text-muted">
                      {pick(c.address, locale)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
