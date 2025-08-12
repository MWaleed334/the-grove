import React from "react";

type Props = {
  heroImage?: string;
};

const DisplayVenue: React.FC<Props> = ({
  heroImage = "/assets/display.png",
}) => {
  return (
    <section className="w-full font-sans">
      <div className="mx-auto max-w-5xl pt-10 pb-6 px-6 md:px-0 text-center">
        <h1 className="font-playfair text-[40px] leading-tight text-white md:text-[50px]">
          Mall Of: Endless Possibilities
        </h1>
        <p className="mx-auto mt-3 max-w-3xl text-[12px] leading-relaxed text-white md:text-[13px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="mx-auto mt-5 max-w-5xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded md:rounded-md lg:rounded-lg">
          <div className="aspect-[16/9] w-full">
            <img
              src={heroImage}
              alt="Groves"
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>

          <button
            aria-label="Play"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7L8 5z" fill="currentColor" className="text-black" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-4xl px-4 md:px-6">
        <div className="rounded-[20px] border border-white/10 bg-[#2E3C25]/85 px-6 py-6 text-white md:px-8 md:py-7">
          <div className="mb-3 inline-flex text-[10px] md:text-[13px] font-semibold tracking-[0.2em] text-white">
            25 SR/GUEST
          </div>

          <div className="flex items-start justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-[22px] font-playfair font-medium md:text-[30px]">
                Get your General Access Ticket
              </h2>
              <p className="mt-2 text-[12px] leading-relaxed text-white md:text-[13px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text e
              </p>
            </div>

            <a
              href="#"
              className="mt-2 inline-flex h-11 w-11 flex-none items-center justify-center bg-transparent"
            >
              <img src="/assets/icon-arrow-right.svg" alt="arrow-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayVenue;
