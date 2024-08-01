///CODE DE BASE

/*
import React from 'react'; 
const Greeting = ({ name }) => { 
return <div>Hello, {name}!</div>;
 };
 export default Greeting;

*/

///CODE CONVERTI EN TYPESCRIPT

import React from 'react';

// Définir une interface pour les props
interface GreetingProps {
  name: string;
}

// Utiliser les types dans le composant
const Greeting: React.FC<GreetingProps> = ({ name }) => { 
  return <div>Bonjour, {name}!</div>;
};

export default Greeting;
