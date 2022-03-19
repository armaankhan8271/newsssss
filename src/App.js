import React from 'react'
import { useState, } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [news, setnews] = useState([])
  const fetchapi = ()=>{

    axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=244a57cba4074bb6b77448759c41c90f")
      .then((response) => {
        console.log(response.data);
        setnews(response.data.articles);
      });
  

  }
  
  return (
    <div className='c'>
<div className='container fs-1 btn btn-info my-5 f2-bold ' > New App</div>
      <div className='container my-3'>
        <button className='btn btn-primary' onClick={fetchapi}>Fetch</button>
      </div>

      <div className='container'>
        <div className='row'>
          {
            news.map((value)=>{
              return(
                <div className='c col-3'>
          <div className="card" style={{width: "18rem"}}>
  <img src={value.urlToImage}className="c card-img-top" alt="..."/>
  <div className="c card-body">
    <h5 className=" c card-title">{value.title}</h5>
    <p className=" ccard-text">{value.description}.</p>
    <a href={value.url} target="_blank" className="btn btn-primary">More</a>
  </div>
</div>
          </div>

              );
            })
          }
        </div>
      </div>
        



 </div>


   
  );
}

export default App;
