import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: "AIzaSyC0xtPVCNCLQvh2O_Ddp2CQAm8Xam8m8N0",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "quiz-generator-55050.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: "quiz-generator-55050",
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "quiz-generator-55050.firebasestorage.app",
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "966883214849",
    NEXT_PUBLIC_FIREBASE_APP_ID: "1:966883214849:web:e0e52a8c0bc6a02a23a200",
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: "G-J8LP2MTJYJ",
  NEXT_PUBLIC_SUPABASE_URL: https://ybkstkdkhscmxvhigels.supabase.co,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlia3N0a2RraHNjbXh2aGlnZWxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5MjQ2MjgsImV4cCI6MjA3NzUwMDYyOH0.c7hIfmflJYUhwln3KpUr1QLlQgl8tXuQBezP3rLWLjc
  },
};

export default nextConfig;
