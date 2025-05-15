import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function NeonButton({ title, onPress }) {
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          shadowColor: theme.primary,
          borderColor: theme.primary,
          backgroundColor: 'transparent',
        },
      ]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: theme.primary }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 12,
    elevation: 5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});
