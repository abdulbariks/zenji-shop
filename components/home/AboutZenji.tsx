import siteData from "../data/Data.json";

export default function AboutZenji() {
  const { tagline, heading, paragraphs, quote, subtext, ctaText, ctaLink } =
    siteData.about;

  return (
    <section className="bg-black text-white py-24 px-6 md:px-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Editorial Showcase Image */}
        <div className="relative w-full h-[500px] md:h-[600px] bg-zinc-900 overflow-hidden border border-zinc-800">
          <img
            src="/images/about-zenji.avif"
            alt="Zenji Models"
            className="w-full h-full object-cover grayscale contrast-125 opacity-80 hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Right Side: Copy Structure */}
        <div className="space-y-6 font-mono max-w-lg">
          <p className="text-red-600 text-xs tracking-widest font-bold uppercase">
            {tagline}
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-none font-sans">
            {heading}
          </h2>

          <div className="space-y-4 text-xs text-zinc-400 leading-relaxed tracking-wide">
            {paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>

          <blockquote className="border-l-2 border-red-600 pl-4 py-1 italic text-xs text-zinc-300 font-serif">
            {quote}
          </blockquote>

          <p className="text-[10px] text-zinc-500 tracking-widest uppercase font-semibold">
            {subtext}
          </p>

          <div className="pt-2">
            <a
              href={ctaLink}
              className="inline-block border-b-2 border-white text-white hover:text-red-500 hover:border-red-500 text-xs font-bold tracking-widest uppercase py-1 transition-colors"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
