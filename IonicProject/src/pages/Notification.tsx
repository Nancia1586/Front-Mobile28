import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { IonButton, IonButtons, IonCol, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import firebase, { initializeApp } from 'firebase/app';
import 'firebase/messaging';

const Notification: React.FC = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyAZJCvedRqY8v4Zd_SF--RU8hERzl9oAVE",
        authDomain: "enchere-b829a.firebaseapp.com",
        projectId: "enchere-b829a",
        storageBucket: "enchere-b829a.appspot.com",
        messagingSenderId: "1065083183928",
        appId: "1:1065083183928:web:ce1e103e34629f492b17cd",
        measurementId: "G-2ZP3HCXRL0"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);

    // async function requestPermission() {
    //     try {
    //         const messaging = firebase.messaging();
    //         await messaging.requestPermission();
    //         const token = await messaging.getToken();
    //         console.log('Token:', token);
    //         // Envoyez le token au serveur pour s'abonner aux notifications
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // function receiveNotification() {
    //     const messaging = firebase.messaging();
    //     messaging.onMessage((payload) => {
    //         const notification = new Notification(payload.notification.title, {
    //             body: payload.notification.body,
    //             icon: payload.notification.icon,
    //         });
    //     });
    // }

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
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Mot de passe</IonLabel>
                    </IonItem>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <IonButton>Enregistrer</IonButton>
                        </IonCol>
                    </IonRow>
                </form>
            </Container>
        </div>
    );
};

export default Notification;