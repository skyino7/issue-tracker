'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { AiFillBug } from "react-icons/ai";
import classnames from 'classnames';

const NavBar = () => {

  const currentPath = usePathname();

  const links = [
    { label: 'Dashboard', href: '/'},
    { label: 'Issues', href: '/issues'},
  ]

  return (
    <nav className='flex mb-5 border-b-2 space-x-5 px-5 h-12 items-center'>
        <Link href="/"><AiFillBug /></Link>
        <ul className='flex space-x-5'>
            {links.map(link =>
              <Link
                key = {link.href}
                  className={classnames ({
                    'text-zinc-900': link.href === currentPath,
                    'text-zinc-500': link.href !== currentPath,
                    'hover:text-zinc-800 transition-colors': true
                  })}
                    href={link.href}>
                    {link.label}
              </Link>
            )}
        </ul>
    </nav>
  )
}

export default NavBar