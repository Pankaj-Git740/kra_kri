import React from 'react';
import { View, Text, StyleSheet, ScrollView, useColorScheme } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Circle } from 'react-native-svg';

const HomeScreen = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const size = 140;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = 0.65;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#8B7FD9', '#A098E8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.headerGradient}
      >
        <Text style={styles.headerTitle}>streaks</Text>
        <Text style={styles.headerSubtitle}>
          Select profile below to view individual stats
        </Text>
        <View style={{ height: 50 }} />
      </LinearGradient>

      <View style={styles.avatarsAbsoluteContainer}>
        <View style={styles.avatarsRow}>
          <View style={styles.avatarContainer}>
            <View style={[styles.avatarCircle, { backgroundColor: '#87CEEB' }]}>
              <Text style={styles.avatarEmoji}>👧</Text>
            </View>
            <Text style={styles.name}>Susie</Text>
          </View>
          <View style={styles.avatarContainer}>
            <View style={[styles.avatarCircle, { backgroundColor: '#FFB6D9' }]}>
              <Text style={styles.avatarEmoji}>👦</Text>
            </View>
            <Text style={styles.name}>Max</Text>
          </View>
          <View style={styles.avatarContainer}>
            <View style={[styles.avatarCircle, { backgroundColor: '#FFDAB9' }]}>
              <Text style={styles.avatarEmoji}>👨</Text>
            </View>
            <Text style={styles.name}>Travis</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.cardRow}>
            <View style={styles.iconContainer}>
              <Text style={styles.emoji}>📚</Text>
            </View>
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>Daily Challenge</Text>
              <Text style={styles.cardContent}>Read 5 pages of Lola & the Troll</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardRow}>
            <View style={styles.iconContainer}>
              <Text style={styles.emoji}>🏆</Text>
            </View>
            <View style={styles.cardText}>
              <Text style={styles.streakText}>12 days streak</Text>
              <Text style={styles.streakSubtext}>Keep it up!</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.progressRow}>
            <View style={styles.circularProgressContainer}>
              <Svg width={size} height={size}>
                <Circle
                  stroke="#E0E0E0"
                  fill="none"
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  strokeWidth={strokeWidth}
                />
                <Circle
                  stroke="#3D5A6B"
                  fill="none"
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${circumference} ${circumference}`}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  rotation="-90"
                  origin={`${size / 2}, ${size / 2}`}
                />
              </Svg>
              <View style={styles.progressTextContainer}>
                <Text style={styles.progressNumber}>54</Text>
                <Text style={styles.progressLabel}>pages left</Text>
              </View>
            </View>

            <View style={styles.badgeContainer}>
              <Text style={styles.badgeLabel}>Next Badge</Text>
              <View style={styles.badgeCircle}>
                <Text style={styles.badgeEmoji}>⭐</Text>
              </View>
              <Text style={styles.badgeName}>Weekend Reader</Text>
            </View>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.emoji}>⏰</Text>
            <Text style={styles.statValue}>54 minutes</Text>
            <Text style={styles.statLabel}>total time</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Favorite Genre</Text>
            <Text style={styles.statValue}>Adventure</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerGradient: {
    paddingTop: 50,
    paddingBottom: 60,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'white',
    opacity: 0.95,
    marginBottom: 10,
  },
  avatarsAbsoluteContainer: {
    position: 'absolute',
    top: 205,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  avatarsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  avatarContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  avatarCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  avatarEmoji: {
    fontSize: 40,
  },
  name: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F0F0F0',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 40,
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1A1A1A',
  },
  cardContent: {
    fontSize: 15,
    color: '#666',
  },
  streakText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  streakSubtext: {
    fontSize: 15,
    color: '#666',
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circularProgressContainer: {
    position: 'relative',
    width: 140,
    height: 140,
  },
  progressTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressNumber: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#3D5A6B',
  },
  progressLabel: {
    fontSize: 14,
    color: '#666',
  },
  badgeContainer: {
    flex: 1,
    alignItems: 'center',
  },
  badgeLabel: {
    fontSize: 15,
    color: '#666',
    marginBottom: 10,
  },
  badgeCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#FFA500',
  },
  badgeEmoji: {
    fontSize: 30,
  },
  badgeName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2C5F4F',
    backgroundColor: '#A8D5BA',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    flex: 1,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  statLabel: {
    fontSize: 13,
    color: '#999',
    marginTop: 5,
  },
});

export default HomeScreen;
