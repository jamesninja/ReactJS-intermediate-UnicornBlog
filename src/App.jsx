
// import { Outlet, Link } from 'react-router-dom';
import React ,{ Fragment,useState,useEffect } from "react";
import axios from 'axios';
import "./App.css";
// import Search from "./components/Search";

function App(){
  const [data,setData] = useState([]);

  // similaire à "componentDidMount" et "componentDidUpdate"

  useEffect(() => {
    const fetchData = async () => {
    const result = await axios( 'https://jsonplaceholder.typicode.com/posts',
    );
    setData(result.data);
    };
    fetchData();
  })
  
  return(
    
    <Fragment className ='App-Fra'>
        <div>
          {data.map(item =>(
                  <div key = {item.id}>
                      <p>{item.title} </p>
                      <p>{item.body} </p>
                  </div>
                 )
               )
          }
        </div>
        
    </Fragment>
  )
}
export default App;
