import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.logoText}>TrendyTrailer</Text>
        </View>

        <View style={styles.hero}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>LIFETIME MEMBERSHIP</Text>
          </View>
          
          <Text style={styles.heroTitle}>
            Buy Once.{'\n'}
            <Text style={styles.heroAccent}>Own Forever.</Text>
          </Text>
          
          <Text style={styles.heroSubtitle}>
            The must-have tool for every RV owner. Unlimited repairs, 
            part IDs, and expert guidance — forever. No monthly bills.
          </Text>

          <View style={styles.priceBox}>
            <Text style={styles.priceLabel}>One-Time Payment</Text>
            <Text style={styles.price}>$149</Text>
          </View>

          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaText}>Get Lifetime Access</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What's Included Forever</Text>
          
          <View style={styles.includesGrid}>
            <View style={styles.includeCard}>
              <Text style={styles.includeIcon}>🔧</Text>
              <Text style={styles.includeTitle}>Unlimited Repairs</Text>
            </View>
            <View style={styles.includeCard}>
              <Text style={styles.includeIcon}>📸</Text>
              <Text style={styles.includeTitle}>Part ID</Text>
            </View>
            <View style={styles.includeCard}>
              <Text style={styles.includeIcon}>⚡</Text>
              <Text style={styles.includeTitle}>Electrical</Text>
            </View>
            <View style={styles.includeCard}>
              <Text style={styles.includeIcon}>🚿</Text>
              <Text style={styles.includeTitle}>Plumbing</Text>
            </View>
            <View style={styles.includeCard}>
              <Text style={styles.includeIcon}>🔥</Text>
              <Text style={styles.includeTitle}>Propane</Text>
            </View>
            <View style={styles.includeCard}>
              <Text style={styles.includeIcon}>🛠️</Text>
              <Text style={styles.includeTitle}>Maintenance</Text>
            </View>
          </View>
        </View>

        <View style={styles.ctaSection}>
          <Text style={styles.ctaSectionTitle}>Your RV's Best Investment</Text>
          <Text style={styles.ctaSectionSubtitle}>One payment. Lifetime value.</Text>
          <TouchableOpacity style={styles.ctaButtonLarge}>
            <Text style={styles.ctaButtonLargeText}>Get Lifetime Access</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#faf8f5' },
  header: { paddingHorizontal: 20, paddingVertical: 16 },
  logoText: { fontSize: 18, fontWeight: '800', color: '#1f2937' },
  hero: { paddingHorizontal: 20, paddingBottom: 40, alignItems: 'center' },
  badge: { backgroundColor: '#1f2937', borderRadius: 20, paddingHorizontal: 16, paddingVertical: 8, marginBottom: 20 },
  badgeText: { color: '#fff', fontWeight: '700', fontSize: 12 },
  heroTitle: { fontSize: 38, fontWeight: '800', color: '#1f2937', textAlign: 'center', lineHeight: 44, marginBottom: 16 },
  heroAccent: { color: '#ea580c' },
  heroSubtitle: { fontSize: 16, color: '#6b7280', textAlign: 'center', lineHeight: 24, marginBottom: 24 },
  priceBox: { backgroundColor: '#fff7ed', borderWidth: 2, borderColor: '#fdba74', borderRadius: 16, padding: 20, alignItems: 'center', marginBottom: 20, width: '100%' },
  priceLabel: { fontSize: 12, fontWeight: '600', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 1 },
  price: { fontSize: 48, fontWeight: '800', color: '#ea580c' },
  ctaButton: { backgroundColor: '#ea580c', paddingHorizontal: 28, paddingVertical: 16, borderRadius: 16, marginBottom: 20 },
  ctaText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  section: { paddingHorizontal: 20, paddingVertical: 40, backgroundColor: '#fff' },
  sectionTitle: { fontSize: 26, fontWeight: '800', color: '#1f2937', textAlign: 'center', marginBottom: 24 },
  includesGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 12 },
  includeCard: { backgroundColor: '#faf8f5', borderRadius: 12, padding: 16, width: '30%', alignItems: 'center', minWidth: 100 },
  includeIcon: { fontSize: 24, marginBottom: 8 },
  includeTitle: { fontSize: 11, fontWeight: '700', color: '#1f2937', textAlign: 'center' },
  ctaSection: { backgroundColor: '#1f2937', margin: 20, padding: 32, borderRadius: 20, alignItems: 'center' },
  ctaSectionTitle: { fontSize: 24, fontWeight: '800', color: '#fff', textAlign: 'center', marginBottom: 12 },
  ctaSectionSubtitle: { fontSize: 14, color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: 24 },
  ctaButtonLarge: { backgroundColor: '#ea580c', paddingHorizontal: 32, paddingVertical: 18, borderRadius: 14 },
  ctaButtonLargeText: { color: '#fff', fontWeight: '700', fontSize: 18 },
});