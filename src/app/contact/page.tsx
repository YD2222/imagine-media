"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-svh bg-ink px-6 pt-32 pb-24 text-paper md:px-12">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-pink">Contact</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl">Parlons de votre mariage</h1>
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-6xl gap-16 md:grid-cols-2">
        <Reveal>
          <div className="space-y-10">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-pink">Adresse</p>
              <p className="mt-2 font-display text-2xl">Marrakech, Maroc</p>
              <p className="mt-1 text-paper/60">Guéliz · Carré Eden Shopping Center</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-pink">Disponibilité</p>
              <p className="mt-2 text-paper/80">Ouvert 24h/24, 7j/7</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-pink">Contact direct</p>
              <p className="mt-2 text-paper/80">
                <a href="tel:+212661728993" data-cursor="link" className="hover:text-pink">
                  +212 6 61 72 89 93
                </a>
              </p>
              <p className="text-paper/80">
                <a href="mailto:contact@imaginemedia.ma" data-cursor="link" className="hover:text-pink">
                  contact@imaginemedia.ma
                </a>
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-pink">Suivre</p>
              <p className="mt-2 text-paper/80">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" data-cursor="link" className="hover:text-pink">
                  Instagram
                </a>
                {" · "}
                <span className="text-paper/60">5.0★ sur Google (5 avis)</span>
              </p>
            </div>

            <div className="aspect-[4/3] w-full overflow-hidden rounded-none border border-paper/10">
              <iframe
                title="Localisation Imagine Media"
                className="h-full w-full grayscale invert"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-8.0180%2C31.632%2C-7.998%2C31.645&layer=mapnik"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {submitted ? (
            <div className="border border-pink/30 bg-pink/10 p-10 text-center">
              <p className="font-display text-3xl text-pink">Merci !</p>
              <p className="mt-3 text-paper/70">
                Votre demande a bien été envoyée. Nous vous répondons sous 24h.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-8"
            >
              <div className="grid gap-8 md:grid-cols-2">
                <Field label="Date du mariage" type="date" />
                <Field label="Lieu de réception" type="text" placeholder="Riad, salle, jardin..." />
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <Field label="Nom complet" type="text" required />
                <Field label="Téléphone" type="tel" required />
              </div>
              <Field label="Email" type="email" required />
              <div>
                <label className="text-xs uppercase tracking-[0.15em] text-paper/60">
                  Votre projet
                </label>
                <textarea
                  rows={4}
                  placeholder="Photo, vidéo, formule souhaitée..."
                  className="mt-2 w-full border-b border-paper/30 bg-transparent py-2 text-paper placeholder:text-paper/30 outline-none transition-colors focus:border-pink"
                />
              </div>

              <Magnetic className="inline-block">
                <button
                  type="submit"
                  data-cursor="link"
                  className="rounded-full bg-pink px-8 py-4 text-sm uppercase tracking-[0.15em] text-paper"
                >
                  Envoyer ma demande
                </button>
              </Magnetic>
            </form>
          )}
        </Reveal>
      </div>
    </div>
  );
}

function Field({
  label,
  type,
  ...rest
}: {
  label: string;
  type: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.15em] text-paper/60">{label}</label>
      <input
        type={type}
        {...rest}
        className="mt-2 w-full border-b border-paper/30 bg-transparent py-2 text-paper placeholder:text-paper/30 outline-none transition-colors focus:border-pink"
      />
    </div>
  );
}
