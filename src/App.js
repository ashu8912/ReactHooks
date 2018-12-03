import React from 'react';
import './App.css';
import Hook from './Components/Hooks';
import ThemeContext from './ThemeContext';
class App extends React.Component{
  changeThemeHandler=(event)=>{
    const changedThemeClass=event.target.className.replace('btn btn-','');
    const updatedTheme={...this.state.theme};
    updatedTheme.colorClass=changedThemeClass;
    this.setState({theme:updatedTheme});
  }
  state={
    theme:{
    colorClass:'default',
    changeTheme:this.changeThemeHandler
  }}
  
  render()
  {
    return <ThemeContext.Provider value={this.state.theme}><Hook/></ThemeContext.Provider>;
  }
}



export default App;
