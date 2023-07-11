import React from 'react';
import { View ,Image , TouchableOpacity,StyleSheet,Text} from 'react-native';

function ButtonElement(props) { 

    return (
            <TouchableOpacity style={styles.Button} onPress={props.HandlePress}>
                    <Text style={styles.ButtonText}>{props.title}</Text>
                    <Image source={props.icons} />
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Button:{
        backgroundColor: "#fff",
        borderColor: 'black' ,
        borderWidth : 2,
        flexDirection : "row",
        justifyContent : "space-evenly",
        alignItems: "center",
        width : "90%",
        height : "22%",
        borderRadius : 200,
    },
    ButtonText : {
        fontWeight : 900,
        fontSize : 20,
    },
})
export default ButtonElement;


