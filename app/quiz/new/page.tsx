"use client";
import { useState } from "react";

export default function NewQuizPage() {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [mode, setMode] = useState<"beginner" | "advanced">("beginner");
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy");
  const [timer, setTimer] = useState("1800");
  const [file, setFile] = useState<File | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Quiz generation stub. Connect to /api/ai/generate-quiz next.");
  }

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold">Create a Quiz</h1>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <div>
          <label className="block text-sm font-medium">Subject</label>
          <input value={subject} onChange={(e)=>setSubject(e.target.value)} className="mt-1 w-full rounded border p-2" placeholder="Physics" />
        </div>
        <div>
          <label className="block text-sm font-medium">Topic</label>
          <input value={topic} onChange={(e)=>setTopic(e.target.value)} className="mt-1 w-full rounded border p-2" placeholder="Newton's Laws" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded border p-3">
            <label className="block text-sm font-medium">Mode</label>
            <select value={mode} onChange={(e)=>setMode(e.target.value as any)} className="mt-1 w-full rounded border p-2">
              <option value="beginner">Beginner (choose difficulty)</option>
              <option value="advanced">Advanced (mix of all)</option>
            </select>
          </div>
          {mode === "beginner" && (
            <div className="rounded border p-3">
              <label className="block text-sm font-medium">Difficulty</label>
              <select value={difficulty} onChange={(e)=>setDifficulty(e.target.value as any)} className="mt-1 w-full rounded border p-2">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          )}
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded border p-3">
            <label className="block text-sm font-medium">Timer</label>
            <select value={timer} onChange={(e)=>setTimer(e.target.value)} className="mt-1 w-full rounded border p-2">
              <option value="600">10 minutes</option>
              <option value="1800">30 minutes</option>
              <option value="3600">1 hour</option>
              <option value="86400">24 hours</option>
            </select>
          </div>
          <div className="rounded border p-3">
            <label className="block text-sm font-medium">Upload Notes/PDF</label>
            <input type="file" accept=".pdf,.txt,.md,.doc,.docx" onChange={(e)=>setFile(e.target.files?.[0] ?? null)} className="mt-1 w-full" />
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Password (optional)</label>
            <input className="mt-1 w-full rounded border p-2" placeholder="Leave blank for none" />
          </div>
          <div>
            <label className="block text-sm font-medium">Share with friends</label>
            <input className="mt-1 w-full rounded border p-2" placeholder="Enabled after creation" disabled />
          </div>
        </div>
        <div className="flex gap-3">
          <button className="rounded bg-black px-4 py-2 text-white">Generate Quiz</button>
          <a href="/dashboard" className="rounded border px-4 py-2">Cancel</a>
        </div>
      </form>
    </main>
  );
}
