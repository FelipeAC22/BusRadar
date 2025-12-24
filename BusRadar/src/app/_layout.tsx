import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export default function layout() {
    return (
        <GestureHandlerRootView style={styles.container}>
            <StatusBar style="dark" />
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: colors.backgroud }
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
    }
})