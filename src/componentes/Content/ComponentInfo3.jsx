import React from "react"
import { View, Text, Image} from "react-native"
import styles from "./estilos/styleComponenteInterno3"


export default function ComponentInfo3(props){
    return(
       <View style={styles.viewprinc}>
            <Image style={styles.imgm} source={require('./saude2.jpg')} />
            <Text style={styles.textocampo}>{props.texto}</Text>
        </View>
    )
}