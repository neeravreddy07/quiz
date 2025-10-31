export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-gray-600">Welcome to the Personalized Quiz Generator.</p>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <a href="/quiz/new" className="rounded-lg border p-6 hover:bg-gray-50">
          <h2 className="text-xl font-semibold">Create Quiz</h2>
          <p className="mt-1 text-gray-600">Generate from topic or upload notes/PDF.</p>
        </a>
        <a href="/faculty" className="rounded-lg border p-6 hover:bg-gray-50">
          <h2 className="text-xl font-semibold">Faculty Dashboard</h2>
          <p className="mt-1 text-gray-600">Approve students and create tests.</p>
        </a>
      </section>
    </main>
  );
}
