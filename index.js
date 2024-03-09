import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function getTitle(title){
  return title;
}


const list =[
  {
    title : "react", 
    url : "https://reactjs.org/",
    num_comments :3 ,
    points :4,
    objectID: 0,
},
{
  title: "Redux",
  url: "https://redux.js.org/",
  author: "Dan Abramov, Andrew Clark",
  num_comments: 2,
  points: 5,
  objectID: 1,
},
];

const Search = () => {
  const handlerChange =(a) => {
    console.log(a)
    console.log(a.target.value)

  }
  return(
    <div>
    <label htmlFor="search">search :</label>
  <input id="search" type="text" onChange={handlerChange} />
  <hr/>
  </div>
  );
};
const List = () => {
  return(
    <ul>
    {list.map((x)=>{
      return(
      <li key={x.objectID}>
      <span>
        <a href={x.url}>{x.title}</a>
      </span>
      <span>
      {x.author}
      </span>
      <span>
        {x.num_comments}
      </span>
      <span>
        {x.points}
      </span>
      </li>
      );
    })}
    </ul>
  );
};

const App = () => {
  const title = "hello"
  return (
  <div>
    <h1>my Hacker stories</h1>
    <Search/>
    <List/>
  </div>
);
};

export default App

/*    Activity 3               
function App() {
  const stri = ["hello", " my","name", "is","selim"];
  const res = stri.reduce(function (accumulator, currentValue) {
  return accumulator +" " + currentValue;
});
 
  const products = [{ id: 1, price: 20 }, { id: 2, price: 30 }, { id: 3, price: 10 }];
  const myNewlist = products.filter(function (product) {
  return product.price < 25;
  });
  
  return (
  <div>
    <h1>filter activity</h1>
  <ul>
  {myNewlist.map(function (product) {
  return (
  <li key={product.id}>
  <span>ID: {product.id}</span>
  <span>Price: {product.price}</span>
  </li>
  );
  })}
  </ul>

  <h1>Reduce Activity</h1>
  <p>The sum of my list is {sum}</p>
  <h1> Exercise 11 Solution</h1>
  <p>{res}</p>
    </div>
  );
}
export default App*/
