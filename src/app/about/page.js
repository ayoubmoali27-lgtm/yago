import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/NavBar";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";

export default function AboutPage() {
  return (
    <main className="bg-[#FFF8D9]">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[75vh] items-end overflow-hidden bg-[#FFD923] px-5 pb-16 pt-32 sm:px-8 lg:pb-20">
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#E8C21C]/50" />
        <div className="absolute right-[10%] top-[25%] h-4 w-4 rounded-full bg-white" />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:items-end">
          <Reveal direction="left">
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

          <Reveal direction="right" delay={200}>
            <p className="max-w-lg text-base leading-7 text-[#493B08]/70 lg:justify-self-end lg:text-lg">
              Depuis plus de 30 ans, Soumam accompagne les familles algériennes
              avec des produits pensés autour de la qualité, du goût et du
              plaisir.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          
          <Reveal direction="left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px]">
              <Image
                src="/assets/factory.png"
                alt="Soumam"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal direction="right" delay={150}>
            <div className="lg:pl-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#A18300]">
                Depuis 1993
              </p>

              <h2 className="text-4xl font-medium tracking-[-0.04em] text-[#493B08] sm:text-5xl">
                Une histoire qui continue de grandir.
              </h2>

              <p className="mt-6 leading-7 text-[#493B08]/65">
                Fondée en Algérie, Soumam s&apos;est développée avec une ambition
                simple : proposer des produits laitiers savoureux et accessibles
                tout en maintenant un haut niveau d&apos;exigence.
              </p>

              <p className="mt-4 leading-7 text-[#493B08]/65">
                Innovation, savoir-faire et proximité avec nos consommateurs
                continuent de guider notre évolution.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["1993", "Notre histoire commence"],
              ["+30", "Années d'expérience"],
              ["Millions", "De consommateurs"],
            ].map(([number, text], index) => (
              <Reveal
                key={number}
                direction="up"
                delay={index * 150}
              >
                <div className="rounded-[30px] bg-[#FFF8D9] p-8 transition duration-500 hover:-translate-y-2 sm:p-10">
                  <p className="text-5xl font-medium tracking-[-0.05em] text-[#493B08]">
                    {number}
                  </p>

                  <p className="mt-3 text-sm text-[#493B08]/60">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 pb-20 sm:px-8">
        <Reveal direction="up">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-[35px] bg-[#FFD923] p-8 sm:p-12 md:flex-row md:items-center">
            <h2 className="text-3xl font-medium tracking-[-0.04em] text-[#493B08] sm:text-4xl">
              Découvrez l&apos;univers Soumam.
            </h2>

            <Link
              href="/product"
              className="rounded-full bg-[#493B08] px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:scale-105 hover:bg-black"
            >
              Nos produits →
            </Link>
          </div>
        </Reveal>
      </section>

      <Contact />
    </main>
  );
}