"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { scrumAxios } from "@/common/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  let api_url = process.env.NEXT_PUBLIC_SCRUM_API_URL;
  const handleLogin = () => {
    window.location.href = `${api_url}/auth/google?service=cvai`;
  };

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem("auth_token");
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      console.log('Retrieved token:', token);
      const response = await scrumAxios.get("/user/me");
      console.log('API response:', response.data);
      setUser(response.data);
    } catch (error) {
      console.error("Auth check failed:", error);
      localStorage.removeItem("auth_token");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    setUser(null);
    window.location.href = "/";
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("auth_token", token);
      window.history.replaceState({}, document.title, window.location.pathname);
      console.log('Extracted token from URL:', token);
    }

    checkAuth();
  }, []);

  const value = {
    user,
    loading,
    handleLogin,
    handleLogout,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
