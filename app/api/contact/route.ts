import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      inquiryType,
      name,
      company,
      department,
      email,
      phone,
      videoUrl,
      message,
      agreed,
    } = body;

    if (!agreed) {
      return NextResponse.json(
        { error: "プライバシーポリシーに同意してください" },
        { status: 400 },
      );
    }

    if (!name || !company || !email || !phone || !message || !inquiryType) {
      return NextResponse.json(
        { error: "必須項目をすべて入力してください" },
        { status: 400 },
      );
    }

    const emailContent = `
件名: お問い合わせ - ${inquiryType}

お問い合わせ種別: ${inquiryType}
お名前: ${name}
会社名: ${company}
部署名: ${department || "未記入"}
メールアドレス: ${email}
電話番号: ${phone}
動画先URL: ${videoUrl || "未記入"}

お問い合わせ内容:
${message}
`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "capu-info@saikashu.com",
        subject: "お問い合わせ",
        text: emailContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Resend API error:", response.status, errorData);
      throw new Error(`メール送信に失敗しました: ${response.status}`);
    }

    return NextResponse.json({
      success: true,
      message: "お問い合わせを送信しました",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 },
    );
  }
}
