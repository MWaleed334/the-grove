import Button from "@/components/ui/Button";
import React from "react";

const CurateExperience: React.FC = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-4 md:py-12 overflow-hidden">
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-[420px_1fr]">
          <div className="text-left">
            <h2 className="font-playfair pb-6 text-white text-[40px] leading-tight md:text-[50px]">
              Curate your
              <br />
              experience
              <br />
              as you like
            </h2>

            <Button
              label="Book Tickets"
              showIcon={true}
              iconSrc="/assets/icon-arrow-right.svg"
            />
          </div>
          <div
            className="
              no-scrollbar
              flex items-start gap-8 lg:gap-12 overflow-x-auto overflow-y-hidden
              snap-x snap-mandatory
              pr-6
            "
          >
            <div className="shrink-0 text-center self-center">
              <div className="relative overflow-hidden rounded-[26px] w-[260px] h-[360px]">
                <img
                  src="/assets/rest.png"
                  alt="Restaurants"
                  className="h-full w-full object-cover select-none"
                  draggable={false}
                />
              </div>
              <div className="mt-3 font-playfair text-[24px] md:text-[30px] text-white">
                Restaurants
              </div>
            </div>

            <div className="shrink-0 text-center">
              <div className="relative overflow-hidden rounded-[34px] w-[260px] h-[360px] md:w-[340px] md:h-[470px]">
                <img
                  src="/assets/experience.png"
                  alt="Experiences"
                  className="h-full w-full object-cover select-none"
                  draggable={false}
                />
              </div>
              <div className="mt-3 font-playfair text-[24px] md:text-[30px] text-white">
                Experiences
              </div>
            </div>
            <div className="shrink-0 text-center self-center">
              <div className="relative overflow-hidden rounded-[26px] w-[260px] h-[360px]">
                <img
                  src="/assets/events.png"
                  alt="Events"
                  className="h-full w-full object-cover select-none"
                  draggable={false}
                />
              </div>
              <div className="mt-3 font-playfair text-[24px] md:text-[30px] text-white">
                Events
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurateExperience;
