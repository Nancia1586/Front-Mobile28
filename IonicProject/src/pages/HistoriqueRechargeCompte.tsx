import { IonButton, IonButtons, IonCol, IonCard, IonFab, IonContent, IonFabButton, IonFabList, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSelect, IonSelectOption, IonThumbnail, IonTitle, IonToolbar, IonVirtualScroll, RefresherEventDetail, useIonViewWillEnter, IonBadge, IonGrid, IonSearchbar, IonPopover, IonChip, IonAvatar, useIonAlert, IonSegment, IonSegmentButton, IonToggle } from '@ionic/react';
import { add, addCircleSharp, bagAdd, bagAddOutline, business, calendar, card, chevronUpCircle, colorPalette, list, logOut, notifications, person, personCircle, search } from 'ionicons/icons';
import { useEffect, useRef, useState } from 'react';

const HistoriqueRechargeCompte: React.FC = () => {
    const toggleDarkModeHandler = () => document.body.classList.toggle('dark');
    const [list_, setList] = useState<any[]>([]);
    const [solde, setSolde] = useState(0);
    const modal = useRef<HTMLIonModalElement>(null);
    const [presentAlert] = useIonAlert();
    // const [token, setToken] = useState(localStorage.getItem("token"));
    const token = localStorage.getItem("token");

    useEffect(() => {
        fetch("http://localhost:8787/clients/compte?token="+token)
            .then(data => data.json())
            .then(res => {
                setList(res);
                // console.log(res);
            })
    }, [])

    useEffect(() => {
        fetch("http://localhost:8787/clients/" + localStorage.getItem("idClient"))
            .then(data => data.json())
            .then(res => {
                console.log(res.solde);
                setSolde(res.solde);
            })
    }, [])

    function Menu() {
        return (
            <>
                <IonMenu contentId='main-content'>
                    <IonContent className='ion-padding'>
                        <IonItem href="/ListePM">
                            <IonIcon icon={personCircle}></IonIcon>
                            <IonLabel>Profil</IonLabel>
                        </IonItem>
                        <IonItem href="/ListeExtraction">
                            <IonIcon icon={list}></IonIcon>
                            <IonLabel>Enchere</IonLabel>
                        </IonItem>
                        <IonItem href="/ListeBroyage">
                            <IonIcon icon={list}></IonIcon>
                            <IonLabel>Compte</IonLabel>
                        </IonItem>
                        <IonItem href="/ListeCentrifuge">
                            <IonIcon icon={logOut}></IonIcon>
                            <IonLabel>Deconnexion</IonLabel>
                        </IonItem>
                    </IonContent>
                </IonMenu>
            </>
        );
    }

    function Avatar() {
        return (
            <>
                <IonAvatar>
                    <img style={{ width: "40px", height: "40px" }} alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                    {/* <IonLabel>Rakoto</IonLabel> */}
            </>
        );
    }

    function Header() {
        return (
            <>
                <IonHeader>
                    <IonToolbar>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonTitle>E-VAROTRA</IonTitle>
                                </IonCol>
                                <IonCol size="auto">
                                    <div style={{ width: "50px" }}>
                                        {/* <img width={20} height={20} alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" /> */}
                                        {/* <Avatar/> */}
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
                    <IonToolbar>
                        {/* <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons> */}
                        <IonButtons>
                            <IonGrid>
                                <IonRow>
                                    <IonCol>
                                        <center>
                                            <IonButton href='/profil'>
                                                <IonIcon slot="icon-only" icon={personCircle}></IonIcon>
                                            </IonButton>
                                        </center>
                                    </IonCol>
                                    <IonCol>
                                        <center>
                                            <IonButton>
                                                <IonIcon slot="icon-only" icon={notifications}></IonIcon>
                                            </IonButton>
                                        </center>
                                    </IonCol>
                                    <IonCol>
                                        <center>
                                            <IonButton href='/historique_recharge_compte'>
                                                <IonIcon slot="icon-only" icon={bagAddOutline}></IonIcon>
                                            </IonButton>
                                        </center>
                                    </IonCol>
                                    <IonCol>
                                        <center>
                                            <IonButton href='/liste_enchere'>
                                                <IonIcon slot="icon-only" icon={list}></IonIcon>
                                            </IonButton>
                                        </center>
                                    </IonCol>
                                    <IonCol>
                                        <center>
                                            <IonButton>
                                                <IonIcon slot="icon-only" icon={logOut}></IonIcon>
                                            </IonButton>
                                        </center>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonButtons>
                        {/* <IonTitle>ToolBar</IonTitle> */}
                    </IonToolbar>
                </IonHeader>
            </>
        );
    }

    function dismiss(){
        modal.current?.dismiss();
    }

    function RechargeForm() {
        return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
                <IonButton id="open-custom-dialog" expand="block">
                    Open Custom Dialog
                </IonButton>
                <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
                    <div className='wrapper'>
                        <h1>Dialog header</h1>

                        <IonList lines="none">
                            <IonItem button={true} detail={false} onClick={dismiss}>
                                <IonIcon icon={personCircle}></IonIcon>
                                <IonLabel>Item 1</IonLabel>
                            </IonItem>
                            <IonItem button={true} detail={false} onClick={dismiss}>
                                <IonIcon icon={personCircle}></IonIcon>
                                <IonLabel>Item 2</IonLabel>
                            </IonItem>
                            <IonItem button={true} detail={false} onClick={dismiss}>
                                <IonIcon icon={personCircle}></IonIcon>
                                <IonLabel>Item 3</IonLabel>
                            </IonItem>
                        </IonList>
                    </div>

                </IonModal>
            </IonContent>
        </IonPage>
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
            return "En attente";
        }
        if (statut == 21) {
            return "Validé";
        }
        if (statut == 1) {
            return "Refusé";
        }
    }

    function getColorStatut(statut: number) {
        if (statut == 11) {
            return "warning";
        }
        if (statut == 21) {
            return "success";
        }
        if (statut == 1) {
            return "danger";
        }
    }

    // function Historique() {
    const Historique = list_.map(group => {
        return (
            <>
            <IonCard>
                <IonCardHeader>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <div style={{display: "flex"}}>
                                        <IonIcon icon={calendar}></IonIcon>
                                        <div style={{ width: "10px" }}></div>
                                        <IonCardSubtitle>{" "+group.date}</IonCardSubtitle>
                                    </div>
                                </IonCol>
                                <IonCol size="auto">
                                    <div style={{ width: "60px" }}>
                                        <center><IonBadge color={getColorStatut(group.etat)}>{getStatut(group.etat)}</IonBadge></center>
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                </IonCardHeader>
                <IonCardContent>
                    Vous avez rechargé votre compte de {group.valeur} Ariary.
                </IonCardContent>
            </IonCard>
            </>
        );
    })

    const buttonStyle = {
        position: 'fixed',
        bottom: '2vh',
        right: '6vw',
    };


    function ButtonFixed() {
        return (
            <IonFab style={buttonStyle}>
                <IonFabButton onClick={() =>
                        presentAlert({
                        header: 'Recharger mon compte',
                        inputs: [
                            {
                                placeholder: 'Montant en Ariary',
                                id: 'montant'
                            },
                        ],
                            buttons: [
                                {
                                    text: 'Valider',
                                    handler: () => {
                                        var montant = (document.getElementById("montant") as HTMLIonInputElement).value;
                                        // console.log('Montant ' + montant);
                                        // setMontant(montant as number);
                                        var form = new FormData();
                                        form.append("token", token as string);
                                        form.append("valeur", montant as string);
                                        // POSTGRES
                                        fetch("http://localhost:8787/comptes/compte", {
                                            method: 'POST',
                                            body: form
                                        })
                                        form = new FormData();
                                    }
                                },
                            ],

                        })
                    }>
                    <IonIcon icon={add}></IonIcon>
                </IonFabButton>
            </IonFab>
        );
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
                    {/* <RechargeForm /> */}
                    <ButtonFixed />
                    <br></br>
                    <IonToolbar>
                        <IonSearchbar></IonSearchbar>
                    </IonToolbar>
                    <IonList>
                        <IonCard color="tertiary">
                            <IonCardHeader>
                                <IonCardSubtitle>SOLDE ACTUEL</IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonCardTitle>{solde} Ar</IonCardTitle>
                            </IonCardContent>
                        </IonCard>
                        {Historique}
                    </IonList>
                </IonContent>
            </IonPage>

        </>
    );
};

export default HistoriqueRechargeCompte;