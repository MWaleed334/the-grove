import Button from "@/components/ui/Button";
import React from "react";

type Props = {
  mapSrc?: string; 
};

const FindYourPlace: React.FC<Props> = ({
  mapSrc = "/assets/groves-map.png",
}) => {
  return (
    <section className="w-full font-sans">
      <div className="mx-auto max-w-7xl px-6 py-4 ">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative">
              <img
                src={mapSrc}
                alt="Groves map"
                className="block h-auto w-[560px] max-w-full select-none"
                draggable={false}
                style={{
                  filter:
                    "drop-shadow(0 12px 24px rgba(0,0,0,.35)) drop-shadow(0 0 42px rgba(120, 246, 166, .35))",
                }}
              />
            </div>
          </div>

          <div className="text-left order-1 md:order-2">
            <div className="mb-2 text-[13px] md:text-[15px] font-normal tracking-[0.1em] text-white">
              EXPERIENCE THE GROVES
            </div>

            <h2 className="font-playfair text-white text-[40px] leading-tight md:text-[50px]">
              Find your place
            </h2>

            <p className="my-3 max-w-md text-[12px] md:text-[13px] leading-relaxed text-white">
              Our interactive map will show you the way to the shops and
              restaurants that you want to see.
            </p>

            <Button 
              label="Open the Map" 
              showIcon={true} 
              iconSrc="/assets/icon-arrow-right.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindYourPlace;
