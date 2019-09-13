import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
  const [newGoal, setGoal] = useState('');

  const goalHandler = (enteredText) => {
    setGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(newGoal);
    setGoal('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputBox}>
        <TextInput
          placeholder='Your goal...'
          style={styles.inputGoal}
          onChangeText={goalHandler}
          value={newGoal}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title='Add' onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' color="red" onPress={props.onCancelGoal} />
          </View>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  inputBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputGoal: {
    width: '80%',
    borderBottomColor: 'aliceblue',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;