"use client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    inquiryType: "",
    name: "",
    company: "",
    department: "",
    email: "",
    phone: "",
    videoUrl: "",
    message: "",
    agreed: false,
  });
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreed) {
      toast({
        title: "エラー",
        description: "プライバシーポリシーに同意してください",
        variant: "destructive",
      });
      return;
    }

    if (
      !formData.name ||
      !formData.company ||
      !formData.email ||
      !formData.phone ||
      !formData.message ||
      !formData.inquiryType
    ) {
      toast({
        title: "エラー",
        description: "必須項目をすべて入力してください",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "送信完了",
          description: "お問い合わせを送信しました。ありがとうございます。",
        });
        setFormData({
          inquiryType: "",
          name: "",
          company: "",
          department: "",
          email: "",
          phone: "",
          videoUrl: "",
          message: "",
          agreed: false,
        });
      } else {
        toast({
          title: "エラー",
          description: result.error || "送信に失敗しました",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "エラー",
        description: "ネットワークエラーが発生しました",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">
            HOME
          </Link>
          <span className="mx-2">&gt;</span>
          <span>お問い合わせ</span>
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
          <h1 className="text-6xl font-bold text-gray-900 mb-4">CONTACT</h1>
          <p className="text-lg text-gray-600">お問い合わせ</p>
        </div>

        {/* Vertical text */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm text-gray-400 tracking-widest">
          CONTACT
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Inquiry Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              お問い合わせ種別
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded ml-2">
                必須
              </span>
            </label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            >
              <option value="">選択してください</option>
              <option value="Capuアプリについて">Capuアプリについて</option>
              <option value="システム開発依頼">システム開発依頼</option>
              <option value="コンテンツ制作依頼">コンテンツ制作依頼</option>
              <option value="デジタルマーケティング相談">デジタルマーケティング相談</option>
              <option value="その他">その他</option>
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              お名前
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded ml-2">
                必須
              </span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="田中太郎"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              会社名
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded ml-2">
                必須
              </span>
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="株式会社Capu"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              部署名
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              placeholder="営業部"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              メールアドレス
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded ml-2">
                必須
              </span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@co.jp"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              電話番号
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded ml-2">
                必須
              </span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="08012345678"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />
          </div>

          {/* Video URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              動画先URL
            </label>
            <input
              type="url"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleInputChange}
              placeholder="https://example.jp"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              お問い合わせ内容
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded ml-2">
                必須
              </span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              placeholder="お問い合わせ内容を入力してください。"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-vertical"
              required
            ></textarea>
          </div>

          {/* Privacy Policy */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              当社の
              <a
                href="https://capu-app.notion.site/Capu_-21b42cc815298053b8f6e818e327c1f1"
                className="text-pink-500 hover:underline"
              >
                プライバシーポリシー
              </a>
              に同意の上、送信してください。
            </p>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleInputChange}
                className="form-checkbox h-4 w-4 text-pink-500 rounded border-gray-300 focus:ring-pink-500"
                required
              />
              <span className="ml-2 text-sm text-gray-700">同意する</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-pink-500 text-white px-12 py-3 rounded-md hover:bg-pink-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "送信中..." : "送信する"}
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
