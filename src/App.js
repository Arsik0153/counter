import React from 'react';
import Counter from './components/Counter';

class App extends React.Component{
  constructor(props){
    super(props);

    this.min = 0;
    this.max = 5;
  }

  render(){
    return(
      <div>
        <Counter min={this.min} max={this.max}/>
      </div>
    )
  }
}

export default App;
