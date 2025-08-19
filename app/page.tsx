import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[800px] bg-gray-50">
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-2 p-8">
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/music-recording-studio-artists.png"
              alt="Music recording studio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img src="/entertainment-collaboration.png" alt="Entertainment event collaboration" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/creative-brainstorming.png"
              alt="Creative brainstorming session"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img src="/digital-media-workspace.png" alt="Digital content creation" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/team-group-photo.png"
              alt="Team event collaboration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/live-concert-performance.png"
              alt="Festival excitement and energy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center py-16 md:py-24">
          <div className="text-center bg-white/90 p-8 md:p-12 rounded-lg backdrop-blur-sm max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-7xl font-bold text-gray-900 mb-4">
              We Don’t Say It
              <br />
              We <span className="text-pink-500">Prove</span> It.
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">ABOUT</h2>
            <div className="w-12 h-1 bg-pink-500 mb-8"></div>
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">
              「世の中に本当に必要だ」
              <br />
              と信じた体験だけをつくる。
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              私たちは、革新的なアイデアと確かな技術力で、世の中に必要だと感じたサービスや事業を外的資本や外的リソースへの忖度受けずに世の中に必要だったことを証明できるようなる、というミッションを掲げています。
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-96">
            <img src="/modern-office-exterior.png" alt="Office building" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">SERVICE</h2>
            <div className="w-12 h-1 bg-pink-500 mb-8"></div>
            <h3 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6">Capu</h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              Capuは業界初の女子向けエンタメマッチングサービスです。</p>
            <a 
              href="https://www.capu-app.com/" 
              className="inline-flex items-center px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              詳細を見る
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="relative">
            <div className="bg-gray-200 rounded-lg p-6 md:p-8 h-64 md:h-96 flex items-center justify-center">
              <img src="/mobile-pato-interface-mockup.png" alt="Pato app mockup" className="max-h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 md:py-24 px-6 bg-pink-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">NEWS</h2>
          <div className="w-12 h-1 bg-white mb-12"></div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <div className="bg-gray-200 h-48 md:h-56 relative">
                    <img 
                      src="/modern-office-exterior.png" 
                      alt="Office building" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-xs text-pink-500 font-semibold uppercase tracking-wide">Company News</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    株式会社Capuを設立しました
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3">
                    株式会社として正式に新たなスタートを切りました。
                  </p>
                  <div className="mt-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      2025年9月1日
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <div className="bg-gray-200 h-48 md:h-56 relative">
                    <img 
                      src="/mobile-pato-interface-mockup.png" 
                      alt="Capu app mockup" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-xs text-pink-500 font-semibold uppercase tracking-wide">Product Launch</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    エンタメマッチングアプリ「Capu」をリリース
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3">
                    女子向けエンタメマッチングの新しいスタンダードとなるアプリをついにリリースしました。
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      2025年10月1日
                    </div>
                    <div className="text-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
