import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const products = [
  {
    name: "Yago Banane",
    type: "Crémeux & fruité",
    image: "/assets/yago-banane.jpg",
  },
  {
    name: "Yago Grenadine",
    type: "Rafraîchissant & doux",
    image: "/assets/yago-grenadine.jpg",
  },
  {
    name: "Yago Fruits des Bois",
    type: "Gourmand & intense",
    image: "/assets/yago-fruits-bois.png",
  },
  {
    name: "Yago Nature",
    type: "Simple & délicieux",
    image: "/assets/yago-banane.jpg",
  },
  {
    name: "Yago Fraise",
    type: "Doux & fruité",
    image: "/assets/yago-grenadine.jpg",
  },
  {
    name: "Yago Vanille",
    type: "Onctueux & gourmand",
    image: "/assets/yago-fruits-bois.png",
  },
];

export default function ProductPage() {
  return (
    <main className="overflow-hidden bg-[#FFF8D9]">

      {/* ================================= */}
      {/* HERO */}
      {/* ================================= */}

      <section className="relative overflow-hidden bg-[#FFD923] px-5 pb-20 pt-36 text-center sm:px-8 lg:pb-28 lg:pt-44">

        {/* Decorations */}
        <div className="absolute left-[8%] top-[35%] h-16 w-20 -rotate-12 rounded-[45%] bg-[#E8C21C]" />

        <div className="absolute right-[12%] top-[30%] h-4 w-4 rounded-full bg-white" />

        <div className="relative z-10 mx-auto max-w-4xl">

          <Reveal direction="up">

            <span className="inline-block rounded-full bg-white/60 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-black/60">
              Nos gammes
            </span>

            <h1 className="mt-6 text-5xl font-medium tracking-[-0.05em] text-[#493B08] sm:text-6xl lg:text-8xl">
              À chacun son Yago.
            </h1>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-[#493B08]/65">
              Fruité, gourmand ou rafraîchissant, découvrez toutes nos saveurs
              et trouvez votre préférée.
            </p>

          </Reveal>

        </div>
      </section>

      {/* ================================= */}
      {/* PRODUCTS */}
      {/* ================================= */}

      <section className="px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <Reveal direction="up">

            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A18300]">
                La gamme
              </p>

              <h2 className="mt-3 text-4xl font-medium tracking-[-0.04em] text-[#493B08] sm:text-5xl">
                Trouvez votre saveur.
              </h2>
            </div>

          </Reveal>

          {/* Filters */}
          <Reveal direction="up" delay={100}>

            <div className="mb-10 flex flex-wrap gap-2">
              {["Tous", "Yago", "Yaourt", "Desserts", "Boissons"].map(
                (category, index) => (
                  <button
                    key={category}
                    className={`rounded-full px-5 py-2.5 text-sm transition-all duration-300 ${
                      index === 0
                        ? "bg-[#493B08] text-white"
                        : "bg-white text-[#493B08] hover:bg-[#FFD923]"
                    }`}
                  >
                    {category}
                  </button>
                )
              )}
            </div>

          </Reveal>

          {/* Product Grid */}
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((product, index) => (
              <Reveal
                key={`${product.name}-${index}`}
                direction="up"
                delay={(index % 3) * 120}
              >

                <div className="group">

                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] bg-white shadow-[0_15px_35px_rgba(100,80,0,0.08)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_25px_50px_rgba(100,80,0,0.16)]">

                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                  </div>

                  {/* Information */}
                  <div className="pt-5">

                    <h3 className="text-xl font-medium text-[#493B08]">
                      {product.name}
                    </h3>

                    <p className="mt-1 text-sm text-[#493B08]/50">
                      {product.type}
                    </p>

                  </div>

                </div>

              </Reveal>
            ))}

          </div>

        </div>
      </section>

      {/* ================================= */}
      {/* CTA */}
      {/* ================================= */}

      <section className="px-5 pb-20 sm:px-8">

        <Reveal direction="zoom">

          <div className="mx-auto max-w-6xl rounded-[35px] bg-[#FFD923] p-10 text-center sm:p-16">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#493B08]/50">
              À l&apos;intérieur
            </p>

            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] text-[#493B08]">
              Que contient votre Yago ?
            </h2>

            <Link
              href="/ingredients"
              className="mt-7 inline-block rounded-full bg-[#493B08] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black"
            >
              Découvrir nos ingrédients →
            </Link>

          </div>

        </Reveal>

      </section>

    </main>
  );
}