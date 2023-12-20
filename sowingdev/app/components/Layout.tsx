'use client';

import Navbar from './Navigation';
 
export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}