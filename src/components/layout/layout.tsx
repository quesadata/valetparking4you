import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { FloatingActions } from '../common/floating-actions';
import { CookieBanner } from '../common/cookie-banner';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      <ScrollRestoration />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <CookieBanner />
    </div>
  );
}
