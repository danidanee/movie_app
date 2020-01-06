import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name : "kimchi",
    image:"http://image.auction.co.kr/itemimage/19/b9/2f/19b92f7766.jpg",
    rating : 5
  },
  {
    id:2,
    name : "KimBap",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F60ANBnHjiDU%2Fmaxresdefault.jpg&f=1&nofb=1",
    rating : 4.7
  }
]

function Food({name, picture, rating}){
  return(
    <div>
      <h1>I Love {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture}></img>
    </div>
  );
}

// 타입, 변수가 맞는 지 확인하는 함수
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number
};

function App() {
  return (
    <div className="App">
      {foodILike.map(a => (
        <Food key={a.id} name={a.name} picture={a.image} rating={a.rating}/>
      ))}
    </div>
  );
  
}

export default App;
