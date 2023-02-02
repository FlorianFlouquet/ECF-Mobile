import { IonPage, IonHeader, IonToolbar, IonRow, IonCol, IonTitle, IonContent, IonButton, IonModal, IonButtons, IonList } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LocataireCard } from '../features/locataires/LocataireCard'
import { LocataireForm } from '../features/locataires/LocataireForm'
import { LocataireModel } from '../features/locataires/LocataireModel'
import { locatairesService } from '../features/locataires/Locataires.service'

export const LocatairesListPage = () => {

    const [locataires, setLocataires] = useState<LocataireModel[]>();

    const [showModal, setShowModal] = useState<boolean>(false)

    useEffect(() => {
        locatairesService.findAllLocataires().then((res) => setLocataires(res.data));
    }, [])

    /**
     * Appelle la methode addVehicules du service et update le contenu des states vehicules et sentData
     * @param newLocataire 
     */
    const ajouterLocataire = (newLocataire : LocataireModel) => {
        locatairesService.addLocataire(newLocataire).then(() => locatairesService.findAllLocataires()).then((res) => setLocataires(res.data)).then(() => setShowModal(false))
    }
    
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar color="primary">
                <IonRow>
                    <IonCol style={{textAlign: "center"}}>
                        <IonTitle>Locataires</IonTitle>
                    </IonCol>
                </IonRow>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonRow class='ion-justify-content-center ion-padding'>
                    <IonButton onClick={() => {setShowModal(true)}}>Ajouter Locataire</IonButton>
            </IonRow>
            <IonModal isOpen={showModal}>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonButton onClick={() => setShowModal(false)}>Annuler</IonButton>
                    </IonButtons>
                </IonToolbar>
                <LocataireForm 
                    ajouterLocataire={ajouterLocataire}
                />
            </IonModal>
            <IonList>
                {locataires && locataires.map((locataire) => (
                    <Link key={locataire.id} to={`/locataires/${locataire.id}`}>
                        <LocataireCard 
                            locataire={locataire}
                        />
                    </Link>
                ))}
            </IonList>
        </IonContent>
    </IonPage>
  )
}