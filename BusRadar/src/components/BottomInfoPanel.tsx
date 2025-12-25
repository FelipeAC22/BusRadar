import React from "react";
import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { colors } from "../theme/colors"; // imports

const { height: SCREEN_HEIGHT } = Dimensions.get('window')
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50 // definição de dimensão

interface BottomInfoPanelProps { // loco kkk
    isVisible: boolean
    etaMinutes: number
}

export default function BottomInfoPanel({ isVisible, etaMinutes }: BottomInfoPanelProps) {
    const translateY = useSharedValue(0)
    const context = useSharedValue({ y: 0 })

    const startY = -200 // esse aqui é o tamanho inicial visivel

    const animatedStyle = useAnimatedStyle(() => { // animações ho ho 
        return {
            transform: [{ translateY: isVisible ? withSpring(startY + translateY.value) : withTiming(8) }]
        }
    })
    const gesture = Gesture.Pan()
        .onStart(() => {
            context.value = {y: translateY.value} // deu bug muehehehe
        })
}
