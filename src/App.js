import React from "react";
import MovieList from "./movieList.js";
import Add from "./Add.js";
import { useState } from "react";
import Filter from './filter.js'

const App = () => {
  const [data, setData] = useState([
    {
      img:
        "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
      title: "The Revenant",
      description: "A frontiersman on a fur ",
      rate: 4,
    },
    {
      img:
        "https://images-na.ssl-images-amazon.com/images/I/81V%2Bb69u3xL._SY445_.jpg",
      title: "catch me if you can",
      description: "xwcsdsqdqsdqsdfsdf",
      rate: 2,
    },
    {
      img:
        "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png",
      title: "The Wolf of Wall Street ",
      description: "dfdfdf",
      rate: 8,
    },
    
  ]);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState();
  const [filterName,setFilterName]= useState("")
  const [filterStar,setFilterStar]= useState(10)
  const [filterStar2,setFilterStar2]= useState(0)
  
  const getName = (e) => {
    setName(e.target.value);
  };
  const getImg = (e) => {
    setImg(e.target.value);
  };
  const getDescription = (e) => {
    setDescription(e.target.value);
  };
  const getRate = (e) => {
    setRate(e.target.value);
  };
  const getFilterName = (e) => {
    setFilterName(e.target.value);
  };
  const getFilterStar = (e) => {
    setFilterStar(e.target.value);
  };
  const getFilterStar2 = (e) => {
    setFilterStar2(e.target.value);
  };
  
  const change = () => {
    setData([
      ...data,
      { title: name, img: img, description: description, rate: rate },
    ]);
  };
let arr= data.filter(e=>(filterStar2<=e.rate && e.rate<=filterStar)&&(e.title.toUpperCase().includes(filterName.toUpperCase())))
  return (
    <div style={{ backgroundColor: "grey" }}>
      
      <Add
        getName={getName}
        change={change}
        getImg={getImg}
        getDescription={getDescription}
        getRate={getRate}
      />
         <Filter getFilterName={getFilterName} getFilterStar={getFilterStar} getFilterStar2={getFilterStar2}/>
      <MovieList data={arr} />
    </div>
  );
};
export default App;
