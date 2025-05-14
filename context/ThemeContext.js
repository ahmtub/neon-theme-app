import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState('#00ffff'); // varsayılan neon mavi

  useEffect(() => {
    (async () => {
      const savedColor = await AsyncStorage.getItem('themeColor');
      if (savedColor) setPrimaryColor(savedColor);
    })();
  }, []);

  const updateThemeColor = async (color) => {
    setPrimaryColor(color);
    await AsyncStorage.setItem('themeColor', color);
  };

  const theme = {
    background: '#1e1e2f',
    primary: primaryColor,
    accent: '#ff00ff',
    text: '#ffffff',
    mutedText: '#aaaaaa',
    card: '#2e2e3e',
  };

  return (
    <ThemeContext.Provider value={{ theme, updateThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
