import React ,{ Fragment,useState,useEffect } from "react";
import axios from 'axios';

function Gallery(){
  const [data,setData] = useState([]);

  // similaire à "componentDidMount" et "componentDidUpdate"

  useEffect(() => {
    const fetchData = async () => {
    const result = await axios( 'https://jsonplaceholder.typicode.com/photos',
    );
    setData(result.data);
    };
    fetchData();
  })

  return(
    <Fragment className="to-picture">
        <ul>
          {data.slice(0, 6).map(item =>(
                  <div key = {item.id}>
                      { <img src={item.thumbnailUrl} alt={item.title}/>}
                  </div>
                 )
               )
           }
        </ul>
    </Fragment>
  )
}
export default Gallery;





