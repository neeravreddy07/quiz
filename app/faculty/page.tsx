export default function FacultyPage() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-2xl font-bold">Faculty Dashboard</h1>
      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded border p-4">
          <h2 className="font-semibold">Approve Students</h2>
          <p className="mt-1 text-gray-600">Pending approvals will appear here.</p>
        </div>
        <div className="rounded border p-4">
          <h2 className="font-semibold">Create Test Session</h2>
          <p className="mt-1 text-gray-600">Share link + password to students.</p>
        </div>
      </section>
    </main>
  );
}
