import Footer from "@/components/layout/Footer";
import HeaderWrapper from "@/components/layout/HeaderWrapper";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black text-white antialiased">
      <HeaderWrapper />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
