import * as React from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Theme from '../constants/Theme'

import layout from '../constants/Layout'
//Material Design
import { Badge, Button, Modal, Portal, Avatar } from 'react-native-paper';


export default class HomeScreen extends React.Component {

  state = {
    visible: false,
  };


  _showModal = () => this.setState({ visible: true });
  _hideModal = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
    return (
      <View style={styles.container}>
        <Portal>
          <Modal style={styles.modal} visible={visible} onDismiss={this._hideModal}>
            <View style={styles.modalContainer}>
              <Text>Example Modal</Text>
              <Button mode="contained" size={50} onPress={() => this._hideModal()}>hide</Button>
            </View>
          </Modal>
        </Portal>
        <ScrollView style={styles.container}>

          {/* Avatar Top */}
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={{
              uri:
                'data:image/jpeg;base64,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',
            }} />
          </View>



          {/* Get Tickets */}

        </ScrollView>


      </View >
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: layout.window.height,
    backgroundColor: Theme.Black,
  },

  avatarContainer: {
    height: layout.window.height * .3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: Theme.Green,
    borderRadius: 100,
    width: 150,
    height: 150,

  },
  CreateButton: {
    width: 100,
  },
  modal: {
    flex: 1,
  },
  modalContainer: {

    height: '100%',
    padding: 8,
    backgroundColor: '#ffffff',
  }



});
