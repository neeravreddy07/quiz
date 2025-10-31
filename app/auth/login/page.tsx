"use client";
import { useEffect, useRef, useState } from "react";
import { auth, googleProvider, Recaptcha } from "@/lib/firebase";
import { signInWithPopup, signInWithPhoneNumber } from "firebase/auth";
import Link from "next/link";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState<any>(null);
  const recaptchaRef = useRef<HTMLDivElement | null>(null);
  const [recaptcha, setRecaptcha] = useState<any>(null);
  const [step, setStep] = useState<"enter" | "verify">("enter");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!recaptcha && recaptchaRef.current) {
      const verifier = new Recaptcha(auth, recaptchaRef.current, {
        size: "invisible",
      });
      setRecaptcha(verifier);
    }
  }, [recaptcha]);

  async function loginWithGoogle() {
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
      window.location.href = "/dashboard";
    } catch (e: any) {
      setError(e?.message ?? "Google sign-in failed");
    }
  }

  async function sendOtp(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      if (!recaptcha) return;
      const confirmationResult = await signInWithPhoneNumber(auth, phone, recaptcha);
      setConfirmation(confirmationResult);
      setStep("verify");
    } catch (e: any) {
      setError(e?.message ?? "Failed to send OTP");
    }
  }

  async function verifyOtp(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      if (!confirmation) return;
      await confirmation.confirm(otp);
      window.location.href = "/dashboard";
    } catch (e: any) {
      setError(e?.message ?? "Invalid OTP");
    }
  }

  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-bold">Login</h1>
      <p className="mt-2 text-gray-600">Choose Google or Phone OTP.</p>

      <div className="mt-6 grid gap-6">
        <button onClick={loginWithGoogle} className="rounded bg-black px-4 py-2 text-white">Sign in with Google</button>

        <div className="rounded border p-4">
          <h2 className="font-semibold">Phone OTP</h2>
          {step === "enter" && (
            <form onSubmit={sendOtp} className="mt-3 grid gap-3">
              <input value={phone} onChange={(e)=>setPhone(e.target.value)} className="rounded border p-2" placeholder="+91XXXXXXXXXX" />
              <button className="rounded bg-black px-4 py-2 text-white">Send OTP</button>
            </form>
          )}
          {step === "verify" && (
            <form onSubmit={verifyOtp} className="mt-3 grid gap-3">
              <input value={otp} onChange={(e)=>setOtp(e.target.value)} className="rounded border p-2" placeholder="Enter OTP" />
              <button className="rounded bg-black px-4 py-2 text-white">Verify OTP</button>
            </form>
          )}
          {!!error && <p className="mt-3 text-sm text-red-600">{error}</p>}
          <div ref={recaptchaRef} id="recaptcha-container" />
        </div>

        <Link href="/dashboard" className="text-sm text-blue-600">Skip (dev)</Link>
      </div>
    </main>
  );
}
