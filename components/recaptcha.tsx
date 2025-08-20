"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export interface RecaptchaRef {
  reset: () => void;
  execute: () => void;
}

interface RecaptchaProps {
  sitekey?: string;
  onChange?: (token: string | null) => void;
  onExpired?: () => void;
  onError?: () => void;
  theme?: "light" | "dark";
  size?: "compact" | "normal" | "invisible";
}

const Recaptcha = forwardRef<RecaptchaRef, RecaptchaProps>(
  ({ sitekey, onChange, onExpired, onError, theme = "light", size = "normal" }, ref) => {
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    useImperativeHandle(ref, () => ({
      reset: () => {
        recaptchaRef.current?.reset();
      },
      execute: () => {
        recaptchaRef.current?.execute();
      },
    }));

    // 環境変数からサイトキーを取得（プロダクション環境では必須）
    const recaptchaSiteKey = sitekey || process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!recaptchaSiteKey) {
      return (
        <div className="p-4 border border-yellow-300 bg-yellow-50 rounded-md">
          <p className="text-sm text-yellow-800">
            reCAPTCHA設定が完了していません。サイトキーを設定してください。
          </p>
        </div>
      );
    }

    return (
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={recaptchaSiteKey}
        onChange={onChange}
        onExpired={onExpired}
        onError={onError}
        theme={theme}
        size={size}
      />
    );
  }
);

Recaptcha.displayName = "Recaptcha";

export default Recaptcha;