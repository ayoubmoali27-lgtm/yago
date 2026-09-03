"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ExploreSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28"
    >
      {/* Background glow */}
      <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#FFD923]/10 blur-3xl" />
      <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#FFD923]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================================= */}
        {/* SECTION HEADER */}
        {/* ================================= */}

        <div
          className={`mb-10 text-center transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF4B8] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-[#6D5700]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFD923]" />
            Encore plus de Soumam
          </span>
        </div>

        {/* ================================= */}
        {/* CARDS */}
        {/* ================================= */}

        <div className="grid gap-5 lg:grid-cols-2">

          {/* ================================= */}
          {/* PRODUCTS */}
          {/* ================================= */}

          <Link
            href="/product"
            className={`group relative min-h-[600px] overflow-hidden rounded-[34px] bg-[#FFD923] shadow-[0_20px_50px_rgba(110,85,0,0.12)] transition-all duration-1000 ease-out sm:min-h-[650px] ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-16 opacity-0"
            }`}
          >
            {/* Decorative dot */}
            <div className="absolute left-[15%] top-[18%] h-3 w-3 rounded-full bg-white/80" />

            <div className="absolute right-[20%] top-[68%] h-5 w-5 rounded-full bg-[#FFF8D9]/70" />

            {/* Large background word */}
            <p className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[80px] font-medium tracking-[-0.08em] text-[#FFF8D9]/35 sm:text-[110px] lg:text-[125px]">
              PRODUITS
            </p>

            {/* Large bottle */}
            <div className="absolute left-1/2 top-[35%] z-10 -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-out group-hover:-translate-y-[52%] group-hover:rotate-[-3deg] group-hover:scale-[1.03]">
              <Image
                src="/assets/yago.png"
                alt="Yago Banane"
                width={600}
                height={900}
                className="h-[310px] w-auto max-w-none object-contain drop-shadow-[0_25px_25px_rgba(90,65,0,0.20)] sm:h-[350px] lg:h-[390px]"
              />
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-9 left-8 right-8 z-20 sm:bottom-10 sm:left-10 sm:right-10">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#765E00]">
                Nos gammes
              </p>

              <div className="flex items-end justify-between gap-5">
                <div>
                  <h3 className="text-[42px] font-medium leading-[0.92] tracking-[-0.055em] text-[#493B08] sm:text-[50px]">
                    Découvrez
                    <br />
                    nos{" "}
                    <span className="text-white">
                      produits
                    </span>
                  </h3>

                  <p className="mt-5 max-w-[270px] text-sm leading-6 text-[#6B5707]">
                    Des saveurs pensées pour chaque moment de votre journée.
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#493B08] text-xl text-white shadow-lg transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#493B08]">
                  →
                </div>
              </div>
            </div>
          </Link>

          {/* ================================= */}
          {/* RECIPES */}
          {/* ================================= */}

          <Link
            href="/recipes"
            className={`group relative min-h-[600px] overflow-hidden rounded-[34px] bg-[#FFF8D9] shadow-[0_20px_50px_rgba(110,85,0,0.10)] transition-all delay-200 duration-1000 ease-out sm:min-h-[650px] ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-16 opacity-0"
            }`}
          >
            {/* Background word */}
            <p className="pointer-events-none absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[80px] font-medium tracking-[-0.08em] text-[#FFD923]/20 sm:text-[110px] lg:text-[125px]">
              SAVEURS
            </p>

            {/* Recipe image */}
            <div className="absolute left-1/2 top-[29%] z-10 h-[250px] w-[82%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[28px] shadow-[0_20px_40px_rgba(80,65,0,0.12)] sm:h-[280px]">
              <Image
                src="/assets/recipe.png"
                alt="Recette avec Yago"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#493B08]/10 to-transparent" />
            </div>

            {/* Bottom */}
            <div className="absolute bottom-9 left-8 right-8 z-20 sm:bottom-10 sm:left-10 sm:right-10">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9A7D08]">
                Inspiration
              </p>

              <div className="flex items-end justify-between gap-5">
                <div>
                  <h3 className="text-[42px] font-medium leading-[0.92] tracking-[-0.055em] text-[#493B08] sm:text-[50px]">
                    Des idées
                    <br />à{" "}
                    <span className="text-[#E5B800]">
                      savourer
                    </span>
                  </h3>

                  <p className="mt-5 max-w-[280px] text-sm leading-6 text-[#766B3E]">
                    Inspirez-vous de recettes simples, gourmandes et pleines de
                    fraîcheur.
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FFD923] text-xl text-[#493B08] shadow-lg transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#493B08] group-hover:text-white">
                  →
                </div>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}