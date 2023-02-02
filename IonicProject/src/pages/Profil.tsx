import { IonButton, IonButtons, IonCol, IonCard, IonFab, IonContent, IonFabButton, IonFabList, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSelect, IonSelectOption, IonThumbnail, IonTitle, IonToolbar, IonVirtualScroll, RefresherEventDetail, useIonViewWillEnter, IonBadge, IonGrid, IonSearchbar, IonPopover, IonChip, IonAvatar, useIonAlert, IonSegment, IonSegmentButton, IonToggle } from '@ionic/react';
import { add, addCircleSharp, bagAdd, bagAddOutline, business, calendar, card, chevronUpCircle, colorPalette, list, logOut, moon, notifications, person, personCircle, search } from 'ionicons/icons';
import { useEffect, useRef, useState } from 'react';

const Profil: React.FC = () => {
        const toggleDarkModeHandler = () => document.body.classList.toggle('dark');

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

    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            // Any calls to load data go here
            event.detail.complete();
            window.location.reload();
        }, 500);
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
                    <br></br>
                    {/* <IonItem lines="none">
                        <IonIcon slot="start" icon={moon} />
                        <IonLabel>Dark Mode</IonLabel>
                        <IonToggle
                            slot="end"
                            name="darkMode"
                            onIonChange={toggleDarkModeHandler}
                        />
                    </IonItem> */}
                </IonContent>
            </IonPage>
        </>
    );
};

export default Profil;