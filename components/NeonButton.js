import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function NeonButton({ title, onPress }) {
  const { theme } = useContext(ThemeContext);

  return (
    <TouchableOpacity style={[styles.button, { shadowColor: theme.primary, borderColor: theme.primary }]} onPress={onPress}>
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
    backgroundColor: '#1e1e2f',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 16
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
