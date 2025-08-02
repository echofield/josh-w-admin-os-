'use client';

export default function Background() {
  return (
    <div className="fixed inset-0 opacity-20 z-0 pointer-events-none">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
      <div className="absolute top-0 -right-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
    </div>
  );
}