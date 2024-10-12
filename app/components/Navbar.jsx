import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 py-4 text-white">
        <div className='flex justify-between items-center container mx-auto p-4'>
            <div className='font-bold text-3xl'>
                Products
            </div>
            <div>
                <ul className='flex gap-5'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/about'}>About</Link></li>
                    <li><Link href={'/contact'}>Contact</Link></li>
                </ul>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
