 import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    titleContext:{
        textAlign: "center",
        paddingTop: 5,
        fontSize: 15,
        fontWeight: "bold",
        }, 


    formContext: {
        bottom: 0, 
        paddingTop: 15,
        backgroundColor:"#e8f1f2",
        justifyContent: "center",
    },
    
    form: {
        marginTop: 5,
        flexDirection: "row",
        marginLeft: 10,

    },
    formLabel: {
        color: "#13293d",
        fontSize: 18,
        marginTop: 12,
        paddingLeft:8,

    },
    input: {
        width: 90,
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 25,
        margin: 11,
        paddingLeft: 8,
        
    },
    textoBotaoCalc: {
        fontSize: 14,
        color: "#e8f1f2",
        fontWeight: "bold",
    },
    botaoCalc: {
        backgroundColor: "#1b98e0",
        borderRadius: 50,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        width: 160,
        marginLeft: 12,
        marginTop: 5,
        marginBottom:20,
        fontSize: 14,
        fontWeight: "bold",
       
    },

    espacobotao:{
        alignItems:"center",
    }
    });

 export default styles