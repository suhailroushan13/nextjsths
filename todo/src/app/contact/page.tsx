"use client";

import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  const goToStudent = () => {
    router.push("/students");
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-green-600">Contact Us</h1>
      <p className="mt-4 text-gray-700">
        Feel free to reach out at contact@example.com.
      </p>
      <button
        onClick={goToStudent}
        className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        Navigate to Students
      </button>
    </main>
  );
}
