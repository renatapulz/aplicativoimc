import React from "react"
import { View, Text } from "react-native"
import styles from "./styleHeader"


export default function Header(){
    return(
        <View style = {styles.boxTitle}>
            <Text style = {styles.textTitle}>
                 SoulHealth
            </Text>
        </View>
    )
}