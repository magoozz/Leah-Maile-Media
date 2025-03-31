import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message, captchaToken } = await req.json();

  if (!captchaToken) {
    return NextResponse.json({ error: "CAPTCHA missing" }, { status: 400 });
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY; 
  const recaptchaVerifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

  const recaptchaRes = await fetch(recaptchaVerifyURL, { method: "POST" });
  const recaptchaData = await recaptchaRes.json();

  if (!recaptchaData.success) {
    return NextResponse.json({ error: "CAPTCHA verification failed" }, { status: 400 });
  }

  // Here you would send an email, save to DB, etc.
  return NextResponse.json({ message: "Message received" }, { status: 200 });
}
