"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { db, doc, setDoc } from "@/lib/firestore";
import { supabase } from "@/lib/supabase";

export default function AuthWatcher() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      try {
        if (user) {
          const profile = {
            uid: user.uid,
            name: user.displayName ?? null,
            email: user.email ?? null,
            phone: user.phoneNumber ?? null,
            photoURL: user.photoURL ?? null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          } as const;

          // Persist to Firestore
          await setDoc(doc(db, "users", user.uid), profile, { merge: true });

          // Attempt to persist to Supabase (table must exist)
          try {
            await supabase.from("users").upsert({
              id: user.uid,
              name: profile.name,
              email: profile.email,
              phone: profile.phone,
              photo_url: profile.photoURL,
              updated_at: profile.updatedAt,
              created_at: profile.createdAt,
            });
          } catch (_) {
            // ignore if table not ready
          }
        }
      } finally {
        setReady(true);
      }
    });
    return () => unsub();
  }, []);

  // Do not block UI
  return null;
}
