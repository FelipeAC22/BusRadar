import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, TouchableOpacity } from 'react-native';
import { X } from 'lucide-react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { colors } from '../theme/colors';

const PANEL_HEIGHT = 300


const styles = StyleSheet.create({
    bottomSheet: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -PANEL_HEIGHT,
        height: PANEL_HEIGHT,
        backgroundColor: colors.card,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        zIndex: 100,
    },
    handle: {
        width: 40,
        height: 4,
        backgroundColor: colors.border,
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 2,
    },
    content: {},
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: 15,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    etaContainer: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    etaValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    etaLabel: {
        fontSize: 12,
        color: '#fff',
        opacity: 0.8,
    },
    details: {
        flex: 1,
    },
    subtext: {
        fontSize: 16,
        color: colors.text,
        marginBottom: 4,
    },
    bold: {
        fontWeight: 'bold',
    },
    status: {
        fontSize: 14,
        color: colors.success,
    },
    actionButton: {
        backgroundColor: colors.accent,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    actionButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    touchableButton: {
        width: '100%',
        alignItems: 'center',
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 10,
    },
    closeButton: {
        position: 'absolute',
        right: 0,
        padding: 5,
    },
});


interface BottomInfoPanelProps {
    isVisible: boolean
    etaMinutes: number
    busLine: string
    destination: string
    targetLocationName?: string
    status?: string
    onNotifyPress?: () => void
    onClose?: () => void
}

export default function BottomInfoPanel({
    isVisible,
    etaMinutes,
    busLine,
    destination,
    targetLocationName = "Your Location",
    status = "On Time • Low Crowding",
    onNotifyPress,
    onClose
}: BottomInfoPanelProps) {
    const translateY = useSharedValue(0)
    const context = useSharedValue({ y: 0 })

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: isVisible ? withSpring(-PANEL_HEIGHT + translateY.value) : withTiming(0) }],
        }
    })

    const gesture = Gesture.Pan()
        .onStart(() => {
            context.value = { y: translateY.value }
        })
        .onUpdate((event) => {
            translateY.value = event.translationY + context.value.y;
            // Clamp to avoid dragging too far up, but allow dragging down to close
            if (translateY.value < -50) translateY.value = -50;
        })
        .onEnd(() => {
            if (translateY.value > 100) {
                // Should ideally close here or snap back if not implementable via parent
                translateY.value = withSpring(0);
            } else {
                translateY.value = withSpring(0);
            }
        })


    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.bottomSheet, animatedStyle]}>
                <View style={styles.headerRow}>
                    <View style={styles.handle} />
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <X size={20} color={colors.textSecondary} />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title} numberOfLines={1}>{busLine === "Stop" ? destination : `Bus ${busLine} - ${destination}`}</Text>
                    <View style={styles.row}>
                        <View style={styles.etaContainer}>
                            <Text style={styles.etaValue}>{etaMinutes}</Text>
                            <Text style={styles.etaLabel}>min</Text>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.subtext}>Chegando em <Text style={styles.bold}>{targetLocationName}</Text></Text>
                            <Text style={styles.status}>{status}</Text>
                        </View>
                    </View>

                    <View style={styles.actionButton}>
                        <TouchableOpacity onPress={onNotifyPress} style={styles.touchableButton}>
                            <Text style={styles.actionButtonText}>Me Notifique</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animated.View>
        </GestureDetector>
    )
}

