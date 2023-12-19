'use client';

import Navbar from './Navigation';
import { SessionProvider } from 'next-auth/react';
 
export default function Layout({ children }: { children: any }) {
  return (
    <SessionProvider>
      <Navbar />
      <main>{children}</main>
    </SessionProvider>
  )
}