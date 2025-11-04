import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const ReadingFeelScreen = () => {
  const [narration, setNarration] = useState(true);
  const [wordHighlighting, setWordHighlighting] = useState(false);
  const [soundEffects, setSoundEffects] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.switchRow}>
          <Text style={styles.label}>Narration</Text>
          <Switch 
            value={narration} 
            onValueChange={setNarration} 
            trackColor={{ false: '#767577', true: '#4CAF50' }}
          />
        </View>
        
        <View style={styles.switchRow}>
          <Text style={styles.label}>Word Highlighting</Text>
          <Switch 
            value={wordHighlighting} 
            onValueChange={setWordHighlighting} 
            trackColor={{ false: '#767577', true: '#4CAF50' }}
          />
        </View>
        
        <View style={styles.switchRow}>
          <Text style={styles.label}>Sound Effects</Text>
          <Switch 
            value={soundEffects} 
            onValueChange={setSoundEffects} 
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
});

export default ReadingFeelScreen;
