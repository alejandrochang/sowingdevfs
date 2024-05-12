'use client';

import Navbar from './Navigation';

export default function Layout({ children }: { children: any }) {
  const style = { height: '100vh'};
  return (
    <>
      <Navbar />
      <main style={style}>{children}</main>
    </>
  );
}
