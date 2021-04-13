import React, {Dispatch} from 'react';

export const LanguageContext = React.createContext<[string, Dispatch<string>]>([
  'en',
  () => {},
]);

export const LanguageProvider = LanguageContext.Provider;
