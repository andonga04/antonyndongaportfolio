'use client'

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import React from 'react'
import { RiHomeOfficeFill } from "react-icons/ri";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FcLibrary } from "react-icons/fc";
import { LiaBlogSolid } from "react-icons/lia";
import {
  Collapsible,
} from "@/components/ui/collapsible"
import { Toggle } from "@/components/ui/toggle"
import {  H2 } from "@/components/ui/typography"
// import { SignInButton, UserButton } from '@clerk/nextjs';

const navmenu = [
  {
    name: 'Page',
    href: '/',
    icon: RiHomeOfficeFill
  },
  {
    name: 'Library',
    href: '/library',
    icon: FcLibrary
  },
  {
    name: 'Blogs',
    href: 'http://localhost:3001',
    icon: LiaBlogSolid
  },
];

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li className='flex items-center justify-center gap-2'>
      <blockquote>
      <Link href={href} className="flex items-center gap-2 font-medium text-gray-900" target="_blank" rel="noopener noreferrer">{children}</Link>
      </blockquote>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav style={{ boxShadow: 'none' }} className="border-0 sticky top-0 z-50 bg-white/85 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between p-5">
        <H2 className="text-lg font-bold border-black">
          <Link href="/">
          Antony Ndonga
          </Link>
          
        </H2>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {navmenu.map(({ name, icon: Icon, href }) => (
            <NavLink key={name} href={href}>
              {Icon && <Icon className="h-5 w-5" />}
              {name}
            </NavLink>
          ))}
        </ul>

        <Toggle
          variant="outline"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <AiOutlineClose strokeWidth={2} className="h-6 w-6" />
          ) : (
            <AiOutlineMenu strokeWidth={2} className="h-6 w-6" />
          )}
        </Toggle>
      </div>
      {open && (
        
  <Collapsible open={open}>
    <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
      <ul className="flex flex-col gap-4 text-left">
        {navmenu.map(({ name, icon: Icon, href }) => (
          <NavLink key={name} href={href}>
            {Icon && <Icon className="h-5 w-5" />}
            {name}
          </NavLink>
        ))}
      </ul>
    </div>

  </Collapsible>
)}
    </nav>
  );
}

export default Navbar;