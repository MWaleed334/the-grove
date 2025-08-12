"use client";
import Button from "@/components/ui/Button";
import Navbar from "@/components/navigation/Navbar";

export default function Hero() {
  return (
    <section
      className="relative font-sans min-h-[92vh] w-full bg-black bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-20">
        <Navbar />

        <div className="mt-1 w-full hidden lg:block">
          <nav className="flex w-full items-center justify-center gap-3 border-y border-white py-2 text-[13px] font-medium text-[#FFFFFF]">
            {[
              "DINE WITH US",
              "PLAN YOUR VISIT",
              "EVENTS",
              "VIEW GROVES MAP",
              "OUR STORY",
              "CONTACT US",
            ].map((item, i, arr) => (
              <div key={item} className="flex items-center">
                <a
                  href="#"
                  className="px-3 text-[12px] font-medium tracking-[0.14em] text-white transition hover:text-white"
                >
                  {item}
                </a>
                {i !== arr.length - 1 && (
                  <span className="mx-1 text-white">|</span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      <div className="relative z-10">
        <div className="mx-auto flex w-full max-w-7xl px-4 pt-10 md:pt-14">
          <div className="max-w-[620px]">
            <div className="mb-3 text-[13px] font-normal tracking-[0.25em] text-[#FFFFFF]">
              KHAWAJA YANNI
            </div>

            <h1 className="font-playfair text-[44px] leading-[1.05] md:text-[68px]">
              The new
              <br />
              era of luxury
            </h1>

            <p className="mt-3 max-w-prose text-[12px] leading-relaxed text-white md:text-[13px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum.
            </p>

            <div className="mt-6">
              <Button
                label="Book reservation now"
                showIcon={true}
                iconSrc="/assets/icon-arrow-right.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-2">
        {[0, 1, 2, 3].map((n) => (
          <span
            key={n}
            className={`h-2 w-2 rounded-full ${
              n === 2 ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
