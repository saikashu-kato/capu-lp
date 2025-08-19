import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white py-12 md:py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div>
            <div className="mb-4">
              <Image src="/capu-logo.png" alt="Capu" width={140} height={56} className="h-8 md:h-14 w-auto" />
            </div>
            <div className="text-sm md:text-base text-gray-600">
              <p>株式会社Capu</p>
              <p>〒104-0061</p>
              <p>東京都中央区銀座1-12-4N&E BLD.6F</p>
            </div>
          </div>
          <div>
            <nav className="space-y-2">
              <a href="/#about" className="block text-sm md:text-base text-gray-600 hover:text-gray-900">
                ABOUT
              </a>
              <a href="/company" className="block text-sm md:text-base text-gray-600 hover:text-gray-900">
                COMPANY
              </a>
              <a href="/#service" className="block text-sm md:text-base text-gray-600 hover:text-gray-900">
                SERVICE
              </a>
              <a href="/#news" className="block text-sm md:text-base text-gray-600 hover:text-gray-900">
                NEWS
              </a>
              <a href="/contact" className="block text-sm md:text-base text-gray-600 hover:text-gray-900">
                CONTACT
              </a>
            </nav>
          </div>
        </div>
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200 flex justify-center items-center">
          <p className="text-sm md:text-base text-gray-600">©Capu Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
