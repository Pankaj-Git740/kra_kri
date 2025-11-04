import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RewardsScreen = () => {
  const badges = [
    { name: 'Weekend Reader', earned: true },
    { name: 'Bookworm', earned: true },
    { name: 'Speed Reader', earned: false },
    { name: 'Adventure Seeker', earned: false },
    { name: 'Night Owl', earned: false },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Badges</Text>
      
      <View style={styles.badgesContainer}>
        {badges.map((badge, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.badge, !badge.earned && styles.badgeLocked]}
          >
            <View style={styles.badgeIcon}>
              {badge.earned ? (
                <Text style={styles.badgeEmoji}>🏆</Text>
              ) : (
                <Text style={styles.badgeEmoji}>🔒</Text>
              )}
            </View>
            <Text style={styles.badgeName}>{badge.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Current Streak</Text>
        <Text style={styles.streakCount}>12 days</Text>
        <Text style={styles.streakMessage}>Keep it up!</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  badge: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  badgeLocked: {
    opacity: 0.6,
  },
  badgeIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  badgeEmoji: {
    fontSize: 24,
  },
  badgeName: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
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
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  streakCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginVertical: 5,
  },
  streakMessage: {
    fontSize: 14,
    color: '#666',
  },
});

export default RewardsScreen;