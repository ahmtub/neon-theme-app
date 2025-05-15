import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import WheelColorPicker from 'react-native-wheel-color-picker';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemePickerScreen() {
  const { theme, updateThemeColor } = useContext(ThemeContext);
  const [color, setColor] = useState(theme.primary);

  useEffect(() => {
    setColor(theme.primary); // sayfa açıldığında mevcut renk gelsin
  }, [theme.primary]);

  const handleSave = () => {
    updateThemeColor(color);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={styles.title}>🎨 Tema Rengini Seç</Text>

      <WheelColorPicker
        initialColor={color}
        onColorChangeComplete={(selectedColor) => {
          setColor(selectedColor);
        }}
        style={{ width: 300, height: 300 }}
      />

      <View style={styles.buttonContainer}>
        <Button title="KAYDET" onPress={handleSave} color={theme.primary} />
      </View>
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
    color: '#ffffff',
    marginBottom: 20
  },
  buttonContainer: {
    marginTop: 30,
    width: 200
  }
});
