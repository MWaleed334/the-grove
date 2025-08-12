import { useState } from "react";
import Button from "@/components/ui/Button";

const MENU = [
  "DINE WITH US",
  "PLAN YOUR VISIT",
  "EVENTS",
  "VIEW GROVES MAP",
  "OUR STORY",
  "CONTACT US",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="/assets/logo.png"
            alt="The Groves"
            className="h-10 w-auto cursor-pointer object-contain"
          />
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <div className="hidden items-center gap-3 md:flex">
            <img src="/assets/icon-tiktok.png" className="h-5 w-5 cursor-pointer" alt="TikTok" />
            <img src="/assets/icon-instagram.png" className="h-5 w-5 cursor-pointer" alt="Instagram" />
            <svg
              className="h-5 w-5 cursor-pointer text-white/85"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-label="X"
            >
              <path d="M14.7 10.6 22 3h-2.5l-5.4 5.7L9.5 3H2l7.7 11.2L2.7 21H5l5.9-6.2L14.5 21H22l-7.3-10.4Zm-2.1 2.2-.7-1-6-8.3h2.6l4.3 5.9.7 1 6.1 8.4h-2.6l-4.4-6z" />
            </svg>
            <img src="/assets/icon-snapchat.png" className="h-5 w-5 cursor-pointer" alt="Snapchat" />
          </div>

          <Button label="Log in" showIcon={false} />
 <button
                type="button"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white/80">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
                <img
                  src="/assets/icon-flag-uk.png"
                  className="h-4 w-auto"
                  alt="English"
                />
                <span className="text-[13px]">English</span>
              </button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center"
        >
          <span className="relative block h-[2px] w-6 bg-[#C5A04A]">
            <span className="absolute left-0 -top-[7px] block h-[2px] w-6 bg-[#C5A04A]" />
            <span className="absolute left-0 top-[7px] block h-[2px] w-6 bg-[#C5A04A]" />
          </span>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] h-[100vh] overflow-y-auto">
          <div className="absolute inset-0 bg-gradient-to-b from-[#283606] to-[#0F1500]" />

          <div className="relative mx-auto w-full max-w-[420px] px-4 pt-3 pb-8">
            <div className="flex items-center justify-between">
              <img
                src="/assets/logo.png"
                alt="The Groves"
                className="h-10 cursor-pointer w-auto object-contain"
              />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#C5A04A]">
                  <path d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3z" />
                </svg>
              </button>
            </div>

            <nav className="mt-4 border-t border-white/15">
              <ul className="divide-y divide-white/15">
                {MENU.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="block py-3 text-[12px] font-normal tracking-[0.14em] text-white hover:text-white"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white/80">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
                <img
                  src="/assets/icon-flag-uk.png"
                  className="h-4 w-auto"
                  alt="English"
                />
                <span className="text-[11px]">English</span>
              </button>

              <div className="mt-4">
                <Button label="Log in" showIcon={false} />
              </div>

              <div className="mt-5 flex items-center gap-4">
                <img
                  src="/assets/icon-tiktok.png"
                  className="h-5 w-5 cursor-pointer"
                  alt="TikTok"
                />
                <img
                  src="/assets/icon-instagram.png"
                  className="h-5 w-5 cursor-pointer"
                  alt="Instagram"
                />
                <svg
                  className="h-5 w-5 cursor-pointer text-white/85"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-label="X"
                >
                  <path d="M14.7 10.6 22 3h-2.5l-5.4 5.7L9.5 3H2l7.7 11.2L2.7 21H5l5.9-6.2L14.5 21H22l-7.3-10.4Zm-2.1 2.2-.7-1-6-8.3h2.6l4.3 5.9.7 1 6.1 8.4h-2.6l-4.4-6z" />
                </svg>
                <img
                  src="/assets/icon-snapchat.png"
                  className="h-5 w-5 cursor-pointer"
                  alt="Snapchat"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
