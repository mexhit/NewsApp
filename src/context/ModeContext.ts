import React from 'react';

export const ModeContext = React.createContext<{
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}>({theme: 'light', toggleTheme: () => {}});

export const ModeProvider = ModeContext.Provider;
