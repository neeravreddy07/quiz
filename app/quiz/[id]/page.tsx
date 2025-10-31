import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: { id: string } };

export default function QuizPlayPage({ params }: Props) {
  const { id } = params;
  if (!id) notFound();
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold">Quiz</h1>
      <p className="mt-2 text-gray-600">Quiz ID: {id}</p>
      <div className="mt-6 rounded border p-4">
        <p className="text-sm text-gray-600">Password-protected quizzes will prompt here.</p>
        <p className="mt-2">Timer appears after start.</p>
        <div className="mt-4 flex gap-3">
          <button className="rounded bg-black px-4 py-2 text-white">Start</button>
          <Link href="/dashboard" className="rounded border px-4 py-2">Back</Link>
        </div>
      </div>
    </main>
  );
}
