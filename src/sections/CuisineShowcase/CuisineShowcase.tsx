import React from "react";

type CardItem = {
  title: string;
  img: string;
  priceLabel?: string; 
};

const items: CardItem[] = [
  { title: "Vida Vera", img: "/assets/vida-vera.png" },
  { title: "Zama Zulu", img: "/assets/zama-zulu.png" },
  { title: "Khawaja Yanni", img: "/assets/khawaja-yanni.png" },
  { title: "Yamagata", img: "/assets/yamagata.png" },
];

const CuisineShowcase: React.FC = () => {
  return (
    <section className="w-full font-sans">
      <div className="mx-auto max-w-5xl px-4 pt-10 text-center">
        <h2 className="font-playfair text-white text-[40px] leading-[1.15] md:text-[50px]">
          Experience the Finest Cuisine
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-[12px] md:text-[13px] leading-relaxed text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <article
              key={i}
              className="
                rounded-[26px] border border-white/10
                bg-[rgba(53,69,40,0.55)]
                shadow-[0_8px_22px_rgba(0,0,0,0.25)]
                p-4 md:p-5
              "
            >
              <div className="relative overflow-hidden rounded-[18px]">
                <div className="aspect-[16/9] w-full">
                  <img
                    src={it.img}
                    alt={it.title}
                    className="h-full w-full object-cover select-none"
                    draggable={false}
                  />
                </div>
              </div>

              <div className="mt-4 flex items-end justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="truncate font-playfair text-[22px] font-medium text-white md:text-[30px]">
                    {it.title}
                  </h3>

                  <div className="mt-3 inline-flex rounded-full bg-gradient-to-r from-[#E9C894] to-[#CDA86F] px-3 py-1">
                    <span className="text-[10px] md:text-[11px] font-normal tracking-[0.18em] text-[#FFFFFF]">
                      {it.priceLabel ?? "100 SR PER GUEST"}
                    </span>
                  </div>
                </div>

                <a
                  href="#"
                  aria-label="Open"
                  className="
                    inline-flex h-6 w-6 flex-none transition
                  "
                >
                 <img src="/assets/icon-arrow-right.svg" alt="icon-arrow"/>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuisineShowcase;
