import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AccessibilityScreen = () => {
  const [textSize, setTextSize] = useState('medium');
  const [highContrast, setHighContrast] = useState(false);
  const [voiceOver, setVoiceOver] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Text Size</Text>
          <Picker
            selectedValue={textSize}
            style={styles.picker}
            onValueChange={(itemValue) => setTextSize(itemValue)}
          >
            <Picker.Item label="Small" value="small" />
            <Picker.Item label="Medium" value="medium" />
            <Picker.Item label="Large" value="large" />
            <Picker.Item label="Extra Large" value="xlarge" />
          </Picker>
        </View>
        
        <View style={styles.switchRow}>
          <Text style={styles.label}>High Contrast</Text>
          <Switch 
            value={highContrast} 
            onValueChange={setHighContrast} 
            trackColor={{ false: '#767577', true: '#4CAF50' }}
          />
        </View>
        
        <View style={styles.switchRow}>
          <Text style={styles.label}>Voice Over</Text>
          <Switch 
            value={voiceOver} 
            onValueChange={setVoiceOver} 
            trackColor={{ false: '#767577', true: '#4CAF50' }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    fontSize: 16,
  },
  picker: {
    width: 150,
  },
});

export default AccessibilityScreen;