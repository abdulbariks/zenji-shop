import siteData from "../data/topbarData.json";

export default function Topbar() {
  const { announcement } = siteData.topbar;
  const items = Array.from({ length: 8 }, (_, i) => (
    <span key={i} className="mx-4 inline-block">
      {announcement}
    </span>
  ));

  return (
    <div className="font-jetbrains bg-[#BC0100] h-10 flex items-center overflow-hidden border-b border-red-800 px-4 text-[10px] uppercase tracking-widest text-white md:text-[11px]">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        <div className="flex shrink-0">{items}</div>
        <div className="flex shrink-0" aria-hidden>
          {items}
        </div>
      </div>
    </div>
  );
}
