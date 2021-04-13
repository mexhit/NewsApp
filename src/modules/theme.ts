import {useContext} from 'react';
import {ModeContext} from '../context/ModeContext';

export const useTheme = () => {
  const {theme, toggleTheme} = useContext(ModeContext);

  return {
    textStyle: theme === 'light' ? {color: 'black'} : {color: 'white'},
    backgroundStyle:
      theme === 'light'
        ? {backgroundColor: 'white'}
        : {backgroundColor: 'rgb(1,1,1)'},
    cardStyle:
      theme === 'light'
        ? {backgroundColor: 'white'}
        : {backgroundColor: 'rgb(18, 18, 18)'},
    theme,
    toggleTheme,
  };
};

export default useTheme;
