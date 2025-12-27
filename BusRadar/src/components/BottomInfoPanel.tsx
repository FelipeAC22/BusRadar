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

interface BottomInfoPanelProps { // precisa implementar
    isVisible: boolean
    etaMinutes: number
    busLine: string
    destination: string
    targetLocationName?: string
    status?: string
    onNotifyPress?: () => void
}

// a constante primária pra função principal logo abaixo
const styles = StyleSheet.create({ 
    bottomSheet: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -200,
        height: SCREEN_HEIGHT,
        backgroundColor: colors.card,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
})


export default function BottomInfoPanel({
    isVisible,
    etaMinutes,
    busLine,
    destination,
    targetLocationName = "Your Location",
    status = "On Time | Low \Croeding",
    onNotifyPress
}: BottomInfoPanelProps) {
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
            context.value = { y: translateY.value }
        })
        .onUpdate((event) => {
            translateY.value = event.translationY + context.value.y
        })
        .onEnd(() => {
            if (translateY.value > 50) {
                translateY.value = withSpring(0)
                // eu realmente preciso disso?
                /* pelo jeito sim, e talvez tenho que colocar um onClose 
                pra reiniciar se puxar muito longe da tela */
            } else {
                translateY.value = withSpring(0)
            }
        })

    /* if (!isVisible) return null
       temporariamente desativado para retornoo de animação 0 (escondido)
       e conflitos para animações fora da tela */

    // o maior return que eu ja vikkkk, retorna as animações
    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.bottomSheet, animatedStyle]}>
                <View style={styles.handle} />
                <View style>
                </View>
            </Animated.View>
        </GestureDetector>


    )
}
