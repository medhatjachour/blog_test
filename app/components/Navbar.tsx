import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="py-4 px-6 flex justify-between items-center w-full">
        <div>Blog Here</div>
        <div>
            <ul className='flex items-start gap-3 md:block '>
                <Link className='hover:text-gray-400 active:text-gray-400' href={'/'}>Home</Link>
                <Link className='hover:text-gray-400 active:text-gray-400' href={'/about'}>About</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar