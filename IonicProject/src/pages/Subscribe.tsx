import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {person, personAddOutline} from 'ionicons/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './Login.css';

const Subsribe: React.FC = () => {
    const [nom,setNom] = useState<string>();
    const[email,setEmail] = useState<string>();
    const[password,setPassword] = useState<string>();
    const history = useHistory();

    const handleSubscribe = async (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        await fetch("http://localhost:8787/clients/client?nom="+nom+"&email="+email+"&password="+password,{method:"POST"})
        .then((response)=>{
            if(!response.ok){
                throw new Error()
            }
            history.push('/login');///ATO LE MIOVA ANZE ANDEHANANY
        }).catch((error:Error)=>{
            console.log(error);
        });
    }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>S'inscrire</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form onSubmit={handleSubscribe}>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Nom</IonLabel>
            <IonInput placeholder="Entrer votre nom" type='text' onIonChange={(event)=>setNom(event.target.value as string)}></IonInput>
          </IonItem>  
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput placeholder="Entrer votre email" type='email' onIonChange={(event)=>setEmail(event.target.value as string)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Mot de passe</IonLabel>
            <IonInput placeholder="Entrer votre mot de passe" type='password' onIonChange={(event)=>setPassword(event.target.value as string)}></IonInput>
          </IonItem>
          <IonButton expand="block" type='submit'>S'inscrire</IonButton>
        </IonList>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Subsribe;