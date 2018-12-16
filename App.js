import React from 'react';
import Navigator, * as ReactNative from 'react-native';
import TaskList from './TaskList';
// import Navigation from 'react-native-deprecated-custom-components';


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
           task: 'Learn react native',
         },
         {
           task: 'Learn redux',
         }
       ]
    };
  }
  
  // onAddStarted() {
  //   this.nav.push({
  //     name: 'taskform'
  //   })
  // }

  // renderScene(route, nav) {
  //   switch(route.name) {
  //     case 'taskform':
  //       return (<Text> Add form goes here! </Text>);

  //     default:
  //       return (
  //         <TaskList 
  //           todos={this.state.todos}
  //           onAddStarted = {this.onAddStarted.bind(this)} 
  //         />
  //     );
  //   }
  // }

  render() {
    return (

      <TaskList 
            todos={this.state.todos}
            onAddStarted = {this.onAddStarted.bind(this)} 
          />

      // <Navigator 
      //   initialRoute = {{ name : 'tasklist', index: 0 }}
      //   ref = {((nav) => {
      //     this.nav = nav; 
      //   })}
      //   renderScene = {this.renderScene.bind(this)}
      // />
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
