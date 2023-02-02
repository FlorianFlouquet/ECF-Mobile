import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonList, IonModal, IonPage, IonRow, IonToolbar } from '@ionic/react'
import { trash, create } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { VehiculeEditModal } from '../features/vehicules/VehiculeEditModal'
import { vehiculesService } from '../features/vehicules/Vehicules.service'
import { VehiculesModel } from '../features/vehicules/VehiculesModel'

export const VehiculesDetailPage = () => {

    const [vehicule, setVehicule] = useState<VehiculesModel>({
        id: "",
        brand: "",
        model: "",
        state: "",
        licenseNumber: "",
        type: "",
        price: 0,
        available: true
    });

    const [showModal, setShowModal] = useState<boolean>(false);

    let {id} = useParams<{id: string}>()

    useEffect(() => {
        vehiculesService.findVehiculeById(id).then((res) => setVehicule(res.data));
    }, [id])

    /**
     * Appelle la méthode du service qui supprime un véhicule
     */
    const supprimerVehicule = () => {
        vehiculesService.deleteVehicule(id).then(() => window.location.replace('/vehicules'));
    }

    /**
     * A chaque modification dans un input, injecte la valeur de cette dernière 
     * dans la state vehicule
     * @param event 
     */
    const handleChange = (event: any) => {
        setVehicule({...vehicule, [event.target.name]: event.detail.value})
    }

    /**
     * A chaque modification dans la checkbox, injecte la valeur de cette dernière 
     * dans la l'attribut "available" de la state vehicule
     * @param event 
     */
    const handleChangeCheckbox = (event: any) => {
        setVehicule({...vehicule, available: event.target.checked})
    }

    /**
     * Appelle la méthode du service qui met à jour le contenu d'un véhicule
     */
    const handleModify = () => {
        if(vehicule) {
            vehiculesService.updateVehicule(vehicule).then(() => vehiculesService.findVehiculeById(id)).then((res) => setVehicule(res.data)).then(() => setShowModal(false));
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
            <IonImg src='/assets/image/ugly-car.png'></IonImg>
            { vehicule &&
            <IonList>
                <IonGrid>
                    <IonRow>
                        <IonCol>Marque</IonCol>
                        <IonCol>{vehicule.brand}</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>Modèle</IonCol>
                        <IonCol>{vehicule.model}</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>Prix</IonCol>
                        <IonCol>{vehicule.price}€</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>Immatriculation</IonCol>
                        <IonCol>{vehicule.licenseNumber}</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>Êtat</IonCol>
                        <IonCol>{vehicule.state}</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>Type de véhicule</IonCol>
                        <IonCol>{vehicule.type}</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>Disponiblie</IonCol>
                        <IonCol>{vehicule.available ? 'OUI' : 'NON'}</IonCol>
                    </IonRow>
                </IonGrid>
            </IonList>}
        </IonContent>
        <VehiculeEditModal
            showModal={showModal}
            setShowModal={setShowModal}
            vehicule={vehicule}
            handleChange={handleChange}
            handleModify={handleModify}
            handleChangeCheckbox={handleChangeCheckbox}
        />
        <IonFooter>
            <IonRow>
                <IonCol style={{textAlign: "center"}}>
                    <IonButton color="danger" onClick={supprimerVehicule}>
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
