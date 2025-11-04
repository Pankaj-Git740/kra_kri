import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HelpScreen = ({ navigation }) => {
  const steps = [
    { 
      title: 'Select a story', 
      description: 'Choose from our library of books',
      icon: '📚'
    },
    { 
      title: 'Tap Read', 
      description: 'Start reading your selected book',
      icon: '👆'
    },
    { 
      title: 'Listen to words', 
      description: 'Tap on words to hear pronunciation',
      icon: '🔊'
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to use Krik Krak</Text>
      
      {steps.map((step, index) => (
        <View key={index} style={styles.stepCard}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>{index + 1}</Text>
          </View>
          <View style={styles.stepContent}>
            <View style={styles.stepHeader}>
              <Text style={styles.stepIcon}>{step.icon}</Text>
              <Text style={styles.stepTitle}>{step.title}</Text>
            </View>
            <Text style={styles.stepDescription}>{step.description}</Text>
          </View>
        </View>
      ))}
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Feedback')}
      >
        <Text style={styles.buttonText}>What happened?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  stepCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  stepNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4A6572',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  stepNumberText: {
    color: 'white',
    fontWeight: 'bold',
  },
  stepContent: {
    flex: 1,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  stepIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepDescription: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#4A6572',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HelpScreen;