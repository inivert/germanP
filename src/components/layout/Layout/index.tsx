'use client';

import React, { Suspense } from 'react';
import Navbar from '../Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import Loading from '../Loading';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <Suspense fallback={<Loading />}>
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pt-20"
          >
            {children}
          </motion.main>
        </Suspense>
      </AnimatePresence>
    </div>
  );
};

export default Layout; 