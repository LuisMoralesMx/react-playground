'use client';

import Link from 'next/link';

export default function Sidebar() {
  return (
    <>
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/Notes">Notes</Link>
          </li>
          <li>
            <Link href="/Signup">Sign Up</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
