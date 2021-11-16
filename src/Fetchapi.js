import react, { useState,useEffect } from "react";
import { createClient } from 'pexels';
import search1 from './magnifying-glass.png'
import './App.css';




function Fetchapi(){

    useEffect(() => {
        fetchData();
        
    }, []);
    const [image1, setImage] = useState([]);
    const [search, setSearch] = useState("");

    const fetchData = async () => {
        // const image = await fetch('https://api.pexels.com/v1/curated?per_page=1"563492ad6f91700001000001929f59b90b0943c6bea996c79659a42a')
        
        // const Image = await image.json();
        // console.log(Image)
        // setImage(Image)


        const client = createClient('563492ad6f91700001000001929f59b90b0943c6bea996c79659a42a');
        const query = 'bikes';

        client.photos.search({ query, per_page: 80 }).then(photos => {setImage(photos);
        console.log(photos)});

    }
console.log(image1)
console.log(search)

    return(

<div>
        <h2 style={{textAlign:'center',textSize:'bold'}}> Art Gallery</h2><br/>

        <br/>
         
         <div className='SearchIcon'>
         <img  src={search1} alt="search" class="icon" />
     
         <input
  value={search}
  onChange={e=>setSearch(e.target.value)}
  placeholder={"Search Images"}
/>
</div>
     {/* <button style={{marginLeft:'38rem'}} onClick={fetchData}><h5 >Fetch Api </h5> </button>
      <br/> */}
     
       <div class="row">
       {image1.length!==0?image1.photos.map(item=> {
           return(<div className="category" key={item.id}>
               {/* <p>{item.name}</p> */}
            <img alt="image" src={item.src.landscape} />
        </div>
           )
       }):null}
         </div>
      </div>


    )




}
export default Fetchapi;


 {/* 563492ad6f91700001000001929f59b90b0943c6bea996c79659a42a */}





















// import react, { useState } from "react";



// function Fetchapi(){

   
//     const [data , setData] = useState ([])

// const apiGet = () =>{


    

//     fetch('https://swapi.dev/api/people')
//     .then(response => response.json())
//     .then(abc => {

        
//         setData(abc)
//      } );

    
// }

// console.log(data)
// return(


// <div>

//       my api<br/>
//       <button onClick={apiGet}>Fetch Api  </button>
//       <br/>
// <div>

// {data.length!==0?
// data.results.map((item,index)=>
// {
//     return(<h1 key={index}>{item.name} ,{item.height},{item. mass}</h1>)
// }):null}

// </div>
       
       

// </div>

// )
// }
// export default Fetchapi;
