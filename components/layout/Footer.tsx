import Link from "next/link";
import { TikTokIcon, FacebookIcon, InstagramIcon } from "../icons";
import footerData from "../data/footerData.json";

const renderSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "tiktok":
      return <TikTokIcon className="w-4 h-4" />;
    case "instagram":
      return <InstagramIcon className="w-4 h-4" />;
    case "facebook":
      return <FacebookIcon className="w-4 h-4" />;
    default:
      return null;
  }
};

export default function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-zinc-900 font-mono overflow-hidden">
      {/* Giant Background Watermark Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[18vw] font-black text-zinc-900/40 tracking-tighter leading-none">
          ZENJI
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              {/* Logo Symbol */}
              <div className="w-12 h-12 flex items-center justify-center bg-white text-black font-black text-2xl tracking-tighter rounded-sm">
                ZJ
              </div>
            </Link>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-xs">
              {footerData.description}
            </p>

            {/* Social Buttons */}
            <div className="space-y-2">
              <p className="text-[10px] text-zinc-500 tracking-widest uppercase font-semibold">
                FOLLOW THE LORE
              </p>
              <div className="flex flex-wrap gap-2">
                {footerData.socialButtons.map((btn, index) => (
                  <Link
                    key={index}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-sm transition-all ${btn.bgColor}`}
                  >
                    {renderSocialIcon(btn.platform)}
                    <span>{btn.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerData.columns.map((column, colIdx) => (
              <div key={colIdx} className="space-y-4">
                <h3 className="text-xs text-zinc-400 tracking-widest font-bold uppercase">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-xs text-zinc-200 hover:text-red-500 transition-colors tracking-wide block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-[11px] text-zinc-500 gap-4">
          <p>{footerData.copyright}</p>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {footerData.bottomLinks.map((bLink, bIdx) => (
                <Link
                  key={bIdx}
                  href={bLink.href}
                  className="hover:text-zinc-300 transition-colors"
                >
                  {bLink.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              <span>{footerData.tagline}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
