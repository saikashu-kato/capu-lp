import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="w-full h-1 bg-pink-500"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-between items-center h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/capu-logo.png"
                alt="Capu"
                width={140}
                height={56}
                className="h-8 md:h-14 w-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Button
              asChild
              className="bg-pink-500 hover:bg-pink-600 text-base md:text-lg px-4 md:px-6 py-2 md:py-3"
            >
              <Link href="/contact">CONTACT</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
