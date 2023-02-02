import { IonButton, IonButtons, IonCheckbox, IonInput, IonItem, IonLabel, IonList, IonModal, IonToolbar } from '@ionic/react'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { VehiculesModel } from './VehiculesModel'

interface Props {
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>
    vehicule: VehiculesModel
    handleChange: (event: any) => void
    handleModify: () => void
    handleChangeCheckbox: (event:any) => any
}

export const VehiculeEditModal = (props : Props) => {

  return (
    <IonModal isOpen={props.showModal}>
        <IonToolbar>
            <IonButtons slot='start'>
                <IonButton onClick={() => props.setShowModal(false)}>Cancel</IonButton>
            </IonButtons>
        </IonToolbar>
        <form>
        <IonItem>
            <IonLabel>Marque</IonLabel>
            <IonInput onIonChange={props.handleChange} type='text' name='brand' placeholder={props.vehicule.brand}></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel>Modèle</IonLabel>
            <IonInput onIonChange={props.handleChange} type='text' name='model' placeholder={props.vehicule.model}></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel>Etat</IonLabel>
            <IonInput onIonChange={props.handleChange} type='text' name='state' placeholder={props.vehicule.state}></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel>immatriculation</IonLabel>
            <IonInput onIonChange={props.handleChange} type='text' name='licenseNumber' placeholder={props.vehicule.licenseNumber}></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel>Type</IonLabel>
            <IonInput onIonChange={props.handleChange} type='text' name='type' placeholder={props.vehicule.type}></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel>Prix</IonLabel>
            <IonInput onIonChange={props.handleChange} type='number' name='price' placeholder={props.vehicule.price.toString()}></IonInput>
        </IonItem>
        <IonItem>
            <IonCheckbox onIonChange={props.handleChangeCheckbox} checked={props.vehicule.available} name='available'></IonCheckbox>
        </IonItem>
        <IonButton onClick={props.handleModify}>Modifier</IonButton>
        </form>
    </IonModal>
  )
}
