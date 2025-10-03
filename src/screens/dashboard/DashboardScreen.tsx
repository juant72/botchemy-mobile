import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../../constants/colors';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <Text style={styles.subtitle}>Welcome back!</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Total P&L</Text>
          <Text style={[styles.statValue, { color: Colors.success }]}>
            +$12,345.67
          </Text>
          <Text style={styles.statChange}>+15.2% (24h)</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Active Bots</Text>
          <Text style={styles.statValue}>8</Text>
          <Text style={styles.statChange}>3 paused</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Win Rate</Text>
          <Text style={styles.statValue}>68.4%</Text>
          <Text style={styles.statChange}>+2.1% vs avg</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Total Trades</Text>
          <Text style={styles.statValue}>1,247</Text>
          <Text style={styles.statChange}>Last 30 days</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.text,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    gap: 10,
  },
  statCard: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 16,
    width: '48%',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 4,
  },
  statChange: {
    fontSize: 12,
    color: Colors.textMuted,
  },
});
