import React from "react";
import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming
} from 'react-native-reanimated';

const {height: SCREEN_HEIGHT} = Dimensions.get('window')