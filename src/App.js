import {useState,useEffect} from 'react';
import './App.css';
import TinderCard from 'react-tinder-card'
import data from './data.js'

function App() {

  const [animals, setAnimals] = useState([])
  const [userLike, setUserLike] = useState([])
  const [userDisLike, setUserDisLike] = useState([])
  
  console.log(animals);
  useEffect(() => {
    console.log(data[0].imgURL);
    setAnimals(data)
    //console.log(animals[0].name);
    return data
  },[])


  function swiped(direction,category){
    if(direction === 'right')
      setUserLike(userLike => [...userLike,category])
    else
    setUserDisLike(userDisLike => [...userDisLike,category])
  }
  function leftScreen(name){
    console.log(name)
  }
  console.log(userLike)
  console.log(userDisLike)
  return (
    
    <div className="app">
      <h1>Tinder Cards</h1>
      <div className="container">
      
        {animals.map((animal) => (
            <TinderCard
            key ={animal.name}
            className="swipe"
            //preventSwipe = {['up','down']}
            onSwipe = {(direction) => swiped(direction,animal.category)}
            onCardLeftScreen = {() => leftScreen(animal.name)}
          >
              <div className="card"
                style ={{backgroundImage: `url(${animal.imgURL})`}}>
                <h3>{animal.name}</h3>
              </div>
          </TinderCard>
        ))}
        </div>
    </div>
  );
}

export default App;
