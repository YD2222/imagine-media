import Image from "next/image";
import { Reveal } from "@/components/reveal";

export default function AProposPage() {
  return (
    <div className="bg-paper pt-32 pb-24">
      <div className="px-6 md:px-12">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-pink">Le studio</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
            Une image, mille émotions.
          </h1>
        </Reveal>
      </div>

      <div className="relative mt-16 h-[70vh] w-full overflow-hidden md:h-[85vh]">
        <Image
          src="/images/about-photographer.jpg"
          alt="Photographe Imagine Media en plein reportage de mariage"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="mx-auto mt-20 max-w-3xl space-y-16 px-6 md:px-0">
        <Reveal>
          <p className="font-display text-2xl leading-snug text-ink/90 md:text-3xl">
            Imagine Media est né à Marrakech d&apos;une conviction simple :
            chaque mariage mérite d&apos;être raconté avec autant d&apos;émotion
            qu&apos;il en dégage.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-ink/70">
            Notre équipe de photographes et vidéastes s&apos;immerge dans
            chaque célébration — riads, salles de réception, jardins ou
            palais — pour capturer les instants qui comptent vraiment : un
            regard, un rire, une larme de joie. Un style éditorial et
            cinématographique, sans jamais dénaturer l&apos;authenticité du
            moment.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg text-ink/70">
            Basés à Marrakech et disponibles 24h/24, nous accompagnons les
            couples dans toute la région — du repérage du lieu à la remise
            de la galerie finale, en passant par le tournage du film de
            mariage.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-ink/10 pt-10">
            <div>
              <p className="font-display text-4xl text-pink">5.0</p>
              <p className="mt-1 text-sm uppercase tracking-[0.15em] text-ink/60">Note Google</p>
            </div>
            <div>
              <p className="font-display text-4xl text-pink">24/7</p>
              <p className="mt-1 text-sm uppercase tracking-[0.15em] text-ink/60">Disponibilité</p>
            </div>
            <div>
              <p className="font-display text-4xl text-pink">Marrakech</p>
              <p className="mt-1 text-sm uppercase tracking-[0.15em] text-ink/60">Basé &amp; itinérant</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
