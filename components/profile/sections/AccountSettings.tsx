"use client"
import { AccountFormData } from "@/types/domain/profile";
import { useState } from "react";
function AccountSettings() {
  const [form, setForm] = useState<AccountFormData>({
    firstName: "Alexander",
    lastName: "Sterling",
    email: "alexander.sterling@example.com",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <section>
      <h2 className="text-lg font-semibold text-text-primary mb-4">
        Account Settings
      </h2>

      <div className="border border-border rounded-2xl p-5 bg-surface-primary shadow-soft">
        {/* Name row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="firstName"
              className="text-xs font-medium text-text-secondary"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              className="border border-border rounded-xl px-3 py-2 text-sm text-text-primary bg-background
                         focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
                         transition-all duration-200"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="lastName"
              className="text-xs font-medium text-text-secondary"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              className="border border-border rounded-xl px-3 py-2 text-sm text-text-primary bg-background
                         focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
                         transition-all duration-200"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5 mb-5">
          <label
            htmlFor="email"
            className="text-xs font-medium text-text-secondary"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="border border-border rounded-xl px-3 py-2 text-sm text-text-primary bg-background
                       focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
                       transition-all duration-200"
          />
        </div>

        {/* Password Management */}
        <div className="flex flex-col gap-1.5 mb-6">
          <p className="text-xs font-medium text-text-secondary">
            Password Management
          </p>
          <button
            className="w-fit border border-border rounded-xl px-4 py-2 text-sm font-medium cursor-pointer
                       text-text-primary bg-background
                       transition hover:text-white hover:bg-red-700"
          >
            Change Password
          </button>
        </div>

        {/* Save Button */}
        <button
          className="w-full bg-gradient-primary text-primary border border-border font-semibold text-sm
                     py-3 rounded-xl 
                     cursor-pointer hover:-translate-y-0.5 hover:shadow-soft
                     hover:bg-primary-light
                     hover:text-white
                     active:scale-95 transition-all duration-200"
        >
          Save Changes
        </button>
      </div>
    </section>
  );
}
export default AccountSettings