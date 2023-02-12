import logo from './logo.svg';
import Gallery from './Gallery.js';
// import {Profile} from './Gallery.js';
import './App.css';


function MyButton() {
  return (
    <button>
      I'm a button
      Click me
    </button>
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  {title: 'product1' , local: true},
  {title: 'product2', local: false}
]



function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

function App() {
  return (
    <div className="App">
      
      <header className="New React App">
        
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>the src/App.js</code> and save to reload.
        </p>



        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


        <ul>{shoppingList()}</ul>        
        
      </header>
    </div>
  );


}

function handleClick1(){
  alert('You clicked me!');
}

function shoppingList (){
  const listItems = products.map(
    product =>
      <li
        key = {product.type}

        style=
        {{
          color: product.local ? 'red' : 'black'
        }}

        onClick = {handleClick1}

      >
        {product.title}
      </li>
  )
  return listItems  
}



export default App;
