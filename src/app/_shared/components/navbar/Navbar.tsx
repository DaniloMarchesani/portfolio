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
    <nav className={`${redressed.className} w-full flex justify-center items-center p-2 mt-4`}>
        <ul className='text-2xl flex gap-10'>
            <li><Link href={"#"}>Home</Link></li>
            <li><Link href={"#"}>Works</Link></li>
            <li><Link href={"#"}>Skills</Link></li>
            <li><Link href={"#"}>About me</Link></li>
            <li><Link href={"#"}>Contact</Link></li>
        </ul>
    </nav>
  )
}