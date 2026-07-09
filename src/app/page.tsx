import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";

const featured = [
  {
    title: "Mariages",
    desc: "Reportages complets, du henné à la nuit de noces",
    image: "/images/couple-rooftop.jpg",
    href: "/portfolio",
  },
  {
    title: "Portraits",
    desc: "Séances couple, famille et fiançailles",
    image: "/images/bride-caftan.jpg",
    href: "/portfolio",
  },
  {
    title: "Réceptions",
    desc: "Salles, décoration, ambiance et instants volés",
    image: "/images/venue-hall.jpg",
    href: "/portfolio",
  },
];

const avis = [
  { name: "Salma K.", quote: "Des images à couper le souffle, l'équipe est présente du matin au soir sans jamais être intrusive." },
  { name: "Yassine M.", quote: "Le film de notre mariage nous fait pleurer à chaque visionnage. Un vrai talent de conteur." },
  { name: "Nour E.", quote: "Réactifs, professionnels, disponibles à toute heure. On recommande les yeux fermés." },
];

export default function Home() {
  return (
    <>
      <section className="relative flex h-svh min-h-[640px] w-full items-end overflow-hidden bg-ink">
        <Image
          src="/images/hero-riad.jpg"
          alt="Mariée traversant un riad marocain à la lumière dorée, photographie de mariage Imagine Media"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/50" />

        <div className="relative z-10 w-full px-6 pb-14 md:px-12 md:pb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-pink">
            Marrakech · Photographe &amp; Vidéaste de mariage
          </p>
          <h1 className="mt-4 font-display text-[12vw] italic leading-[0.95] text-paper md:text-[7vw]">
            Imagine <span className="not-italic text-pink">Media</span>
          </h1>
          <div className="mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-md text-paper/70">
              Nous racontons vos plus beaux jours en images. Photographie et
              film de mariage haut de gamme, entre tradition marocaine et
              regard cinématographique.
            </p>
            <Magnetic>
              <Link
                href="/contact"
                data-cursor="link"
                className="inline-flex items-center gap-3 rounded-full bg-pink px-7 py-4 text-sm uppercase tracking-[0.15em] text-paper"
              >
                Réserver votre date
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-24">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-pink">Notre approche</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Capturer l&apos;émotion, pas seulement l&apos;instant.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-lg text-ink/70">
              Chaque mariage a sa propre lumière, son propre rythme. Notre
              équipe s&apos;efface pour documenter vos émotions les plus
              sincères, avec un regard éditorial et un souci du détail
              constant — du premier regard à la dernière danse.
            </p>
            <Link
              href="/a-propos"
              data-cursor="link"
              className="mt-6 inline-block border-b border-ink pb-1 text-sm uppercase tracking-[0.15em]"
            >
              Découvrir le studio
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-paper md:px-12 md:py-32">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-pink">Portfolio</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Un regard, trois expertises</h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featured.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.12}>
              <Link href={item.href} data-cursor="link" className="viewfinder group block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                </div>
                <h3 className="mt-5 font-display text-2xl">{item.title}</h3>
                <p className="mt-1 text-sm text-paper/60">{item.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper px-6 py-24 md:px-12 md:py-32">
        <Reveal className="flex items-center gap-3">
          <span className="font-display text-3xl text-pink">5.0</span>
          <span className="text-sm uppercase tracking-[0.2em] text-ink/60">★★★★★ sur Google · 5 avis</span>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {avis.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.12}>
              <p className="font-display text-xl leading-snug text-ink/90">
                &laquo; {a.quote} &raquo;
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.15em] text-pink">{a.name}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-pink px-6 py-24 text-paper md:px-12 md:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl md:text-6xl">
            Votre histoire mérite d&apos;être racontée.
          </h2>
          <p className="mt-4 text-paper/85">Disponibles 24h/24 pour organiser votre reportage.</p>
          <Magnetic className="mt-8 inline-block">
            <Link
              href="/contact"
              data-cursor="link"
              className="inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm uppercase tracking-[0.15em] text-paper"
            >
              Prendre contact
            </Link>
          </Magnetic>
        </Reveal>
      </section>
    </>
  );
}
