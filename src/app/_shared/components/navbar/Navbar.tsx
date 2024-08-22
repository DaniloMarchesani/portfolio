import Link from 'next/link'
import React, { FC } from 'react'
import { Redressed } from 'next/font/google'

const redressed = Redressed({
  weight: ["400"],
  subsets: ['latin'],
  style: 'normal',
  display: 'swap'
});

export const Navbar: FC = () => {

  return (
    <nav className={`${redressed.className} bg-white/90 z-20 w-full flex justify-center items-center p-2 mt-4 fixed top-0 left-0`}>
        <ul className='text-2xl flex gap-10'>
            <li><Link href={"#home"}>Home</Link></li>
            <li><Link href={"#works"}>Works</Link></li>
            <li><Link href={"#skills"}>Skills</Link></li>
            <li><Link href={"#about"}>About me</Link></li>
            <li><Link href={"#contact"}>Contact</Link></li>
        </ul>
    </nav>
  )
}