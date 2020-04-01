import React,{useState} from 'react';
import { Icon, Input, Button, SocialIcon } from 'react-native-elements';
import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook';
import {FacebookApi} from '../../utils/Social';
import Loading from '../../components/Loading';

export default function LoginFacebook(props){
    const {toastRef,navigation} = props;
    const [isVisibleLoading,setIsVisibleLoading] = useState(false);

    const login = async () => {
    

        Facebook.initializeAsync(FacebookApi.application_id);
        const {type,token} = await Facebook.logInWithReadPermissionsAsync(
            FacebookApi.application_id,
            {permissions: FacebookApi.permissions}
        );
        
        if(type === "success"){
            setIsVisibleLoading(true);
            const credentials = firebase.auth.FacebookAuthProvider.credential(token);
            await firebase
                    .auth()
                    .signInWithCredential(credentials)
                    .then(()=>{
                        toastRef.current.show('Inicio de sesión correcto');
                        navigation.navigate("MyAccount");
                    })
                    .catch(()=>{
                        toastRef.current.show('Error en Inicio de sesión');
                    })
        }else if(type === "cancel"){
            toastRef.current.show('Inicio de sesión cancelado');
        }else{
            toastRef.current.show('Error desconocido');
        }

        setIsVisibleLoading(false);

    };

    return(
        <>
        <SocialIcon
            title='Sign In With Facebook'
            button
            type='facebook'
            onPress={login}
        />
        <Loading text="Iniciando sesión" isVisible={isVisibleLoading}/>
        </>
    )
}