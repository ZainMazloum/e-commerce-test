import MobileMenu from "@/components/layout/MobileMenu";
import Navbar from "@/components/layout/Navbar";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 w-full">
      <MobileMenu />
      <Navbar />
    </div>
  );
}