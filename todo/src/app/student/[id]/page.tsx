"use client";

import { useParams } from "next/navigation";

export default function StudentId() {
  const params = useParams();
  const id = params.id;

  return (
    <>
      <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <h1 className="text-black text-center">My Student ID is {id}</h1>
      </main>
    </>
  );
}
