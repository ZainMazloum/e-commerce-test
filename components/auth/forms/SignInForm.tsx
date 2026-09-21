"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthBrandLogo } from "../shared/AuthBrandLogo";
import { AuthCard } from "../shared/AuthCard";
import { AuthCardHeader } from "../shared/AuthCardHeader";
import { AuthFormField } from "../shared/AuthFormField";
import { AuthFooterLink } from "../shared/AuthFooterLinkProps";
import { AuthSubmitButton } from "../shared/AuthSubmitButton";
import { AuthDivider } from "../shared/AuthDivider";
import { AuthSocialButton } from "../shared/AuthSocialButton";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
export default function SignInPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in:", formData);
  };

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-10">

      <AuthBrandLogo />

      <AuthCard>
        <AuthCardHeader
          title="Sign In"
          subtitle="Sign in to your account."
        />

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <AuthFormField
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <AuthFormField
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            rightSlot={
              <Link
                href="#"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                Forgot Password?
              </Link>
            }
          />

          <AuthSubmitButton label="Log In" />
        </form>

        <AuthDivider text="or continue with" />

        <div className="space-y-3">
          <AuthSocialButton icon={<FcGoogle />} label="Google" />
          <AuthSocialButton icon={<FaXTwitter />} label="GitHub" />
        </div>

        <div className="mt-6">
          <AuthFooterLink
            question="Don't have an account?"
            linkText="Create an account"
            href="/sign-up"
          />
        </div>
      </AuthCard>

    </main>
  );
}