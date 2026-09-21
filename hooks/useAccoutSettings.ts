import { useState } from "react";

export function useAccountSettings() {
  const [form, setForm] = useState({
    firstName: "Alexander",
    lastName: "Sterling",
    email: "alexander.sterling@example.com",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    form,
    handleChange,
  };
}