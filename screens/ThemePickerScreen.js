import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import WheelColorPicker from 'react-native-wheel-color-picker';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemePickerScreen() {
  const { theme, updateThemeColor } = useContext(ThemeContext);
  const [color, setColor] = useState(theme.primary);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={styles.title}>🎨 Tema Rengini Seç</Text>

      <WheelColorPicker
        initialColor={color}
        onColorChangeComplete={(selectedColor) => {
          setColor(selectedColor);
          updateThemeColor(selectedColor);
          Alert.alert('Tema Kaydedildi', `Yeni renk: ${selectedColor}`);
        }}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20
  }
});
