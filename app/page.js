import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col bg-yellow-100 min-h-screen">
      <header className="bg-black text-white px-6 py-4 flex justify-end items-center">
        <div className="space-x-10 text-sm tracking-widest">
          <Link href="/" className="text-pink-200 transition-colors hover:font-bold">AI Skin Analysis</Link>
          <Link href="/skin-analysis" className="text-pink-200 hover:font-bold">Try</Link>
          <Link href="/daily-upload" className="text-pink-200 hover:font-bold">Skin History</Link>
          <Link href="/skin-care-routine" className="text-pink-200 hover:font-bold">Skin Care Routine</Link>
          <Link href="/contact" className="text-pink-200 hover:font-bold">Contact Us</Link>
          <Link href="/login" className="text-pink-200 hover:font-bold">Login</Link>
        </div>
      </header>
    </div>
  );
}