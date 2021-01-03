import React from "react";

function Food({name, picture}){
  return <div>
    <h1>I like {name}</h1>
    <img src={picture} />
    </div>;
}

const foodILike=[
  {
    name : "Kimchi",
    image:"https://static.toiimg.com/thumb/66440952/road-trip.jpg?width=1200&height=900"
  },
  {
    name: "Samgyeopsal",
    image: "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg"
  },
  {
    name: "Bibimbap",
    image: "https://retreatmi.com/files/destinations-logo/5e5224aa3718e.jpg"
  },
  {
    name: "Doncasu",
    image: "https://img.koreatimes.co.kr/upload/newsV2/images/201907/788cde395d2b40beac45010ce455522c.jpg/dims/resize/740/optimize"
  },
  {
    name: "Kimbap",
    image: "https://cdn.mos.cms.futurecdn.net/rwow8CCG3C3GrqHGiK8qcJ-1200-80.jpg"
  }];

function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food name={dish.name} picture={dish.image}/>)) }
    </div>
  );
}

export default App;
