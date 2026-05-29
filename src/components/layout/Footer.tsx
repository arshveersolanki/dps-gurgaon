import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { useT } from "@/lib/i18n/useT";
import { contact, social } from "@/lib/content/campuses";
import { NAV } from "@/components/layout/navItems";

function SocialIcon({ id }: { id: string }): ReactNode {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", "aria-hidden": true as const };
  switch (id) {
    case "facebook":
      return <svg {...common} fill="currentColor"><path d="M14 9h3V6h-3c-2 0-3 1-3 3v2H8v3h3v6h3v-6h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5Z" /></svg>;
    case "instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "twitter":
      return <svg {...common} fill="currentColor"><path d="M4 4h4l5 7 5-7h2l-6 8 6 8h-4l-5-7-5 7H4l6-8L4 4Z" /></svg>;
    case "linkedin":
      return (
        <svg {...common} fill="currentColor">
          <path d="M5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM4 9h2v11H4V9Zm5 0h2v1.5c.6-1 1.7-1.7 3-1.7 2.2 0 3 1.5 3 3.8V20h-2v-6c0-1.4-.5-2.2-1.7-2.2-1 0-1.6.7-1.6 2.2V20H9V9Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="6" width="18" height="12" rx="3" />
          <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="scroll-mt-24 border-t border-paper/10 bg-navy-900 text-paper">
      <div className="shell grid gap-12 py-20 md:grid-cols-12 md:py-24">
        {/* Brand + contact */}
        <div className="md:col-span-4">
          <p className="font-display text-3xl font-light tracking-tight2">{t("brand.line1")}</p>
          <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-label text-gold-light">
            {t("brand.line2")}
          </p>
          <p className="mt-7 max-w-xs font-display text-2xl italic leading-snug text-paper/85">
            “{t("footer.motto")}”
          </p>
          <div className="mt-7 space-y-2 font-sans text-sm text-paper/65">
            <p>{contact.address}</p>
            <p>
              <a href={contact.phoneHref} className="hover:text-gold">
                {contact.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`} className="hover:text-gold">
                {contact.email}
              </a>
            </p>
          </div>
          <p className="mt-6 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-paper/45">
            {t("footer.affil")}
          </p>
        </div>

        {/* Navigation */}
        <div className="md:col-span-3">
          <h3 className="eyebrow mb-6">{t("footer.quick")}</h3>
          <ul className="space-y-3">
            {NAV.map((item) => (
              <li key={item.key}>
                <a href={item.href} className="font-sans text-sm text-paper/65 transition-colors hover:text-gold">
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Admissions */}
        <div className="md:col-span-2">
          <h3 className="eyebrow mb-6">{t("nav.admissions")}</h3>
          <ul className="space-y-3 font-sans text-sm text-paper/65">
            <li>
              <Link to="/admissions" className="transition-colors hover:text-gold">
                Process
              </Link>
            </li>
            <li>
              <a href="#admissions" className="transition-colors hover:text-gold">
                Fee Structure
              </a>
            </li>
            <li>
              <a href="#admissions" className="transition-colors hover:text-gold">
                Entry Points
              </a>
            </li>
            <li>
              <a
                href={contact.campusCare}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-gold"
              >
                {t("footer.campuscare")}
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div className="md:col-span-3">
          <h3 className="eyebrow mb-6">{t("footer.connect")}</h3>
          <div className="flex gap-3">
            {social.map((s) => (
              <a
                key={s.id}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center border border-paper/20 text-paper/70 transition-colors hover:border-gold hover:text-gold"
              >
                <SocialIcon id={s.id} />
              </a>
            ))}
          </div>
          <Link
            to="/portal"
            className="mt-7 inline-flex items-center gap-2 border border-gold/50 px-5 py-3 font-mono text-[0.68rem] uppercase tracking-label text-gold transition-colors hover:bg-gold hover:text-navy-900"
          >
            <span className="h-1.5 w-1.5 bg-gold" aria-hidden />
            {t("nav.portal")}
          </Link>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="shell flex flex-col items-start justify-between gap-3 py-6 font-mono text-[0.64rem] uppercase tracking-[0.14em] text-paper/45 md:flex-row md:items-center">
          <span>© {year} Delhi Public School, Gurgaon. {t("footer.rights")}</span>
          <span className="text-gold-light/70">{t("footer.designed")}</span>
          <span>Silver Jubilee · 2026–27</span>
        </div>
      </div>
    </footer>
  );
}
