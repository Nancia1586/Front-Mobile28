import { IonCol, IonCard, IonContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonHeader, IonList, IonPage, IonRefresher, IonRefresherContent, IonRow, IonTitle, IonToolbar, RefresherEventDetail, IonBadge, IonGrid, IonToggle, IonBackButton, IonAvatar, IonImg, IonItem, IonLabel, IonButton, IonIcon, IonInput, IonSelect, IonSelectOption } from '@ionic/react';
import { addOutline, camera, closeCircleOutline } from 'ionicons/icons';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { supPhoto, usePhotoGallery } from './usePhotoGallery';

const DetailEnchere: React.FC = () => {
    const toggleDarkModeHandler = () => document.body.classList.toggle('dark');
    const idEnchere = useParams<{ id: string }>();
    const { photos, takePhoto, __photo } = usePhotoGallery();
    var [ph, setPh] = useState(__photo);
    ph = __photo;

    type Categorie = {
        id: number,
        libelle: string,
        etat: number

    }

    const token = localStorage.getItem("token");
    const [nomProduit, setNomProduit] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [prixEnchere, setPrixEnchere] = useState<number>();
    const [duree, setDuree] = useState<number>();
    const [categorieid, setCategorieid] = useState<number>();
    const [categories, setCategories] = useState<any[]>([]);
    const history = useHistory();

    useEffect(() => {
        fetch("http://localhost:8787/categorie")
            .then(data => data.json())
            .then(res => {
                setCategories(res.data.data.listCategorie);
            })
    }, [])


    
    function supPh(id: String) {
        var __ph = supPhoto(id);
        setPh(__ph);
    }

    function upFile(photo: any, id: any) {
        let url = "http://localhost:8787/enchereImages/enchereImage";
        console.log(url);
        fetch(url, {
            method: 'POST',
            headers: {
                "idEnchere": id
            },
            body: JSON.stringify({
                image: photo
            })
        }).then((result) => {
            console.log("photo: "+photo);
            console.log("idEnchere: " + id);
            console.log("Result: "+result.json());
            return result.json();

        }).then((e) => {
            console.log(e);
            if (e.error != undefined) {
                // setExp(true);
            } else {
                // setList(e.data);
                // setOk(true);
            }

        }, (e) => {
        });

    }

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

    const newEnchere = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        var token = localStorage.getItem("token");
        let body = "";

        const sendProperties = await fetch("http://localhost:8787/encheres/enchere?token=" + token +
            "&nomProduit=" + nomProduit + "&description=" + description + "&prixEnchere=" + prixEnchere + "&duree=" + duree + "&idCategorie=" + categorieid,
            { method: "POST" }
        );
        const resultat = await sendProperties.json();
        if (resultat.error) {
            throw new Error(resultat.error.message);
        }
        const id = await resultat.data.data.idEnchere;
        console.log(id);

        for (let index = 0; index < __photo.length; index++) {
            body = body + __photo[index][0] + ",";
            upFile(__photo[index][0], id);
        }

        history.push('/liste_enchere');
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
                    {/* <IonList>
                        {detail()}
                    </IonList> */}
                    {ph.map((p) => (
                        <IonCol size="6" >
                            <IonIcon icon={closeCircleOutline} onClick={() => supPh(p[1])}>{p[1]}</IonIcon>
                            <IonImg src={p[0] + ""} />
                        </IonCol>
                    ))}
                    <IonButton onClick={() => takePhoto()}>
                        <IonIcon icon={camera}></IonIcon>
                    </IonButton>
                    <br></br>
                    <form onSubmit={newEnchere}>

                    <IonList>
                        <IonItem>
                            <IonLabel position="floating">Nom du produit</IonLabel>
                            <IonInput placeholder="Nom du produit" type='text' onIonChange={(event)=>setNomProduit(event.target.value as string)}></IonInput>
                        </IonItem>  
                        <IonItem>
                            <IonLabel position="floating">Description</IonLabel>
                            <IonInput placeholder="Description du produit" type='text' onIonChange={(event)=>setDescription(event.target.value as string)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Prix enchere</IonLabel>
                            <IonInput placeholder="Prix enchere" type='number' onIonChange={(event)=>setPrixEnchere(event.target.value as number)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Duree</IonLabel>
                            <IonInput placeholder="Duree enchere" type='number' onIonChange={(event)=>setDuree(event.target.value as number)}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonSelect onIonChange={(e)=>setCategorieid(e.detail.value)} placeholder="Categorie du produit">
                            {categories.map((categorie) => (
                                <IonSelectOption key={categorie.id} value={categorie.id}>
                                {categorie.libelle}
                                </IonSelectOption>
                            ))}
                            </IonSelect>
                        </IonItem>
                        
                        <IonButton expand="block" type='submit'><IonIcon icon={addOutline}></IonIcon>Ajouter</IonButton>
                    </IonList>
                </form>
                </IonContent>
            </IonPage>
        </>
    );
};

export default DetailEnchere;