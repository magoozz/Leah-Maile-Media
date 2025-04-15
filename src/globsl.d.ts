// ./src/globals.d.ts
export {};

declare global {
  interface Window {
    grecaptcha: ReCaptchaV2.ReCaptcha;
  }
}

