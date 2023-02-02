import { IonButton, IonButtons, IonCol, IonCard, IonFab, IonContent, IonFabButton, IonFabList, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonModal, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSelect, IonSelectOption, IonThumbnail, IonTitle, IonToolbar, IonVirtualScroll, RefresherEventDetail, useIonViewWillEnter, IonBadge, IonGrid, IonSearchbar, IonAvatar, IonSegment, IonSegmentButton, IonToggle } from '@ionic/react';
import { add, addCircleSharp, albums, bagAdd, bagAddOutline, business, card, chevronUpCircle, colorPalette, list, logOut, notifications, person, personCircle, search } from 'ionicons/icons';
import { useEffect, useState } from 'react';

const ListeEnchere: React.FC = () => {
    const [list_, setList] = useState<any[]>([]);
    const toggleDarkModeHandler = () => document.body.classList.toggle('dark');
    
    useEffect(() => {
        fetch("http://localhost:8787/clients/1/encheres")
            .then(data => data.json())
            .then(res => {
                setList(res);
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

    const avatarStyle = {
        position: 'fixed',
        right: '4vw',
    };

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

    function getStatut(statut:number){
        if(statut == 11){
            return "En cours";
        }
        if (statut == 21) {
            return "Terminée";
        }
    }

    function getColorStatut(statut:number){
        if (statut == 11) {
            return "success";
        }
        if (statut == 21) {
            return "danger";
        }
    }

    // function List(){
        const liste = list_.map(group => {
            return (
                <IonCard>
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                    <IonIcon slot="icon-only" icon={albums}></IonIcon>
                    <IonCardHeader>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonBadge color={getColorStatut(group.statut)}>{getStatut(group.statut)}</IonBadge>
                                    <IonCardTitle>{group.nomProduit}</IonCardTitle>
                                    <IonCardSubtitle>{group.dateDebut} (2h restant)</IonCardSubtitle>
                                </IonCol>
                                <IonCol size="auto">
                                    <div style={{ width: "20px" }}>
                                        {/* <IonIcon icon={search}></IonIcon> */}
                                    </div>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCardHeader>

                    {/* <IonCardContent>
                                Here's a small text description for the card content. Nothing more, nothing less.
                            </IonCardContent> */}
                </IonCard>
            )
        })
        // return (
        //     <>
        //         <IonCard>
        //             <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        //             <IonCardHeader>
        //                 <IonGrid>
        //                     <IonRow>
        //                         <IonCol>
        //                             <IonBadge color="success">En cours</IonBadge>
        //                             <IonCardTitle>Bandouliere</IonCardTitle>
        //                             <IonCardSubtitle>2023-01-25 12:37:08 (2h restant)</IonCardSubtitle>
        //                         </IonCol>
        //                         <IonCol size="auto">
        //                             <div style={{ width: "20px" }}>
        //                                 {/* <IonIcon icon={search}></IonIcon> */}
        //                             </div>
        //                         </IonCol>
        //                     </IonRow>
        //                 </IonGrid>
        //             </IonCardHeader>

        //             {/* <IonCardContent>
        //                         Here's a small text description for the card content. Nothing more, nothing less.
        //                     </IonCardContent> */}
        //         </IonCard>
        //         <IonCard>
        //             <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        //             <IonCardHeader>
        //                 <IonBadge color="danger">Terminée</IonBadge>
        //                 <IonCardTitle>Bloc note</IonCardTitle>
        //                 <IonCardSubtitle>2023-01-20 11:09:53</IonCardSubtitle>
        //             </IonCardHeader>

        //             <IonCardContent>
        //                 Here's a small text description for the card content. Nothing more, nothing less.
        //             </IonCardContent>
        //         </IonCard>
        //         <IonCard>
        //             <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        //             <IonCardHeader>
        //                 <IonCardTitle>Card Title</IonCardTitle>
        //                 <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        //             </IonCardHeader>

        //             <IonCardContent>
        //                 Here's a small text description for the card content. Nothing more, nothing less.
        //             </IonCardContent>
        //         </IonCard>
        //         <IonCard>
        //             <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        //             <IonCardHeader>
        //                 <IonCardTitle>Card Title</IonCardTitle>
        //                 <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        //             </IonCardHeader>

        //             <IonCardContent>
        //                 Here's a small text description for the card content. Nothing more, nothing less.
        //             </IonCardContent>
        //         </IonCard>
        //     </>
        // );
    // }

    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            // Any calls to load data go here
            event.detail.complete();
            window.location.reload();
        }, 500);
    }

    const buttonStyle = {
        position: 'fixed',
        bottom: '2vh',
        right: '4vw',
    };

    function ButtonFixed() {
        return (
            <IonFab style={buttonStyle}>
                <IonFabButton>
                    <IonIcon icon={chevronUpCircle}></IonIcon>
                </IonFabButton>
                <IonFabList side="top">
                    <IonFabButton>
                        <IonIcon icon={colorPalette}></IonIcon>
                    </IonFabButton>
                    <IonFabButton>
                        <IonIcon icon={add}></IonIcon>
                    </IonFabButton>
                </IonFabList>
            </IonFab>
        );
    }

    function Segment(){
        return (
            <IonSegment>
                <IonSegmentButton value="fruits">
                    <IonLabel>Mes enchères</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="vegetables">
                    <IonLabel>Mes mises</IonLabel>
                </IonSegmentButton>
            </IonSegment>
        );
    }

    return (
        <>
            {/* <Menu/> */}
            <IonPage id="main-content">
                <Header />
                <IonContent>
                    {/* <IonAlert
                        isOpen={showAlert1}
                        onDidDismiss={() => setShowAlert1(false)}
                        header={'Alert'}

                        subHeader={'Message'}
                        message={message}
                        buttons={['OK']} /> */}
                    <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                        <IonRefresherContent></IonRefresherContent>
                    </IonRefresher>
                    <ButtonFixed/>
                    <br></br>
                    <IonToolbar>
                        <IonSearchbar></IonSearchbar>
                    </IonToolbar>
                    <br></br>
                    <Segment/>
                    <IonList>
                        {/* <IonButton>
                            <IonIcon icon={add}></IonIcon>
                            <IonLabel>Nouvelle enchere</IonLabel>
                        </IonButton> */}
                        {liste}
                    </IonList>
                </IonContent>
            </IonPage>
        </>
    );
};

export default ListeEnchere;