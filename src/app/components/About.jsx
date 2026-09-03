import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#FFF8D9]">

      {/* ================================= */}
      {/* HERO */}
      {/* ================================= */}

      <section className="relative flex min-h-[75vh] items-end overflow-hidden bg-[#FFD923] px-5 pb-16 pt-32 sm:px-8 lg:pb-20">

        {/* Decorations */}
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#E8C21C]/50" />

        <div className="absolute right-[10%] top-[25%] h-4 w-4 rounded-full bg-white" />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:items-end">

          {/* Hero Title */}
          <Reveal direction="up">
            <div>
              <span className="mb-5 inline-block rounded-full bg-white/60 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-black/60">
                Notre histoire
              </span>

              <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.05em] text-[#493B08] sm:text-6xl lg:text-8xl">
                Plus qu&apos;une
                <br />
                laiterie.
              </h1>
            </div>
          </Reveal>

          {/* Hero Paragraph */}
          <Reveal direction="right" delay={180}>
            <p className="max-w-lg text-base leading-7 text-[#493B08]/70 lg:justify-self-end lg:text-lg">
              Depuis plus de 30 ans, Soumam accompagne les familles algériennes
              avec des produits pensés autour de la qualité, du goût et du
              plaisir.
            </p>
          </Reveal>

        </div>
      </section>

      {/* ================================= */}
      {/* STORY */}
      {/* ================================= */}

      <section className="px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">

          {/* Factory */}
          <Reveal direction="left">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-[32px] shadow-[0_20px_50px_rgba(100,80,0,0.12)]">
              <Image
                src="/assets/factory.jpg"
                alt="Soumam"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>

          {/* Story */}
          <Reveal direction="right" delay={150}>
            <div className="lg:pl-10">

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#A18300]">
                Depuis 1993
              </p>

              <h2 className="text-4xl font-medium tracking-[-0.04em] text-[#493B08] sm:text-5xl">
                Une histoire qui continue de grandir.
              </h2>

              <p className="mt-6 leading-7 text-[#493B08]/65">
                Fondée en Algérie, Soumam s&apos;est développée avec une
                ambition simple : proposer des produits laitiers savoureux et
                accessibles tout en maintenant un haut niveau
                d&apos;exigence.
              </p>

              <p className="mt-4 leading-7 text-[#493B08]/65">
                Innovation, savoir-faire et proximité avec nos consommateurs
                continuent de guider notre évolution.
              </p>

            </div>
          </Reveal>

        </div>
      </section>

      {/* ================================= */}
      {/* NUMBERS */}
      {/* ================================= */}

      <section className="bg-white px-5 py-20 sm:px-8">

        <div className="mx-auto max-w-6xl">

          <Reveal direction="up">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A18300]">
                Soumam en chiffres
              </p>

              <h2 className="mt-3 text-4xl font-medium tracking-[-0.04em] text-[#493B08]">
                Notre parcours en quelques chiffres.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">

            <Reveal direction="up" delay={0}>
              <div className="min-h-[220px] rounded-[30px] bg-[#FFF8D9] p-8 sm:p-10">
                <p className="text-5xl font-medium tracking-[-0.05em] text-[#493B08]">
                  1993
                </p>

                <p className="mt-4 text-sm text-[#493B08]/60">
                  Notre histoire commence
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={140}>
              <div className="min-h-[220px] rounded-[30px] bg-[#FFD923] p-8 sm:p-10">
                <p className="text-5xl font-medium tracking-[-0.05em] text-[#493B08]">
                  +30
                </p>

                <p className="mt-4 text-sm text-[#493B08]/60">
                  Années d&apos;expérience
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={280}>
              <div className="min-h-[220px] rounded-[30px] bg-[#FFF8D9] p-8 sm:p-10">
                <p className="text-4xl font-medium tracking-[-0.05em] text-[#493B08]">
                  Millions
                </p>

                <p className="mt-4 text-sm text-[#493B08]/60">
                  De consommateurs
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* CTA */}
      {/* ================================= */}

      <section className="bg-white px-5 pb-20 sm:px-8">

        <Reveal direction="zoom">

          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-[35px] bg-[#FFD923] p-8 sm:p-12 md:flex-row md:items-center">

            <h2 className="text-3xl font-medium tracking-[-0.04em] text-[#493B08] sm:text-4xl">
              Découvrez l&apos;univers Soumam.
            </h2>

            <Link
              href="/product"
              className="rounded-full bg-[#493B08] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black"
            >
              Nos produits →
            </Link>

          </div>

        </Reveal>

      </section>

    </main>
  );
}