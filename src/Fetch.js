import React from 'react'
import { useState, } from 'react';
import axios from 'axios';

 function Fetch() {


  const [news, setnews] = useState([]);
  const fnews = () => {

    axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=244a57cba4074bb6b77448759c41c90f")
      .then((response) => {
        console.log(response.data);
        setnews(response.data.article);
      });

  };
  return (


    <>

      <div className='button'>
        <button onClick={fnews} className='fs-1 my-1 btn btn-success '>Fetch</button>
      </div>



      <div className='card '>
        <div className='row'>


          {news.map((value) => {
            return (

              <h1>a</h1>

            );
          })}

        </div>



      </div>








    </>

  );
}
export default Fetch
