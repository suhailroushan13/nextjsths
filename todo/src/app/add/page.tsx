"use client";

import React, { useState } from "react";
import axios from "axios";

export default function AddUserPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    isAlive: true,
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await axios.post("/api/users", form);
      setMsg("✅ User added Successfully");
      setForm({ name: "", email: "", phone: "", age: "", isAlive: true }); // Reset form
    } catch (error: any) {
      console.error(error);
      setMsg("❌ Failed to add user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Add User</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded text-black text-xl"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded text-black text-xl"
        />
        <input
          type="phone"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded text-black text-xl"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          required
          className="border px-3 py-2 rounded text-black text-xl"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add User"}
        </button>
        {msg && <p className="text-sm text-center text-gray-700">{msg}</p>}
      </form>
    </main>
  );
}
