import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav className='bg-gray-100 p-4'>
      <div className=' mx-w-screen-lg container mx-auto flex justify-center'>
        <ul className='flex space-x-6 text-gray-700 font-medium pr-8'>
        <li>
            <Link href="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link href="/Shops" className="hover:text-blue-600">Shops</Link>
          </li>
          <li>
            <Link href="/About" className="hover:text-blue-600">About</Link>
          </li>
          <li>
            <Link href="/Orders" className="hover:text-blue-600">Orders</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
