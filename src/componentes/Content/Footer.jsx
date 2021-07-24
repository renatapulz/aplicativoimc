import React from "react"
import { View, Text } from "react-native"
import styles from "./estilos/stylefooter"



export default function Footer(){
    return(
        <View style={styles.viewfooter}>
            <Text style={styles.textfooter}>
                 Desenvolvido por Renata Pulz 
            </Text>
        </View>
    )
}