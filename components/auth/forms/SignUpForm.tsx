"use client";

import { useState } from "react";
import { AuthBrandLogo } from "../shared/AuthBrandLogo";
import { AuthCard } from "../shared/AuthCard";
import { AuthCardHeader } from "../shared/AuthCardHeader";
import { AuthFormField } from "../shared/AuthFormField";
import { AuthFooterLink } from "../shared/AuthFooterLinkProps";
import { AuthSubmitButton } from "../shared/AuthSubmitButton";
interface SignUpFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpPage() {
  const [formData, setFormData] = useState<SignUpFormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up:", formData);
  };

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-10">

      <AuthBrandLogo />

      <AuthCard>
        <AuthCardHeader
          title="Create an Account"
          subtitle="Join our curated editorial boutique."
        />

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <AuthFormField
            id="fullName"
            label="Full Name"
            type="text"
            placeholder="Jane Doe"
            value={formData.fullName}
            onChange={handleChange}
          />

          <AuthFormField
            id="email"
            label="Email Address"
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
          />

          <AuthFormField
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
          />

          <AuthFormField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <p className="text-center text-xs text-text-secondary leading-relaxed">
            By creating an account, you agree to our{" "}
            <a href="#" className="underline hover:text-primary transition-colors">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-primary transition-colors">
              Privacy Policy
            </a>
            .
          </p>

          <AuthSubmitButton label="Create Account →" />
        </form>

        <div className="mt-6">
          <AuthFooterLink
            question="Already have an account?"
            linkText="Log In"
            href="/sign-in"
          />
        </div>
      </AuthCard>

    </main>
  );
}