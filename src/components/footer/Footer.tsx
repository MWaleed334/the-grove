import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <div className="h-px w-full bg-white/15" />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex md:flex-row flex-col gap-10 justify-between mb-5 md:mb-10">
          <img
              src="/assets/logo.png"
              alt="The Groves"
              className="h-9 w-40 md:hidden block"
              draggable={false}
            />
            <div className="md:col-span-5">
            <h2 className="font-playfair text-white text-[40px] leading-tight md:text-[50px]">
              Join us for an
              <br /> unforgettable experience
            </h2>
          </div>
          <div className="md:col-span-2">
  <div className="mb-3 text-[12px] md:text-[12px] md:text-[13px] font-norma; tracking-[0.25em] text-white">
    DOWNLOAD THE GROVES APP
  </div>
  <div className="flex gap-3">
    <a
      href="#"
      className="flex items-center gap-2 md:gap-3 rounded-lg bg-white px-2 md:px-4 py-1 md:py-2 hover:bg-gray-200 transition"
    >
      <img src="/assets/apple-logo.png" alt="apple-logo-icon" className="h-5 w-5 cursor-pointer md:h-6 md:w-6" />
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] text-gray-800 uppercase">Download on the</span>
        <span className="text-sm font-semibold text-black">App Store</span>
      </div>
    </a>

    <a
      href="#"
      className="flex items-center gap-2 md:gap-3 rounded-lg bg-white px-2 md:px-4 py-1 md:py-2 hover:bg-gray-200 transition"
    >
      <img src="/assets/play-store.png" alt="play-store-icon" className="h-5 w-5 cursor-pointer md:h-6 md:w-6" />
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] text-gray-800 uppercase">Get it on</span>
        <span className="text-sm font-semibold text-black">Google Play</span>
      </div>
    </a>
  </div>
</div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:gap-20 md:grid-cols-12 mb-5 md:mb-10">
        
          <div className="md:col-span-2 text-white">
            <div className="mb-3 text-[12px] md:text-[13px] font-normal tracking-[0.25em] text-white">
              LOCATION
            </div>
            <div className="text-[12px] md:text-[13px]">
              Al-Hizam Park
              <br />
              Al-Senaii, Yanbu Al Bahr 46455
              <br />
              Riyadh Saudi Arabia
            </div>
          </div>

          <div className="md:col-span-3 text-white">
            <div className="mb-3 text-[12px] md:text-[13px] font-normal tracking-[0.25em] text-white">
              WORKING HOURS
            </div>
            <div className="text-[12px] md:text-[13px]">
              Sun until Thurs: 4:00PM
              <br />
              Fri &amp; Sat: 2:30PM
              <br />
              <br />
              Gates Close at:
              <br />
              Sat until Wed: 12:00AM
              <br />
              Thu &amp; Fri: 12:30AM
            </div>
          </div>
  <div className="md:col-span-3 text-white">
            <div className="mb-3 text-[12px] md:text-[13px] font-normal tracking-[0.25em] text-white">
              GUEST SERVICE CALL
            </div>
            <div className="text-[12px] md:text-[13px]">
              cc@groves-sa.com
              <br />
              920001667
              <br />
              +966556631309
            </div>
          </div>

        </div>

      
          <div className="flex flex-col md:flex-row gap-10 justify-between">
            <img
              src="/assets/logo.png"
              alt="The Groves"
              className="h-10 w-auto hidden md:block"
              draggable={false}
            />
            <div className="flex items-center gap-4 ">
            <img src="/assets/icon-tiktok.png" className="h-5 w-5 cursor-pointer" alt="tiktok"/>
            
                         <img src="/assets/icon-instagram.png" className="h-5 w-5 cursor-pointer" alt="insatgram"/>

              <svg className="h-5 w-5 cursor-pointer text-white/85" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.7 10.6 22 3h-2.5l-5.4 5.7L9.5 3H2l7.7 11.2L2.7 21H5l5.9-6.2L14.5 21H22l-7.3-10.4Zm-2.1 2.2-.7-1-6-8.3h2.6l4.3 5.9.7 1 6.1 8.4h-2.6l-4.4-6z"/>
              </svg>
                                       <img src="/assets/icon-snapchat.png" className="h-5 w-5 cursor-pointer" alt="snapchat"/>

            </div>
        </div>

        <div className="mt-6 flex flex-col items-start gap-10 md:gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] md:text-[13px] text-white">
            <a href="#" className="hover:text-white">Terms &amp; Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span className="text-white">©2023 The Groves for Entertainment</span>
          </div>

          <div className="flex items-center gap-4">
            <img src="/assets/visa.png" alt="Visa" className="h-6 w-auto" />
            <img src="/assets/mastercard.png" alt="Mastercard" className="h-6 w-auto" />
            <img src="/assets/mada.png" alt="Mada" className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
