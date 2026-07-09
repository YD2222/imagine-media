import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";

const services = [
  {
    name: "Photographie",
    desc: "Reportage complet du jour J, préparatifs, cérémonie et réception. Galerie retouchée livrée sous 3 semaines.",
    items: ["Préparatifs & henné", "Cérémonie", "Séance couple", "Réception & soirée"],
    image: "/images/bride-caftan.jpg",
  },
  {
    name: "Vidéo",
    desc: "Film cinématographique de votre mariage, teaser court + film long, son et musique originale.",
    items: ["Teaser 3-5 min", "Film long 20-40 min", "Drone sur demande", "Livraison 4K"],
    image: "/images/reception-dance.jpg",
  },
  {
    name: "Photo + Vidéo",
    desc: "La formule complète : une équipe dédiée qui documente votre mariage sous tous les angles.",
    items: ["2 photographes", "1 vidéaste", "Galerie + film", "Disponible 24h/24"],
    image: "/images/hero-riad.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-paper pt-32 pb-24">
      <div className="px-6 md:px-12">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-pink">Services</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl">Nos formules</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            Chaque mariage est unique : nos formules s&apos;adaptent à votre
            programme, votre lieu et votre budget. Contactez-nous pour un devis
            personnalisé.
          </p>
        </Reveal>
      </div>

      <div className="mt-20 space-y-24">
        {services.map((s, idx) => (
          <section key={s.name} className="px-6 md:px-12">
            <div className="mx-auto grid max-w-6xl gap-10 md:gap-16 md:grid-cols-[1fr_1.4fr]">
              <Reveal className={idx % 2 === 1 ? "md:order-2" : ""}>
                <div className="viewfinder relative aspect-[4/5] overflow-hidden md:sticky md:top-32">
                  <Image src={s.image} alt={s.name} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
                </div>
              </Reveal>
              <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                <Reveal>
                  <h2 className="font-display text-3xl md:text-4xl">{s.name}</h2>
                  <p className="mt-4 text-lg text-ink/70">{s.desc}</p>
                </Reveal>
                <ul className="mt-8 divide-y divide-ink/10">
                  {s.items.map((item, i) => (
                    <Reveal key={item} delay={i * 0.08} as="div" className="flex items-center gap-3 py-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-pink" />
                      <span className="text-ink/80">{item}</span>
                    </Reveal>
                  ))}
                </ul>
                <Reveal delay={0.2}>
                  <Magnetic className="mt-8 inline-block">
                    <Link
                      href="/contact"
                      data-cursor="link"
                      className="inline-flex items-center gap-3 rounded-full bg-pink px-7 py-4 text-sm uppercase tracking-[0.15em] text-paper"
                    >
                      Demander un devis
                    </Link>
                  </Magnetic>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
