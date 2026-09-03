import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/NavBar";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";

export default function IngredientsPage() {
  return (
    <main className="bg-[#FFF8D9]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[75vh] overflow-hidden bg-[#FFD923] px-5 pb-20 pt-36 sm:px-8 lg:pt-44">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          
          <Reveal direction="left">
            <div>
              <span className="inline-block rounded-full bg-white/60 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#493B08]/60">
                La qualité avant tout
              </span>

              <h1 className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.05em] text-[#493B08] sm:text-6xl lg:text-7xl">
                De bonnes choses dans chaque produit.
              </h1>

              <p className="mt-6 max-w-lg leading-7 text-[#493B08]/65">
                Nous accordons une attention particulière au choix de nos
                ingrédients afin d&apos;allier plaisir, qualité et équilibre.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={200}>
            <div className="relative mx-auto h-[400px] w-full max-w-md">
              <Image
                src="/assets/yago.png"
                alt="Yago"
                fill
                className="object-contain drop-shadow-[0_25px_25px_rgba(90,65,0,0.15)]"
              />
            </div>
          </Reveal>

        </div>
      </section>

      {/* INGREDIENTS */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">

          <Reveal direction="up">
            <div className="mb-12 max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A18300]">
                Nos essentiels
              </p>

              <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] text-[#493B08] sm:text-5xl">
                Simples, savoureux, sélectionnés avec soin.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["🥛", "Lait", "Au cœur de notre savoir-faire laitier."],
              ["🍌", "Fruits", "Des saveurs fruitées et gourmandes."],
              ["✨", "Qualité", "Une attention portée à chaque étape."],
            ].map(([icon, title, text], index) => (
              <Reveal
                key={title}
                direction="up"
                delay={index * 150}
              >
                <div className="min-h-[320px] rounded-[30px] bg-white p-8 transition-transform duration-500 hover:-translate-y-2">
                  <div className="text-4xl">{icon}</div>

                  <h3 className="mt-20 text-3xl font-medium text-[#493B08]">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-[230px] leading-6 text-[#493B08]/55">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* QUALITY */}
      <section className="bg-[#493B08] px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">

          <Reveal direction="left">
            <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              La qualité,
              <br />
              du début à la fin.
            </h2>
          </Reveal>

          <div className="space-y-8">
            {[
              "Sélection attentive des matières premières",
              "Contrôle rigoureux de la production",
              "Recherche constante de nouvelles saveurs",
            ].map((text, index) => (
              <Reveal
                key={text}
                direction="right"
                delay={index * 150}
              >
                <div className="flex gap-5 border-b border-white/15 pb-7">
                  <span className="text-[#FFD923]">
                    0{index + 1}
                  </span>

                  <p className="text-lg">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 py-20 text-center">
        <Reveal direction="up">
          <h2 className="text-4xl font-medium tracking-[-0.04em] text-[#493B08]">
            Envie de goûter ?
          </h2>

          <Link
            href="/product"
            className="mt-6 inline-block rounded-full bg-[#FFD923] px-7 py-3.5 text-sm font-medium text-[#493B08] transition-transform duration-300 hover:scale-105"
          >
            Voir nos produits →
          </Link>
        </Reveal>
      </section>

      <Contact />
    </main>
  );
}