import React from "react"
import { View, Text, Image} from "react-native"
import styles from "./estilos/styleComponenteInterno2"


export default function ComponentInfo2(props){
    return(
       <View style={styles.viewprinc}>
            <Text style={styles.textocampo}>{props.texto}</Text>
            <Image style={styles.imgm} source={require('./saude.jpg')} />
        </View>
    )
}