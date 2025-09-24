import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-red-500 text-white shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="font-bold text-lg">Marching Competition</div>
        <div className="space-x-4">
          <a href="#hero" className="hover:underline">Home</a>
          <a href="#rules" className="hover:underline">Rules</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#evaluation" className="hover:underline">Evaluation</a>
        </div>
      </div>
    </nav>
  );
}