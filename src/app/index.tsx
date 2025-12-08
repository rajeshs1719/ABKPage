
import { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { Globe } from "@/components/ui/globe";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");
const GLOBE_SIZE = Math.min(SCREEN_WIDTH * 0.38, 240);
const GRID_GAP = 10;
const GRID_PADDING = 16;

// Bento grid items - 6 cards around the globe
const BENTO_ITEMS = [
  { id: 1, title: "Innovation", description: "Pushing boundaries" },
  { id: 2, title: "Global Reach", description: "150+ countries" },
  { id: 3, title: "Technology", description: "Cutting-edge solutions" },
  { id: 4, title: "Community", description: "Growing together" },
  { id: 5, title: "Security", description: "Always protected" },
  { id: 6, title: "Growth", description: "Scaling heights" },
];

export default function Index() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [currentSection, setCurrentSection] = useState(0);

  // Phase 1: Globe rises from bottom (0 -> SCREEN_HEIGHT)
  // Phase 2: Bento grid fades in (SCREEN_HEIGHT -> SCREEN_HEIGHT * 1.5)
  
  const globeTranslateY = scrollY.interpolate({
    inputRange: [0, SCREEN_HEIGHT],
    outputRange: [SCREEN_HEIGHT * 0.55, 0],
    extrapolate: "clamp",
  });

  const globeScale = scrollY.interpolate({
    inputRange: [0, SCREEN_HEIGHT * 0.5, SCREEN_HEIGHT],
    outputRange: [1.8, 1.3, 1],
    extrapolate: "clamp",
  });

  // Bento grid animations - fade in after globe is centered
  const bentoOpacity = scrollY.interpolate({
    inputRange: [SCREEN_HEIGHT * 0.8, SCREEN_HEIGHT * 1.2],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: true,
      listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const y = event.nativeEvent.contentOffset.y;
        if (y < SCREEN_HEIGHT * 0.5) {
          setCurrentSection(0);
        } else if (y < SCREEN_HEIGHT * 1.3) {
          setCurrentSection(1);
        } else {
          setCurrentSection(2);
        }
      },
    }
  );

  // Calculate card dimensions
  const gridWidth = SCREEN_WIDTH - GRID_PADDING * 2;
  const cardWidth = (gridWidth - GRID_GAP * 2) / 3;
  const cardHeight = (GLOBE_SIZE + GRID_GAP) / 2 + 40;

  return (
    <View style={styles.container}>
      {/* Fixed Globe and Bento Grid */}
      <Animated.View
        style={[
          styles.fixedContainer,
          {
            transform: [{ translateY: globeTranslateY }],
          },
        ]}
      >
        {/* Bento Grid Container */}
        <Animated.View
          style={[
            styles.bentoWrapper,
            {
              opacity: bentoOpacity,
              width: gridWidth,
            },
          ]}
        >
          {/* Top Row */}
          <View style={[styles.row, { marginBottom: GRID_GAP }]}>
            {/* Top Left Card */}
            <View
              style={[
                styles.card,
                {
                  width: cardWidth,
                  height: cardHeight,
                  borderBottomRightRadius: GLOBE_SIZE / 2 + 8,
                },
              ]}
            >
             
 <Text style={styles.cardTitle}>{BENTO_ITEMS[0].title}</Text>
              <Text style={styles.cardDesc}>{BENTO_ITEMS[0].description}</Text>
            </View>

            {/* Top Center Card */}
            <View
              style={[
                styles.card,
                {
                  width: cardWidth,
                  height: cardHeight,
                  borderBottomLeftRadius: GLOBE_SIZE / 2 + 8,
                  borderBottomRightRadius: GLOBE_SIZE / 2 + 8,
                },
              ]}
            >
              <Text style={styles.cardTitle}>{BENTO_ITEMS[1].title}</Text>
              <Text style={styles.cardDesc}>{BENTO_ITEMS[1].description}</Text>
            </View>

            {/* Top Right Card */}
            <View
              style={[
                styles.card,
                {
                  width: cardWidth,
                  height: cardHeight,
                  borderBottomLeftRadius: GLOBE_SIZE / 2 + 8,
                },
              ]}
            >
              <Text style={styles.cardTitle}>{BENTO_ITEMS[2].title}</Text>
              <Text style={styles.cardDesc}>{BENTO_ITEMS[2].description}</Text>
            </View>
          </View>

          {/* Bottom Row */}
          <View style={[styles.row, { marginTop: GRID_GAP }]}>
            {/* Bottom Left Card */}
            <View
              style={[
                styles.card,
                {
                  width: cardWidth,
                  height: cardHeight,
                  borderTopRightRadius: GLOBE_SIZE / 2 + 8,
                },
              ]}
            >
              <Text style={styles.cardTitle}>{BENTO_ITEMS[3].title}</Text>
              <Text style={styles.cardDesc}>{BENTO_ITEMS[3].description}</Text>
            </View>

            {/* Bottom Center Card */}
            <View
              style={[
                styles.card,
                {
                  width: cardWidth,
                  height: cardHeight,
                  borderTopLeftRadius: GLOBE_SIZE / 2 + 8,
                  borderTopRightRadius: GLOBE_SIZE / 2 + 8,
                },
              ]}
            >
              <Text style={styles.cardTitle}>{BENTO_ITEMS[4].title}</Text>
              <Text style={styles.cardDesc}>{BENTO_ITEMS[4].description}</Text>
            </View>

            {/* Bottom Right Card */}
            <View
              style={[
                styles.card,
                {
                  width: cardWidth,
                  height: cardHeight,
                  borderTopLeftRadius: GLOBE_SIZE / 2 + 8,
                },
              ]}
            >
              <Text style={styles.cardTitle}>{BENTO_ITEMS[5].title}</Text>
              <Text style={styles.cardDesc}>{BENTO_ITEMS[5].description}</Text>
            </View>
          </View>
        </Animated.View>

        {/* Globe - centered and on top */}
        <Animated.View
          style={[
            styles.globeContainer,
            {
              width: GLOBE_SIZE,
              height: GLOBE_SIZE,
              transform: [{ scale: globeScale }],
            },
          ]}
        >
          <Globe size={GLOBE_SIZE} />
        </Animated.View>
      </Animated.View>

      {/* Scrollable Content */}
      <Animated.ScrollView
        style={styles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {/* Section 1: Initial - half globe at bottom */}
        <View style={styles.section}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Explore Our{"\n"}World</Text>
            <Text style={styles.heroSubtitle}>
              Scroll to discover our global presence
            </Text>
          </View>
          <View style={styles.scrollHint}>
            <Text style={styles.scrollText}>↓</Text>
          </View>
        </View>

        {/* Section 2: Globe center
ed with bento */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Our Global Network</Text>
          </View>
        </View>

        {/* Section 3: Final content */}
        <View style={styles.section}>
          <View style={styles.finalContent}>
            <Text style={styles.finalTitle}>Join Us</Text>
            <Text style={styles.finalDesc}>
              Be part of something extraordinary
            </Text>
            <View style={styles.stats}>
              <View style={styles.stat}>
                <Text style={styles.statNum}>150+</Text>
                <Text style={styles.statLabel}>Countries</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNum}>10M+</Text>
                <Text style={styles.statLabel}>Users</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNum}>24/7</Text>
                <Text style={styles.statLabel}>Support</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ height: SCREEN_HEIGHT * 0.5 }} />
      </Animated.ScrollView>

      {/* Progress Indicators */}
      <View style={styles.indicators}>
        {[0, 1, 2].map((i) => (
          <View
            key={i}
            style={[
              styles.dot,
              currentSection === i && styles.dotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollView: {
    flex: 1,
  },
  fixedContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    pointerEvents: "none",
  },
  bentoWrapper: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: GRID_GAP,
  },
  card: {
    backgroundColor: "#d4d4d4",
    borderRadius: 16,
    padding: 12,
    justifyContent: "flex-end",
    borderWidth: 1,
    borderColor: "#b0b0b0",
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#333",
    marginBottom: 2,
  },
  cardDesc: {
    fontSize: 10,
    color: "#666",
  },
  globeContainer: {
    position: "absolute",
    zIndex: 10,
  },
  section: {
    height: SCREEN_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  heroContent: {
    alignItems: "center",
    marginTop: -SCREEN_HEIGHT * 0.2,
  },
  heroTitle: {
    fontSize: 44,
    fontWeight: "800",
    color: "#1a1a1a",
    textAlign: "center",
    letterSpacing: -1,
    lineHeight: 50,
  },
  heroSubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 12,
  },
  scrollHint: {
    position: "absolute",
    bottom: 60,
  },
  scrollText: {
    fontSize: 24,
    color: "#999",
  },
  sectionHeader: {
    marginTop: SCREEN_HEIGHT * 0.35,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1a1a1a",
    textAlign: "center",
  },
  finalContent: {
    alignItems: "center",
  },
  finalTitle: {
    fontSize: 36,
    fontWeight: "800",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  finalDesc: {
    fontSize: 16,
    color: "#666",
    marginBottom: 32,
  },
  stats: {
    flexDirection: "row",
    gap: 40,
  },
  stat: {
    alignItems: "center",
  },
  statNum: {
    fontSize: 28,
    fontWeight: "800",
    color: "#fb6415",
  },
  statLabel: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },
  indicators: {
    position: "absolute",
    right: 16,
    top: "50%",
    transform: [{ translateY: -24 }],
    gap: 8,
    zIndex: 20,
  },
  dot: {
    width: 8,

    height: 8,
    borderRadius: 4,
    backgroundColor: "#ddd",
  },
  dotActive: {
    backgroundColor: "#fb6415",
    height: 20,
  },
});
