import React, { Component } from 'react'
import Aux from './Hoc/Auxilliary';
import MainPage from './content/mainpage/mainpage'

class App extends Component{
  render(){
    return(
      <Aux>
        <MainPage />
    </Aux>
    )
  }
}

export default App;
