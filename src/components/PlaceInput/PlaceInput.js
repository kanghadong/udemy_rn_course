import React, {Component} from 'react';
import { View, TextInput, StyleSheet, Button, Text } from 'react-native';

class PlaceInput extends Component {
  state = {
    placeName: ''
  }

  componentDidMount() {
    
  }

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="An awesome place3"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeinput}
        />
        <Button 
          title="Add" 
          style={styles.placeButton} 
          onPress={this.placeSubmitHandler} 
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      placeinput: {
        width: '70%'
      },
      placeButton: {
        width: '30%'
      },
});

export default PlaceInput;
