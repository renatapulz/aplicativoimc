import React, {useState} from "react"
import { View, Text, TextInput, TouchableOpacity, Touchable} from "react-native"
import ResultImc from "./ResulImc"
import styles from "./estilos/styleImc"

//usado hooks para a fazer o cálculo do IMC
export default function Form(){
  const [height, setHeight]= useState('')
  const [weight, setWeight]= useState('')
  const [messageImc, setMessageImc]= useState("Preencha o peso e altura");
  const [imc, setImc]= useState(null)
  const [resultMsg, setResultMsg]= useState(null)
  const [textButton, setTextButton]= useState("Calcular");

  // Para imprimir o resultado pedido:
  function imcCalculator() {
    const imc = (weight/(height*height)).toFixed(2)
    const imcMessage = validarIMC(imc)

    // Seta os valores do IMC e da Mensagem
    setImc(imc)
    setResultMsg(imcMessage)
  }

  const validarIMC = (imc) => {
    if(imc <= 18.4) {
      return "Abaixo do peso. Propenso a fadiga, sofrer com stress e ansiedade."
    }
    else if(imc <= 24.9) {
      return "Peso normal. Menor risco de doenças cardíacas e vasculares."
    }
    else {
      return "Acima do peso. Propenso a fadiga, sofrer com má circulação e varizes."
    }

    return ''
  }

  function validationImc(){
    if(weight > 0 && height > 0) {
      imcCalculator()
      setHeight('')
      setWeight('')
      setMessageImc("Seu IMC é igual a: ")
      setTextButton("Calcular novamente")
      return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura")
    setResultMsg('')
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
        <TouchableOpacity style={styles.botaoCalc} onPress={() =>{validationImc()} }>
          <Text style={styles.textoBotaoCalc}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} message={resultMsg} />
    </View>
  )
}
