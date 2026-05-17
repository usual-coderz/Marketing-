"use client";

import { useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState(null);

  const login = () => {
    console.log("login");
  };

  const logout = () => {
    setUser(null);
  };

  return {
    user,
    login,
    logout,
  };
}