'use client'
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {useWindowSize} from "@/hooks/window-size";


const captchaKey = process.env.NEXT_PUBLIC_CAPTCHA ?? '';

export const Recaptcha = ({onSuccess}: { onSuccess: (token: string | null) => void }) => {
  const {width} = useWindowSize()

  const isMobile = width <= 768

  return (
    <div>
      <ReCAPTCHA
        sitekey={captchaKey}
        size={isMobile ? 'compact' : 'normal'}
        onChange={onSuccess}
      />
    </div>
  );
};
