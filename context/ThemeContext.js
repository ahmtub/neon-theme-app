import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState('#00ffff'); // default neon blue
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const savedColor = await AsyncStorage.getItem('themeColor');
        if (savedColor) setPrimaryColor(savedColor);
      } catch (error) {
        console.log("Tema yüklenirken hata:", error);
      } finally {
        setIsThemeReady(true); // tema yüklendi
      }
    })();
  }, []);

  const updateThemeColor = async (color) => {
    try {
      setPrimaryColor(color);
      await AsyncStorage.setItem('themeColor', color);
    } catch (error) {
      console.log("Tema kaydedilirken hata:", error);
    }
  };

  const theme = {
    background: '#1e1e2f',
    primary: primaryColor,
    accent: '#ff00ff',
    text: '#ffffff',
    mutedText: '#aaaaaa',
    card: '#2e2e3e',
  };

  // tema yüklenene kadar beklet
  if (!isThemeReady) return null;

  return (
    <ThemeContext.Provider value={{ theme, updateThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
