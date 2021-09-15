import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SpaceCrafts extends Component{
    render(){
        return (
            <View style={styles.container}>
              <Text>SpaceCrafts</Text>
            </View>
          );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
