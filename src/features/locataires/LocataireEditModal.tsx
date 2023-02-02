import { IonButton, IonButtons, IonCheckbox, IonInput, IonItem, IonLabel, IonModal, IonToolbar } from '@ionic/react'
import React, { Dispatch, SetStateAction } from 'react'
import { LocataireModel } from './LocataireModel'

interface Props {
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>
    locataire: LocataireModel
    handleChange: (event: any) => void
    handleModify: () => void
}

export const LocataireEditModal = (props : Props) => {
  return (
    <IonModal isOpen={props.showModal}>
        <IonToolbar>
            <IonButtons slot='start'>
                <IonButton onClick={() => props.setShowModal(false)}>Cancel</IonButton>
            </IonButtons>
        </IonToolbar>
        <form>
            <IonItem>
                <IonLabel>Nom</IonLabel>
                <IonInput onIonChange={props.handleChange} type='text' name='firstname' placeholder={props.locataire.firstname}></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel>Prénom</IonLabel>
                <IonInput onIonChange={props.handleChange} type='text' name='surname' placeholder={props.locataire.surname}></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel>Age</IonLabel>
                <IonInput onIonChange={props.handleChange} type='number' name='age' placeholder={props.locataire.age.toString()}></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel>Date de naissance</IonLabel>
                <IonInput onIonChange={props.handleChange} type='text' name='birthDate' placeholder={props.locataire.birthDate}></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel>Email</IonLabel>
                <IonInput onIonChange={props.handleChange} type='text' name='email' placeholder={props.locataire.email}></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel>Numéro de téléphone</IonLabel>
                <IonInput onIonChange={props.handleChange} type='text' name='phoneNumber' placeholder={props.locataire.phoneNumber}></IonInput>
            </IonItem>
            <IonButton onClick={props.handleModify}>Modifier</IonButton>
        </form>
    </IonModal>
  )
}
