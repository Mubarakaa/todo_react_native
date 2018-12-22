import * as ReactNative from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const {
    Text,
    StyleSheet,
    View,
    TouchableHighlight
} = ReactNative;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  label: {
    fontSize: 20,
    fontWeight: '300'
  },
  doneButton: {
    borderRadius: 5,
    backgroundColor: '#EAEAEA',
    padding: 5
  }
})


class TaskRow extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  onDonePressed() {
    this.props.onDone(this.props.todo);
  }

  render() {
    return (
      <View style = {styles.container} >
        <Text style = {styles.label}> 
          {this.props.todo.task} 
        </Text> 

        <TouchableHighlight
          style = {styles.doneButton}
          onPress = {this.onDonePressed.bind(this)}
        >
          <Text> Done </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

TaskRow.propTypes = {
    onDone: PropTypes.func.isRequired,
    todo: PropTypes.shape({
        task: PropTypes.string.isRequired
    }).isRequired
}

export default TaskRow;