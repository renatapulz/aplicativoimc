import React from "react"
import { View, Text, Image} from "react-native"
import styles from "./estilos/styleComponenteInterno2"

//alimentado via props e acescentado uma imagem - Image
export default function ComponentInfo2(props){
    return(
       <View style={styles.viewprinc}>
           <Image style={styles.imgm} source={require('./saude.jpg')} />
           <View style={styles.texto}>
                <Text style={styles.titulo}>{props.titulo}</Text>
                <Text style={styles.textocampo}>{props.texto}</Text>
            </View>
        </View>
    )
}