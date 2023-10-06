import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {  StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { auth, firebaseConfigfirestore} from '../firebase'
import CharacterCounter from './CharacterCounter'

import 'intl';
import 'intl/locale-data/jsonp/en';

import {Fuego} from '../fuego';

import 'firebase/firestore';
import 'firebase/auth';
import { FuegoProvider ,useDocument} from '@nandorojo/swr-firestore'


const HomeScreen = ({route}) => {
  const codebardata = route.params;
  const fuego = new Fuego(firebaseConfigfirestore)
  const navigation = useNavigation([])
  const data = useDocument(`/Patient/${codebardata}`)

  let PatientFirstName=''
  let PatientLastName=''
  let PatientId =''

  let Hospitaldepartment=''
  let PlannedExamination=''
  let Previousnotesandadvices =''
  let BloodPressure=''
  let BodyTemperature=''
  let HeartRate =''
  let DateofAdmission = ''

  
    if(data.data){

       PatientFirstName = data.data.FirstName
       PatientLastName = data.data.LastName
       PatientId = data.data.Id

        Hospitaldepartment=data.data['Hospital department']

        DateofAdmission =data.data['Date of admission']['seconds']
        PlannedExamination=data.data['Planned Examination']['seconds']
        Previousnotesandadvices =data.data['Previous notes and advices']

        BloodPressure=data.data['Vital Parameters']['Blood Pressure']
        BodyTemperature=data.data['Vital Parameters']['Body Temperature']
        HeartRate =data.data['Vital Parameters']['Heart Rate']


       }

       let PlannedExaminationformated = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(PlannedExamination*1000)

       let DateofAdmissionformated = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(DateofAdmission*1000)
     

  const handleSignOut = () => {
    
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    
    <FuegoProvider fuego ={fuego}>
      <Text style = {styles.styleText1}>Patient First Name : {PatientFirstName}</Text>
      <Text style = {styles.styleText}>Patient Last Name :  {PatientLastName}</Text>
      <Text style = {styles.styleText}>Patient Id : {PatientId}</Text>

      <Text style = {styles.styleText}>Date of admission : {DateofAdmissionformated}</Text>
      <Text style = {styles.styleText}>Hospital department : {Hospitaldepartment}</Text>
      <Text style = {styles.styleText}>Planned Examination : {PlannedExaminationformated}</Text>
      <Text style = {styles.styleText}>Previous notes and advices : {Previousnotesandadvices}</Text>

      <View  style={{    borderBottomColor: 'black',    borderBottomWidth: 1,marginVertical:5}}/>
      <View style = {styles.vital}>
      <Text style={{fontWeight: "bold"}}>Vital Parameters</Text>
      </View>
      <View  style={{    borderBottomColor: 'black',    borderBottomWidth: 1,marginVertical:5}}/>
      <Text style = {styles.styleText}>Blood Pressure : {BloodPressure}</Text>
      <Text style = {styles.styleText}>Body Temperature : {BodyTemperature}</Text>
      <Text style = {styles.styleText}>Heart Rate : {HeartRate}</Text>

      
    <View style={styles.container}>
      
      <CharacterCounter style = {{marginTop:100}}/>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
    </FuegoProvider>
  )
}

export default HomeScreen 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#B6B208',
    width: '60%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  styleText1 : {
    marginLeft:30,
    marginTop:60
  },
  styleText : {
    marginLeft:30,
    marginTop:15
  },
  vital :{
    alignItems: 'center'
  }
})
