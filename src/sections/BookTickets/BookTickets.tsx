import Button from "@/components/ui/Button";
import React from "react";

type Item = { title: string; img: string; w: number; h: number };

const MAX_H = 526; 

const items: Item[] = [
  { title: "Little Krazy",        img: "/assets/little-krazy.png",  w: 385, h: 526 },
  { title: "Hawanim Groves City", img: "/assets/hawanim.png",       w: 228, h: 322 },
  { title: "Picnic Market",       img: "/assets/picnic-market.png", w: 385, h: 526 },
  { title: "Lucawa",              img: "/assets/lucawa.png",        w: 291, h: 402 },
];

const BookTickets: React.FC = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="font-playfair pb-10 text-white leading-tight text-[40px] md:text-[50px]">
          Book General Access ticket and
          <br />
          enjoy the attractions for free
        </h2>

           <Button 
        label="Book General Access Ticket" 
        showIcon={true} 
        iconSrc="/assets/icon-arrow-right.svg"
      />
      </div>

      <div className="mx-auto mt-8 max-w-[1200px] px-4">
        <div
          className="
            flex gap-6 overflow-x-auto pb-2
            no-scrollbar
          "
        >

          {items.map((it, i) => (
            <div key={i} className="shrink-0">
              <div
                className="relative flex items-center justify-center overflow-hidden rounded-[22px]"
                style={{ width: it.w, height: MAX_H, backgroundColor: "transparent" }}
              >
                <img
                  src={it.img}
                  alt={it.title}
                  width={it.w}
                  height={it.h}
                  className="select-none"
                  draggable={false}
                  style={{ width: it.w, height: it.h, borderRadius: 22, objectFit: "cover" }}
                />
              </div>

              <div
                className="mt-3 text-center font-playfair text-[22px] md:text-[30px] leading-none text-white"
                style={{ width: it.w }}
              >
                {it.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookTickets;
