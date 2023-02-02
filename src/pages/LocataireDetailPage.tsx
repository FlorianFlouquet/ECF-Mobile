import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonLabel, IonList, IonPage, IonRow, IonToolbar } from '@ionic/react'
import { trash, create } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { LocataireEditModal } from '../features/locataires/LocataireEditModal'
import { LocataireModel } from '../features/locataires/LocataireModel'
import { locatairesService } from '../features/locataires/Locataires.service'

export const LocataireDetailPage = () => {

    const [locataire, setLocataire] = useState<LocataireModel>({
        id: "",
        surname: "",
        firstname: "",
        age: 0,
        phoneNumber: "",
        email: "",
        birthDate: ""
    })

    const [showModal, setShowModal] = useState<boolean>(false);

    let {id} = useParams<{id: string}>()

    useEffect(() => {
        locatairesService.findLocataireById(id).then((res) => setLocataire(res.data));
    }, [id])

    /**
     * Appelle la méthode du service qui supprime un véhicule
     */
    const supprimerLocataire = () => {
        locatairesService.deleteLocataire(id).then(() => window.location.replace('/locataires'));
    }

    /**
     * A chaque modification dans un input, injecte la valeur de cette dernière 
     * dans la state locataire
     * @param event 
     */
    const handleChange = (event: any) => {
        setLocataire({...locataire, [event.target.name]: event.detail.value})
    }

    /**
     * Appelle la méthode du service qui met à jour le contenu d'un locataire
     */
    const handleModify = () => {
        if(locataire) {
            locatairesService.updateLocataire(locataire).then(() => locatairesService.findLocataireById(id)).then((res) => setLocataire(res.data)).then(() => setShowModal(false));
        }
    }

  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot='start'>
                    <IonBackButton></IonBackButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonImg src='/assets/image/pingu.jpg'></IonImg>
            { locataire &&
            <IonList>
                <IonGrid>
                    <IonRow>
                        <IonCol>Nom</IonCol>
                        <IonCol>{locataire.firstname}</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>Prénom</IonCol>
                        <IonCol>{locataire.surname}</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>Date de naissance</IonCol>
                        <IonCol>{locataire.birthDate}</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>Email</IonCol>
                        <IonCol>{locataire.email}</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>Numéro de téléphone</IonCol>
                        <IonCol>{locataire.phoneNumber}</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>Age</IonCol>
                        <IonCol>{locataire.age}</IonCol>
                    </IonRow>
                </IonGrid>
            </IonList>}
        </IonContent>
        <LocataireEditModal
            showModal={showModal}
            setShowModal={setShowModal}
            locataire={locataire}
            handleChange={handleChange}
            handleModify={handleModify}
        />
        <IonFooter>
            <IonRow>
                <IonCol style={{textAlign: "center"}}>
                    <IonButton color="danger" onClick={supprimerLocataire}>
                        <IonIcon icon={trash}></IonIcon>
                    </IonButton>
                </IonCol>
                <IonCol style={{textAlign: "center"}}>
                    <IonButton color="warning" onClick={() => setShowModal(true)}>
                        <IonIcon icon={create}></IonIcon>
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonFooter>
    </IonPage>
  )
}
