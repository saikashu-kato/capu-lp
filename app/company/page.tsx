import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-500">
          <a href="/" className="hover:text-gray-700">
            HOME
          </a>
          <span className="mx-2">&gt;</span>
          <span>会社概要</span>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gray-50 py-16">
        {/* Decorative shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-pink-100 rounded-lg transform rotate-12 opacity-60"></div>
          <div className="absolute top-20 left-40 w-24 h-24 bg-pink-200 rounded-lg transform -rotate-12 opacity-40"></div>
          <div className="absolute top-32 left-20 w-20 h-20 bg-pink-150 rounded-lg transform rotate-45 opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">COMPANY</h1>
          <p className="text-lg text-gray-600">会社概要</p>
        </div>

        {/* Vertical text */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm text-gray-400 tracking-widest">
          COMPANY
        </div>
      </div>

      {/* Company Information */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Company Overview */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">会社概要</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <dl className="space-y-6">
                <div className="flex flex-col sm:flex-row">
                  <dt className="text-sm font-medium text-gray-700 sm:w-32 mb-2 sm:mb-0">会社名</dt>
                  <dd className="text-sm text-gray-900">株式会社Capu</dd>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <dt className="text-sm font-medium text-gray-700 sm:w-32 mb-2 sm:mb-0">設立</dt>
                  <dd className="text-sm text-gray-900">2025年9月</dd>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <dt className="text-sm font-medium text-gray-700 sm:w-32 mb-2 sm:mb-0">代表者</dt>
                  <dd className="text-sm text-gray-900">代表取締役 加藤圭一郎</dd>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <dt className="text-sm font-medium text-gray-700 sm:w-32 mb-2 sm:mb-0">所在地</dt>
                  <dd className="text-sm text-gray-900">
                    〒104-0061
                    <br />
                    東京都中央区銀座1-12-4N&E BLD.6F
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <dt className="text-sm font-medium text-gray-700 sm:w-32 mb-2 sm:mb-0">電話番号</dt>
                  <dd className="text-sm text-gray-900">080-1865-1568</dd>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <dt className="text-sm font-medium text-gray-700 sm:w-32 mb-2 sm:mb-0">メールアドレス</dt>
                  <dd className="text-sm text-gray-900">capu-info@saikashu.com</dd>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <dt className="text-sm font-medium text-gray-700 sm:w-32 mb-2 sm:mb-0">事業内容</dt>
                  <dd className="text-sm text-gray-900">
                    デジタルマーケティング事業
                    <br />
                    コンテンツ制作事業
                    <br />
                    システム開発事業
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <dt className="text-sm font-medium text-gray-700 sm:w-32 mb-2 sm:mb-0">従業員数</dt>
                  <dd className="text-sm text-gray-900">1名（2025年9月現在）</dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
