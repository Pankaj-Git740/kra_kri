import React from 'react';
import { View, Text, ScrollView, useColorScheme } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Circle } from 'react-native-svg';
import './global.css';

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
    <View className="flex-1 bg-gray-100 dark:bg-gray-900">
      {/* Purple Gradient Header */}
      <LinearGradient
        colors={['#8B7FD9', '#A098E8']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="pt-12 pb-16 px-5 rounded-b-3xl"
      >
        <Text className="text-white text-4xl font-bold mb-1">streaks</Text>
        <Text className="text-white text-sm opacity-95 mb-6">
          Select profile below to view individual stats
        </Text>
        <View className="h-12" />
      </LinearGradient>

      {/* Avatars - Overlapping Header and Content */}
      <View className="absolute top-32 left-0 right-0 z-10 flex-row justify-center">
        <View className="items-center mx-5">
          <View className="w-20 h-20 rounded-full bg-blue-300 border-4 border-white justify-center items-center shadow-lg">
            <Text className="text-4xl">👧</Text>
          </View>
          <Text className="mt-2 text-base font-semibold text-gray-800 dark:text-gray-100">
            Susie
          </Text>
        </View>
        <View className="items-center mx-5">
          <View className="w-20 h-20 rounded-full bg-pink-300 border-4 border-white justify-center items-center shadow-lg">
            <Text className="text-4xl">👦</Text>
          </View>
          <Text className="mt-2 text-base font-semibold text-gray-800 dark:text-gray-100">
            Max
          </Text>
        </View>
        <View className="items-center mx-5">
          <View className="w-20 h-20 rounded-full bg-orange-300 border-4 border-white justify-center items-center shadow-lg">
            <Text className="text-4xl">👨</Text>
          </View>
          <Text className="mt-2 text-base font-semibold text-gray-800 dark:text-gray-100">
            Travis
          </Text>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView
        className="flex-1 px-5 pt-16"
        showsVerticalScrollIndicator={false}
      >
        {/* Daily Challenge Card */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-5 mb-4 shadow-sm">
          <View className="flex-row items-center">
            <View className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 justify-center items-center mr-4">
              <Text className="text-4xl">📚</Text>
            </View>
            <View className="flex-1">
              <Text className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                Daily Challenge
              </Text>
              <Text className="text-sm text-gray-600 dark:text-gray-400">
                Read 5 pages of Lola & the Troll
              </Text>
            </View>
          </View>
        </View>

        {/* Streak Card */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-5 mb-4 shadow-sm">
          <View className="flex-row items-center">
            <View className="w-24 h-24 rounded-full justify-center items-center mr-4">
              <Text className="text-5xl">🏆</Text>
            </View>
            <View className="flex-1">
              <Text className="text-2xl font-bold text-green-500 mb-1">
                12 days streak
              </Text>
              <Text className="text-sm text-gray-600 dark:text-gray-400">
                Keep it up!
              </Text>
            </View>
          </View>
        </View>

        {/* Progress Card */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-5 mb-4 shadow-sm">
          <View className="flex-row items-center justify-between">
            {/* Circular Progress */}
            <View className="relative">
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
              <View className="absolute top-0 left-0 right-0 bottom-0 justify-center items-center">
                <Text className="text-5xl font-bold text-gray-800 dark:text-white">
                  54
                </Text>
                <Text className="text-sm text-gray-600 dark:text-gray-400">
                  pages left
                </Text>
                <Text className="text-xs text-gray-500 dark:text-gray-500 text-center mt-1">
                  of The Impatient{'\n'}Dinosaur
                </Text>
              </View>
            </View>

            {/* Next Badge */}
            <View className="flex-1 items-center">
              <Text className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Next Badge
              </Text>
              <View className="w-16 h-16 rounded-full bg-yellow-400 border-4 border-yellow-500 justify-center items-center mb-2">
                <Text className="text-3xl">⭐</Text>
              </View>
              <View className="bg-badge px-4 py-2 rounded-full">
                <Text className="text-xs font-semibold text-white dark:text-gray-900">
                  Weekend Reader
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Stats Row */}
        <View className="flex-row justify-between mb-4">
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-5 flex-1 mr-2 shadow-sm items-center">
            <Text className="text-4xl mb-2">⏰</Text>
            <Text className="text-lg font-bold text-gray-900 dark:text-white">
              54 minutes
            </Text>
            <Text className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              total time
            </Text>
          </View>
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-5 flex-1 ml-2 shadow-sm items-center">
            <Text className="text-xs text-gray-600 dark:text-gray-400 mb-2">
              Favorite Genre
            </Text>
            <Text className="text-lg font-bold text-gray-900 dark:text-white">
              Adventure
            </Text>
          </View>
        </View>

        {/* Reading Chart */}
        <View className="bg-white dark:bg-gray-800 rounded-2xl p-5 mb-8 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Pages Read This Week
          </Text>
          <View className="h-40">
            <View className="flex-1 flex-row items-end justify-around px-2">
              <View
                className="w-8 bg-purple-300 dark:bg-purple-600 rounded-t-lg"
                style={{ height: '30%' }}
              />
              <View
                className="w-8 bg-purple-300 dark:bg-purple-600 rounded-t-lg"
                style={{ height: '50%' }}
              />
              <View
                className="w-8 bg-purple-300 dark:bg-purple-600 rounded-t-lg"
                style={{ height: '40%' }}
              />
              <View
                className="w-8 bg-purple-300 dark:bg-purple-600 rounded-t-lg"
                style={{ height: '70%' }}
              />
              <View
                className="w-8 bg-purple-300 dark:bg-purple-600 rounded-t-lg"
                style={{ height: '45%' }}
              />
              <View
                className="w-8 bg-purple-300 dark:bg-purple-600 rounded-t-lg"
                style={{ height: '60%' }}
              />
              <View
                className="w-8 bg-purple-300 dark:bg-purple-600 rounded-t-lg"
                style={{ height: '35%' }}
              />
            </View>
          </View>
          <View className="flex-row justify-around mt-3">
            {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri'].map((day, i) => (
              <Text
                key={i}
                className="text-xs text-gray-500 dark:text-gray-400"
              >
                {day}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
