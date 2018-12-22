import React from 'react';
import * as ReactNative from 'react-native';
import TaskList from './TaskList';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import TaskForm from './TaskForm';

const {
  StyleSheet, 
  View,
  Text 
} = ReactNative;

export default class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       todos: [
         {
           task: 'Learn react native  ',
         },
         {
           task: 'Learn redux  ',
         }
       ]
    };
  }
  
  onAddStarted() {
    this.nav.push({
      name: 'taskform'
    })
  }

  onCancel() {
    console.log("cancelled");
    this.nav.pop();
  }

  onAdd(task) {
    console.log("add a task "+task);
    this.state.todos.push({ task });
    this.setState({ todos : this.state.todos });
    this.nav.pop();
  }

  onDone(todo) {
    console.log("task completed: "+todo);
    const filteredTodos = this.state.todos.filter((filterTodo) => {
      return filterTodo !== todo;
    });
    this.setState({ todos: filteredTodos });
  }

  renderScene(route, nav) {
    switch(route.name) {
      case 'taskform':
        return (
          <TaskForm
            onAdd = {this.onAdd.bind(this)}
            onCancel = {this.onCancel.bind(this)}
           />
        );

      default:
        return (
          <TaskList 
            todos={this.state.todos}
            onDone= {this.onDone.bind(this)}
            onAddStarted = {this.onAddStarted.bind(this)} 
          />
      );
    }
  }

  configureScene() {
    return NavigationExperimental.Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
    return (

      <NavigationExperimental.Navigator 
        configureScene = {this.configureScene}
        initialRoute = {{ name : 'tasklist', index: 0 }}
        ref = {((nav) => {
          this.nav = nav; 
        })}
        renderScene = {this.renderScene.bind(this)}
      />

      // <Text> Hello </Text>
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
