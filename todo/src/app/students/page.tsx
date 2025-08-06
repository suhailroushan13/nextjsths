"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function StudentListPage() {
  type Student = {
    _id: string;
    name: string;
    email: string;
    phone: string;
    age: number;
    isAlive: boolean;
  };

  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("/api/users"); // Your GET route
      setStudents(res.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-2xl text-black font-bold">All Students</h1>
        <p className="text-black mb-4">Here is the list of all students.</p>

        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : (
          <ul className="text-black list-disc">
            {students.map((student) => (
              <li key={student._id}>
                {student.name} ({student.email})
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
