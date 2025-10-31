import Link from "next/link";

type Props = { params: { attemptId: string } };

export default function ResultsPage({ params }: Props) {
  const { attemptId } = params;
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-2xl font-bold">Results</h1>
      <p className="mt-2 text-gray-600">Attempt: {attemptId}</p>
      <section className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded border p-4">
          <p className="text-sm text-gray-500">Score</p>
          <p className="text-2xl font-semibold">—</p>
        </div>
        <div className="rounded border p-4">
          <p className="text-sm text-gray-500">Correct</p>
          <p className="text-2xl font-semibold">—</p>
        </div>
        <div className="rounded border p-4">
          <p className="text-sm text-gray-500">Time</p>
          <p className="text-2xl font-semibold">—</p>
        </div>
      </section>
      <section className="mt-8 rounded border p-4">
        <h2 className="text-lg font-semibold">Analysis</h2>
        <p className="mt-2 text-gray-600">AI explanations and weak topics will appear here.</p>
      </section>
      <div className="mt-6">
        <Link href="/dashboard" className="rounded border px-4 py-2">Back to Dashboard</Link>
      </div>
    </main>
  );
}
