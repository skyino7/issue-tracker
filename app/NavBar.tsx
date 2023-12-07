import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex mb-5 border-b-2 space-x-5 px-5 h-12 items-center'>
        <Link href="/">Logo</Link>
        <ul className='flex space-x-5'>
            <li><Link href="/">Dashboard</Link></li>
            <li><Link href="/issues">Issues</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar