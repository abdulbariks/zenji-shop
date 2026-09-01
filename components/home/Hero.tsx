import siteData from "../data/Data.json";

export default function Hero() {
  const { subtitle, title, ctaText, ctaLink, videoSrc } = siteData.hero;

  return (
    <section className="relative w-full h-screen min-h-150 flex items-end justify-start bg-black overflow-hidden pb-16 px-8 md:px-16">
      {/* Background Video with Dark Overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-65"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-xl space-y-4">
        <div className="flex items-center space-x-2 text-red-600 font-mono text-xs tracking-widest">
          <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
          <span>{subtitle}</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none font-sans drop-shadow-md">
          {title.split(" ").map((word, i) => (
            <span key={i} className="block">
              {word}
            </span>
          ))}
        </h1>

        <a
          href={ctaLink}
          className="inline-block bg-[#B91C1C] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 transition-all shadow-lg hover:translate-x-1"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}
