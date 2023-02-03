import { IonCol, IonCard, IonContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonList, IonPage, IonRefresher, IonRefresherContent, IonRow, IonTitle, IonToolbar, RefresherEventDetail, IonBadge, IonGrid, IonToggle, IonBackButton, IonAvatar, IonImg, IonItem, IonLabel } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DetailEnchere: React.FC = () => {
    const toggleDarkModeHandler = () => document.body.classList.toggle('dark');
    const idEnchere = useParams<{ id:string }>();
    // const [enchere, setEnchere] = useState<any[]>([]);
    const[produit, setProduit] = useState("");
    const [description, setDescription] = useState("");
    const [prix, setPrix] = useState(0);
    const [debut, setDebut] = useState("");
    const [statut, setStatut] = useState(0);
    const [proposition, setProposition] = useState<any[]>([]);
    
    useEffect(() => {
        console.log(idEnchere.id);
        fetch("http://localhost:8787/encheres/"+idEnchere.id)
            .then(data => data.json())
            .then(res => {
                setProduit(res.data.data.enc.nomProduit);
                setDescription(res.data.data.enc.description);
                setPrix(res.data.data.enc.prixEnchere);
                setDebut(res.data.data.enc.dateDebut);
                setStatut(res.data.data.enc.statut);
                console.log(res.data.data.enc);
            })
    }, [])

    function Header() {
        return (
            <>
                <IonHeader>
                    <IonToolbar>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonBackButton defaultHref="/liste_enchere" />
                                </IonCol>
                                <IonCol>
                                    <IonTitle>E-VAROTRA</IonTitle>
                                </IonCol>
                                <IonCol size="auto">
                                    <div style={{ width: "50px" }}>
                                        {/* <img width={20} height={20} alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" /> */}
                                        {/* <Avatar /> */}
                                        <IonToggle
                                            slot="end"
                                            name="darkMode"
                                            onIonChange={toggleDarkModeHandler}
                                        />
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonToolbar>
                </IonHeader>
            </>
        );
    }

    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            // Any calls to load data go here
            event.detail.complete();
            window.location.reload();
        }, 500);
    }

    function getStatut(statut: number) {
        if (statut == 11) {
            return "En cours";
        }
        if (statut == 21) {
            return "Terminée";
        }
    }

    function getColorStatut(statut: number) {
        if (statut == 11) {
            return "success";
        }
        if (statut == 21) {
            return "danger";
        }
    }

    function detail(){
    // const detail = enchere.map(group => {
        return (
            <IonCard>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                <IonCardHeader>
                    <IonGrid>
                        <IonRow>
                                <IonCol>
                                    <IonBadge color={getColorStatut(statut)}>{getStatut(statut)}</IonBadge>
                                    <IonCardTitle>{produit}</IonCardTitle>
                                    <p>{description}</p>
                                    <br></br>
                                    <p>Prix de mise en enchère: {prix} Ariary</p>
                                    <IonCardSubtitle>{debut}</IonCardSubtitle>
                                </IonCol>
                                <IonCol size="auto">
                                    <div style={{ width: "20px" }}>
                                        {/* <IonIcon icon={search}></IonIcon> */}
                                    </div>
                                </IonCol>
                            </IonRow>
                    </IonGrid>
                </IonCardHeader>
            </IonCard>
        )
    }

    return (
        <>
            {/* <Menu/> */}
            <IonPage id="main-content">
                <Header />
                <IonContent>
                    <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                        <IonRefresherContent></IonRefresherContent>
                    </IonRefresher>
                    <IonList>
                        {detail()}
                    </IonList>
                    <br></br>
                </IonContent>
            </IonPage>
        </>
    );
};

export default DetailEnchere;