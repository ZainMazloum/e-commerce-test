import Image from "next/image";
import Link from "next/link";
import HeroSectionImage from "../../src/images/hero/HeroSectionImage.png"
function HeroSection() {
  return (
    <section className="relative w-full min-h-[55vh] md:min-h-[65vh] lg:min-h-[75vh] bg-surface-secondary overflow-hidden">
      {/* Background image placeholder */}
      <Image
        src= {HeroSectionImage}
        alt="Hero background — curated fashion lifestyle"
        fill
        className="object-cover opacity-60"
        priority
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col justify-end h-full min-h-[55vh] md:min-h-[65vh] lg:min-h-[75vh] px-5 pb-10 md:px-10 lg:px-16 lg:pb-16 max-w-7xl mx-auto">
        <div className="max-w-sm md:max-w-md lg:max-w-xl">
          {/* Note: Font-display handled globally via base styles, text color tokenized */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
            Curated for the Modern Minimalist
          </h1>
          <p className="mt-3 text-sm md:text-base text-text-secondary leading-relaxed">
            Discover our collection of premium, sustainably sourced essentials
            designed to elevate your everyday wardrobe with effortless
            sophistication.
          </p>
          {/* Main CTA button using primary brand tokens */}
          <Link
            href="#"
            className="inline-flex items-center gap-2 mt-5 bg-primary hover:bg-primary-light active:scale-95 text-surface-primary text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            Shop Now
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default HeroSection