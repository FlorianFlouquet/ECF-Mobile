import { IonButton, IonButtons, IonCol, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonModal, IonNavLink, IonPage, IonRow, IonTitle, IonToggle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { VehiculeCard } from '../features/vehicules/VehiculeCard';
import { VehiculeForm } from '../features/vehicules/VehiculeForm';
import { vehiculesService } from '../features/vehicules/Vehicules.service';
import { VehiculesModel } from '../features/vehicules/VehiculesModel';

export const VehiculesListPage = () => {


    const [vehicules, setVehicules] = useState<VehiculesModel[]>();

    const [filterVehicules, setFilterVehicules] = useState<VehiculesModel[]>()

    const [showModal, setShowModal] = useState<boolean>(false)

    useEffect(() => {
        vehiculesService.findAllVehicules().then((res) => setVehicules(res.data));
    }, [])

    useEffect(() => {
        setFilterVehicules(vehicules)
    }, [vehicules])

    /**
     * Appelle la methode addVehicules du service et update le contenu des states vehicules et sentData
     * @param vehicule 
     */
    const ajouterVehicule = (newVehicule : VehiculesModel) => {
        vehiculesService.addVehicule(newVehicule).then(() => vehiculesService.findAllVehicules()).then((res) => setVehicules(res.data)).then(() => setShowModal(false))
    }

    /**
     * Affiche la liste des véhicules en entier ou seulement les véhicules disponible à la location
     * @param event 
     */
    const filtrerVehicules = (event: any) => {
        if(event.target.checked) {
            if(vehicules) {
                setFilterVehicules(vehicules.filter((elm) => elm.available == true));
            }
        } else {
            setFilterVehicules(vehicules)
        }
    }

  return (
    <IonPage>
        <IonHeader>
            <IonToolbar color="primary">
                <IonRow>
                    <IonCol style={{textAlign: "center"}}>
                        <IonTitle>Vehicules</IonTitle>
                    </IonCol>
                </IonRow>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonRow class='ion-justify-content-center ion-padding'>
                    <IonButton onClick={() => {setShowModal(true)}}>Ajouter Véhicule</IonButton>
            </IonRow>
            <IonRow>
                <IonItem>
                    <IonLabel>Afficher les véhicules disponible ?</IonLabel>
                    <IonToggle onIonChange={filtrerVehicules}></IonToggle>
                </IonItem>
            </IonRow>
            <IonModal isOpen={showModal}>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonButton onClick={() => setShowModal(false)}>Annuler</IonButton>
                    </IonButtons>
                </IonToolbar>
                <VehiculeForm 
                    ajouterVehicule={ajouterVehicule}
                />
            </IonModal>
            <IonList>
                {filterVehicules && filterVehicules.map((vehicule) => (
                    <Link key={vehicule.id} to={`/vehicules/${vehicule.id}`}>
                        <VehiculeCard 
                            vehicule={vehicule}
                        />
                    </Link>
                ))}
            </IonList>
        </IonContent>
    </IonPage>
  )
}
