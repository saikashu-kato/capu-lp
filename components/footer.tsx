import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-12 md:py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/capu-logo.png"
                alt="Capu"
                width={140}
                height={56}
                className="h-8 md:h-14 w-auto"
              />
            </div>
            <div className="text-sm md:text-base text-gray-600">
              <p>株式会社Capu</p>
              <p>〒104-0061</p>
              <p>東京都中央区銀座1-12-4N&E BLD.6F</p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <nav className="space-y-2">
              <Link
                href="/#about"
                className="block text-sm md:text-base text-gray-600 hover:text-gray-900 text-center md:text-left"
              >
                ABOUT
              </Link>
              <Link
                href="/company"
                className="block text-sm md:text-base text-gray-600 hover:text-gray-900 text-center md:text-left"
              >
                COMPANY
              </Link>
              <Link
                href="/#service"
                className="block text-sm md:text-base text-gray-600 hover:text-gray-900 text-center md:text-left"
              >
                SERVICE
              </Link>
              <Link
                href="/#news"
                className="block text-sm md:text-base text-gray-600 hover:text-gray-900 text-center md:text-left"
              >
                NEWS
              </Link>
              <Link
                href="/contact"
                className="block text-sm md:text-base text-gray-600 hover:text-gray-900 text-center md:text-left"
              >
                CONTACT
              </Link>
              <a
                href="https://capu-app.notion.site/Capu_-21b42cc815298053b8f6e818e327c1f1"
                className="block text-sm md:text-base text-gray-600 hover:text-gray-900 text-center md:text-left"
              >
                Privacy Policy
              </a>
            </nav>
          </div>
        </div>
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-sm md:text-base text-gray-600">
              ©Capu Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
