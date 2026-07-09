import Link from "next/link";
import { navLinks } from "@/lib/nav-links";

export function SiteFooter() {
  return (
    <footer className="bg-ink px-6 py-16 text-paper md:px-12 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-3xl font-semibold">
            IMAGINE <span className="text-pink">MEDIA</span>
          </p>
          <p className="mt-4 max-w-xs text-sm text-paper/60">
            Photographe &amp; vidéaste de mariage à Marrakech. Des images qui
            racontent vos plus beaux jours.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-pink">Navigation</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-paper/70 hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-pink">Studio</p>
            <ul className="mt-4 space-y-2 text-sm text-paper/70">
              <li>Marrakech, Maroc</li>
              <li>Ouvert 24h/24</li>
              <li>+212 6 61 72 89 93</li>
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-pink">Suivre</p>
            <ul className="mt-4 space-y-2 text-sm text-paper/70">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-paper">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-paper">
                  Google Avis
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-16 max-w-6xl text-xs text-paper/40">
        © {new Date().getFullYear()} Imagine Media — Tous droits réservés.
      </p>
    </footer>
  );
}
