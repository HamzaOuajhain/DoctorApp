import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';



export default class CharacterCounter extends React.Component {
constructor(props) {
   super(props);
   this.state = {
    value:''
    };
  }
render(){
   return(
      <View>
        
         <TextInput style ={styles.input}
            multiline = {true}
            numberOfLines = {6}
            maxLength = {255}
            placeholder='Doctor Input'
            value={this.state.value}
            onChangeText={(value) => this.setState({value})}
            />
      
          
         <Text style={{marginBottom: 20 }} >
            Characters Left:{this.state.value.length}/255
         </Text>
      </View>
    )
  }
}  
const styles = StyleSheet.create({
   
   input:{
      borderWidth:1,
      borderRadius: 10,  
      textAlign : 'center',
      borderColor: '#505948', 
      height:150,
      width:350,
      
   }
})