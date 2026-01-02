export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-10">
      <h1 className="text-4xl font-bold">
        Your users hesitate before buying.
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        AI-powered reports explaining why users leave or hesitate — in plain English.
      </p>
      <a
        href="/upload"
        className="inline-block mt-6 px-6 py-3 bg-black text-white rounded"
      >
        Get My Decision Report
      </a>
    </main>
  );
}
