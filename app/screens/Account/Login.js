import React,{useRef} from 'react';
import {StyleSheet,ScrollView, View, Text, ActivityIndicator,Image} from 'react-native';
import { Divider, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import LoginForm from '../../components/Account/LoginForm';
import LoginFacebook from '../../components/Account/LoginFacebook';
import Toast from 'react-native-easy-toast';

export default function Login(props){
    const {navigation} = props;
    const toastRef= useRef();

    return(
        <ScrollView>
            <Image
                source={require("../../../assets/axolofAPPt.png")}
                style={styles.logo}
                resizeMode="center"
            />
            <View style={styles.viewContainer}>
                <LoginForm toastRef={toastRef}/>
                <CreateAccount navigation={navigation}/>
            </View>
            <Divider style={styles.divider}/>
            <View style={styles.viewContainer}>
                <LoginFacebook toastRef={toastRef} navigation={navigation} />
            </View>
            <Toast ref={toastRef} position="bottom" opacity={0.8}  fadeInDuration={750} positionValue={350}/>
        </ScrollView>
    );
}

function CreateAccount(props){
    const{navigation}= props;
    return(
        <Text style={styles.textRegister}>
            ¿Aún no tienes una cuenta? 
            <Text style={styles.btnRegister}
                onPress={() => navigation.navigate("Register")}
            >
                Registrate
            </Text>
        </Text>

    )
}

const styles= StyleSheet.create({
    viewContainer : {
        marginLeft:30,
        marginRight:30,
        marginBottom:50
    },
    logo:{
        height:150,
        width:"100%",
        marginTop:20,
    },
    divider:{
        backgroundColor:"#1B98E0",
        margin:40
    },
    textRegister:{
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        textAlign:"center"
    },
    btnRegister:{
        color:"#1B98E0",
        fontWeight:"bold"
    }
})