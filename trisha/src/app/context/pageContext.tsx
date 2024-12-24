/** @format */
'use client';
import React, { createContext, useContext, useState } from 'react';
import { GlobalContext } from '../types/GlobalContext';

const PageContext = createContext<GlobalContext | undefined>(undefined);

export const PageContextAPI = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  return (
    <PageContext.Provider value={{ isScrolled, setIsScrolled }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error('usePageContext must be used within a GlobalContext');
  }
  return context;
};
