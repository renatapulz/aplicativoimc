import React, {useState} from "react"
import { View, Text, TextInput, TouchableOpacity, Touchable} from "react-native"
import ResultImc from "./ResulImc"
import styles from "./estilos/styleImc"

//usado hooks para a fazer o cálculo do IMC
export default function Form(){

    const [height, setHeight]= useState(null)
    const [weight, setWeight]= useState(null)
    const [messageImc, setMessageImc]= useState("Preencha o peso e altura");
    const [imc, setImc]= useState(null)
    const [textButton, setTextButton]= useState("Calcular");

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual a: ")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
    }

    return(
        <View style={styles.formContext}>
            <View>
                <Text style={styles.titleContext}>Calcule seu IMC:</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Ex: 1.60" keyboardType="numbers-and-punctuation"/>
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input} onChangeText={setWeight} value={weight}  placeholder="Ex: 55.450" keyboardType="numbers-and-punctuation"/>
            </View>
            <View style={styles.espacobotao} >    
                <TouchableOpacity style={styles.botaoCalc} onPress={() =>{
                    validationImc()
                } }>
                    <Text style={styles.textoBotaoCalc}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    )
}