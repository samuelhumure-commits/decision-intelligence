"use client";

import { useState } from "react";

export default function UploadForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const data = {
      url: e.target.url.value,
      description: e.target.desc.value
    };

    const res = await fetch("/api/analyze", {
      method: "POST",
      body: JSON.stringify(data)
    });

    const result = await res.json();
    alert(result.report);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <input
        name="url"
        placeholder="Website URL"
        className="w-full border p-2"
        required
      />
      <textarea
        name="desc"
        placeholder="Describe your product"
        className="w-full border p-2"
        required
      />
      <button
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {loading ? "Analyzing..." : "Generate Report"}
      </button>
    </form>
  );
        }
        
