import React, { useEffect, useRef, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
import { IonButton, IonButtons, IonCol, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonRow, IonTitle, IonToolbar } from '@ionic/react';

const Login: React.FC = () => {
    var email = useRef<HTMLIonInputElement>(null);
    var mdp = useRef<HTMLIonInputElement>(null);

    const Traitement = () => {
        var form = new FormData();

        form.append("email", email.current?.value as string);
        form.append("mdp", mdp.current?.value as string);

        //POSTGRES
        fetch("http://localhost:8181/utilisateurs", {
            method: 'POST',
            body: form
        }).then(res => res.json()).then(async data => {
            console.log(data);
            if(data > 0){
                sessionStorage.setItem("idUser", data);
                window.location.href = "/accueil";
            }
            else{
                window.location.reload();
            }
        });
        form = new FormData();
    }

    return (
        <div>
            <Container fluid>
                <IonHeader>
                    <IonToolbar color='primary'>
                        <IonTitle>Login</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <form method='get'>
                    <IonItem>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput ref={email} type="text"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Mot de passe</IonLabel>
                        <IonInput ref={mdp} type="password"></IonInput>
                    </IonItem>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <IonButton onClick={Traitement}>Enregistrer</IonButton>
                        </IonCol>
                    </IonRow>
                </form>
            </Container>
        </div>
    );
};

export default Login;