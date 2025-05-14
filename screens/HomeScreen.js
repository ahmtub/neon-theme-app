import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import NeonButton from '../components/NeonButton';

export default function HomeScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={styles.title}>Hoşgeldin Dostum 👑</Text>
      <NeonButton
        title="🎨 Tema Rengini Değiştir"
        onPress={() => navigation.navigate('ThemePicker')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    marginBottom: 20
  }
});
