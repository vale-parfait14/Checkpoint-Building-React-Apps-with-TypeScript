





///CODE DE BASE 
/* import React, { Component } from 'react'; 
class Counter extends Component { 
state = {
 count: 0
 }; increment = () => {
 this.setState({ count: this.state.count + 1 }); 
}; 
render() { 
return 
( <div> 
<p>Count: {this.state.count}</p> 
<button onClick={this.increment}>Increment</button> 
</div> );
 }
 } 
export default Counter;
 */


///CODE CONVERTI EN TYPESCRIPT



import React, { Component } from 'react';

// Définir une interface pour l'état
interface CounterState {
  count: number;
}

// Utiliser les types dans la classe
class Counter extends Component<{}, CounterState> {
  // Initialiser l'état avec le type approprié
  state: CounterState = {
    count: 0,
  };

  // Méthode d'incrémentation avec le type approprié
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Compte : {this.state.count}</p>
        <button onClick={this.increment}>Incrément</button>
      </div>
    );
  }
}

export default Counter;




