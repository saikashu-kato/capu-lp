import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

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
              src="/image1.png"
              alt="音楽レコーディングスタジオでの制作風景 - 株式会社Capuのエンタメ事業"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img src="/image6.png" alt="エンターテイメントイベントでのコラボレーション - Capuのマッチング事業" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/image2.png"
              alt="クリエイティブなブレインストーミングセッション - 革新的なアイデア創出"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img src="/image3.png" alt="デジタルコンテンツ制作現場 - テクノロジーとクリエイティビティ" className="w-full h-full object-cover" />
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/image4.png"
              alt="チームでのイベント企画コラボレーション - 共創による価値創造"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/image5.png"
              alt="フェスティバルの熱気とエネルギー - エンタメ体験の創出"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center py-16 md:py-24">
          <div className="text-center bg-white/90 p-8 md:p-12 rounded-lg backdrop-blur-sm max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-7xl font-bold text-gray-900 mb-4">
              Only what’s <span className="text-pink-500">essential</span>.
              <br />
              Only what’s <span className="text-pink-500">matters</span>.
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
          <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-96 relative">
            <Image src="/image7.png" alt="株式会社Capuのモダンなオフィスビル - 革新的な働く環境" fill className="object-cover" priority />
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
            『Capu』（カプ）は、業界の常識を変える女性向けエンタメマッチングサービスです。「スキルを持つ人」と「業務を依頼したい人」の間の架け橋となり、誰もが楽しめるプラットフォームを提供します。
              </p>
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
              <Image src="/mobile-pato-interface-mockup.png" alt="Capuアプリのモバイルインターフェースモックアップ - 女子向けエンタメマッチング" width={300} height={600} className="max-h-full object-contain" priority />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-12 md:py-24 px-4 md:px-6 bg-pink-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">NEWS</h2>
            <div className="w-12 h-1 bg-white mx-auto mb-4"></div>
            <p className="text-pink-100 text-base md:text-lg">最新のお知らせをお届けします</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            <div className="group relative">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                <div className="mb-4 md:mb-6">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-xs text-white font-semibold uppercase tracking-wide">Product</span>
                  </div>
                  
                  <h4 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 leading-tight">
                    エンタメマッチングアプリ「Capu」をリリース
                  </h4>
                  
                  <p className="text-pink-100 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                    女子向けエンタメマッチングの新しいスタンダードとなるアプリをついにリリースしました。新しい体験をお楽しみください。
                  </p>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-pink-200">
                  <div className="w-6 md:w-8 h-6 md:h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-3 md:w-4 h-3 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-medium text-xs md:text-sm">2025年10月1日</span>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-5 md:w-6 h-5 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                
                <div className="mb-4 md:mb-6">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-xs text-white font-semibold uppercase tracking-wide">Company</span>
                  </div>
                  
                  <h4 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 leading-tight">
                    株式会社Capuを設立しました
                  </h4>
                  
                  <p className="text-pink-100 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                    株式会社として正式に新たなスタートを切りました。革新的なサービスの提供を通じて、社会に価値を届けてまいります。
                  </p>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-pink-200">
                  <div className="w-6 md:w-8 h-6 md:h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-3 md:w-4 h-3 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-medium text-xs md:text-sm">2025年9月1日</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
