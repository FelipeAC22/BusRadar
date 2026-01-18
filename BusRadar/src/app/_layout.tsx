import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function Layout() {
    return (
        <GestureHandlerRootView style={styles.container}>
            <StatusBar style="dark" />
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: colors.background },
                }}
            >
                <Stack.Screen name="index" />
            </Stack>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
