import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export default function layout() {
    return (
        <GestureHandlerRootView style={Styles.container}>
            <statusbar style="dark" />







        </GestureHandlerRootView>


    )
}