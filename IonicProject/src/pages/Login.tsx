import { IonAlert, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {logIn, personAddOutline, warningOutline} from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './Login.css';

const Login: React.FC = () => {
  const[email,setEmail] = useState<string>();
  const[password,setPassword] = useState<string>();
  const history = useHistory();
  const [error,setError] = useState('');
  const [showAlert, setShowAlert] = useState(false);


  const handleLogin = async (event:React.FormEvent<HTMLFormElement>)=>{ 
    event.preventDefault();
    
    await fetch("http://localhost:8787/clients/login?email="+email+"&mdp="+password,{method:"POST"})
    .then((response)=>response.json())
    .then((resultat)=>{
      if(resultat.error){
        //console.log(resultat.error);
        throw new Error(resultat.error.message);
      }
      //console.log(typeof resultat.data.data.token);
      localStorage.setItem("token",resultat.data.data.token);
      history.push('/liste_enchere');///ATO LE MIOVA ANZE ANDEHANANY

    })
    .catch((error:Error)=>{
      //console.log("error: "+error.message);
      setError(error.message);
      setShowAlert(true);
    });
    //console.log('ato')
    //response.json()


  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={()=>history.push('/subscribe')}>
              <IonIcon icon={personAddOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <form onSubmit={handleLogin}>
          <IonList>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput placeholder="Entrer votre email" type='email' onIonChange={(event)=>setEmail(event.target.value as string)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Mot de passe</IonLabel>
              <IonInput placeholder="Entrer votre mot de passe" type='password' onIonChange={(event)=>setPassword(event.target.value as string)}></IonInput>
            </IonItem>
            <IonButton expand="block" type='submit'>
              <IonIcon icon={logIn}/>Se connecter
            </IonButton>
            
          </IonList>
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header={"Alert"}
            subHeader={error}
            //message="This is an alert!"
            buttons={['OK']}
          />
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
