import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WheelColorPicker from 'react-native-wheel-color-picker';
import { ThemeContext } from '../context/ThemeContext';
import NeonButton from '../components/NeonButton';

export default function ThemePickerScreen() {
  const { theme, updateThemeColor } = useContext(ThemeContext);
  const [color, setColor] = useState(theme.primary);

  useEffect(() => {
    setColor(theme.primary);
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

      <NeonButton title="KAYDET" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 20,
  },
});
