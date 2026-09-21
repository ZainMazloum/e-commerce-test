"use client";

import { useState } from "react";
import { TabKey } from "@/types/domain/profile";

import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import MobileTabNav from "@/components/profile/MobileTabNav";
import OrderHistory from "@/components/profile/sections/OrderHistory";
import ShippingAddresses from "@/components/profile/sections/ShippingAddresses";
import AccountSettings from "@/components/profile/sections/AccountSettings";

export default function ProfileView() {
  const [activeTab, setActiveTab] = useState<TabKey>("orders");

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <ProfileHeader />

        <div className="flex gap-14 pb-16">

          <ProfileSidebar activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="flex-1 min-w-0 flex flex-col gap-8">

            <MobileTabNav active={activeTab} onChange={setActiveTab} />

            {activeTab === "orders"    && <OrderHistory />}
            {activeTab === "settings"  && <AccountSettings />}
            {activeTab === "addresses" && <ShippingAddresses />}

          </div>
        </div>
      </div>
    </main>
  );
}