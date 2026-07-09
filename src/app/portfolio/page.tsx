import Image from "next/image";
import { Reveal } from "@/components/reveal";

const shots = [
  { src: "/images/hero-riad.jpg", cat: "Mariages", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/couple-rooftop.jpg", cat: "Portraits", span: "" },
  { src: "/images/henna-detail.jpg", cat: "Détails", span: "" },
  { src: "/images/bride-caftan.jpg", cat: "Portraits", span: "" },
  { src: "/images/venue-hall.jpg", cat: "Réceptions", span: "md:col-span-2" },
  { src: "/images/reception-dance.jpg", cat: "Mariages", span: "" },
  { src: "/images/ring-detail.jpg", cat: "Détails", span: "" },
  { src: "/images/groom-portrait.jpg", cat: "Portraits", span: "" },
  { src: "/images/table-florals.jpg", cat: "Réceptions", span: "md:col-span-2" },
];

export default function PortfolioPage() {
  return (
    <div className="bg-paper pt-32 pb-24">
      <div className="px-6 md:px-12">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-pink">Portfolio</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl">Nos plus belles histoires</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            Mariages, portraits et réceptions à Marrakech et dans les riads
            environnants — une sélection de nos reportages les plus récents.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-4 px-6 md:grid-cols-3 md:px-0">
        {shots.map((s, i) => (
          <Reveal key={s.src + i} delay={i * 0.06} className={s.span}>
            <div className="viewfinder group relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={s.src}
                alt={s.cat}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs uppercase tracking-[0.2em] text-paper">{s.cat}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
