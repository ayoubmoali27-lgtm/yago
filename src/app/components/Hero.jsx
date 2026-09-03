import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#FFD923]">

      {/* ================================= */}
      {/* BACKGROUND DECORATIONS */}
      {/* ================================= */}

      <div className="hero-decoration hero-delay-4 absolute left-[7%] top-[8%] h-14 w-16 -rotate-[20deg] rounded-[45%] bg-[#E8C21C] sm:h-16 sm:w-20" />

      <div className="hero-decoration hero-delay-5 absolute right-[6%] top-[38%] h-10 w-14 rotate-12 rounded-[50%] bg-[#E8C21C] sm:h-12 sm:w-16" />

      <div className="hero-decoration hero-delay-3 absolute left-[25%] top-[26%] z-20 h-3 w-3 rounded-full bg-white shadow-sm" />

      <div className="hero-decoration hero-delay-4 absolute right-[34%] top-[20%] z-20 flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-white sm:h-9 sm:w-9">
        <span className="h-1.5 w-1.5 rounded-full bg-[#DDBB16]" />
      </div>

      {/* ================================= */}
      {/* CREAM BACKGROUND */}
      {/* ================================= */}

      <div className="hero-cream absolute -left-[10%] top-[47%] h-[65%] w-[120%] rounded-[50%_50%_0_0/7%_7%_0_0] bg-[#FFF8D9] sm:top-[46%] lg:top-[45%]" />

      {/* ================================= */}
      {/* LARGE TEXT */}
      {/* ================================= */}

      <div className="pointer-events-none absolute left-1/2 top-[27%] z-10 w-full -translate-x-1/2 text-center text-[#FFFBEA]">

        {/* YAGO */}
        <h1 className="hero-yago font-milky whitespace-nowrap text-[clamp(90px,20vw,270px)] leading-[0.6] tracking-[-0.03em]">
          YAGO
        </h1>

        {/* BANANE */}
        <h2 className="hero-banane font-milky mt-14 whitespace-nowrap text-[clamp(65px,14vw,185px)] leading-[0.65] tracking-[-0.03em] sm:mt-16">
          BANANE
        </h2>
      </div>

      {/* ================================= */}
      {/* FLOATING YAGO BOTTLE */}
      {/* ================================= */}

      <div className="pointer-events-none absolute left-1/2 top-[11%] z-30 -translate-x-1/2 sm:top-[12%] lg:top-[11%]">

        {/* Glow */}
        <div className="hero-glow absolute left-1/2 top-1/2 -z-10 h-[80%] w-[180%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25 blur-[60px]" />

        {/* Page-load entrance */}
        <div className="hero-bottle-enter">

          {/* Continuous floating */}
          <div className="yago-float">

            {/* Continuous rotation */}
            <div className="yago-rotate">
              <Image
                src="/assets/yago.png"
                alt="Yago Banane"
                width={1000}
                height={1400}
                priority
                className="h-[350px] w-auto max-w-none object-contain drop-shadow-[20px_30px_20px_rgba(90,70,0,0.22)] sm:h-[420px] md:h-[480px] lg:h-[540px] xl:h-[580px]"
              />
            </div>

          </div>
        </div>

        {/* Bottle shadow */}
        <div className="hero-shadow-enter absolute -bottom-8 left-1/2 -z-10">
          <div className="yago-shadow h-5 w-[150px] rounded-[50%] bg-black/20 blur-xl sm:w-[190px]" />
        </div>

      </div>

      {/* ================================= */}
      {/* DECORATIVE CIRCLES */}
      {/* ================================= */}

      <div className="hero-decoration hero-delay-3 absolute bottom-[28%] left-[26%] z-30 flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-white bg-[#FFD923] shadow-md sm:h-12 sm:w-12">
        <span className="h-2 w-2 rounded-full bg-[#D6B416]" />
      </div>

      <div className="hero-decoration hero-delay-4 absolute bottom-[36%] left-[36%] z-20 h-3 w-3 rounded-full bg-white shadow-md" />

      <div className="hero-decoration hero-delay-5 absolute bottom-[34%] right-[20%] z-20 h-4 w-4 rounded-full bg-white shadow-md" />

      <div className="hero-decoration hero-delay-3 absolute right-[28%] top-[42%] z-20 h-5 w-5 rounded-full bg-white shadow-md" />

      {/* ================================= */}
      {/* BOTTOM TEXT */}
      {/* ================================= */}

      <div className="hero-bottom-text absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-center">
        <p className="whitespace-nowrap text-[8px] font-bold uppercase tracking-[0.3em] text-white sm:text-[10px]">
          Crémeux &nbsp; · &nbsp; Fruité &nbsp; · &nbsp; Yago
        </p>
      </div>

    </section>
  );
}