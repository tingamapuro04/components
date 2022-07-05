import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import logo from './logo.svg';
import './App.css';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// class StatefulComponent extends React.Component {
//   // eslint-disable-next-line no-useless-constructor
//   constructor(props) {
//     super(props);
//     // Only change code below this line
//     // Only change code above this line
//   }
//   render() {
//     return (
//       <div>
//         < Welcome name="Adoyo Alphonce Adoyo" />
//         < Welcome name="Adoyo Alphonce Alphonce" />
//         < Welcome name= "Bata" />
//         <Mobutu name=' today'/>
        
//       </div>
//     );
//   }
// };





const Mayowe = (props) => {
  return (
    <div>
      < Welcome />
      <Mobutu />
    </div>
  )
}

class Welcome extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.state = {
      firstName: 'Agwambo'
    }
  }
  render() {
    return (
      <h1>Hello, my name is {this.state.firstName}</h1>

    )
  }
}



const Mobutu = (props) => {
  return (
    <div>
      <p>Nicole doesn't want thank you</p>
      <h1>Hello i am a heading one</h1>
      <ul>
        <li>Adoyo</li>
        <li>Alphonce</li>
        <li>Mobutu</li>
      </ul>
      <img src= { logo } alt='meaningful' className='App-logo'/>
    </div>
  )
};

Mobutu.defaultProps = {name: 'today'}


const root = ReactDOM.createRoot(document.getElementById('mobutu'));
root.render(< Mayowe />)


reportWebVitals();
