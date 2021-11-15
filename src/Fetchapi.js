import react, { useState,useEffect } from "react";


function Fetchapi(){

    // useEffect(() => {
    //     fetchData();
        
    // }, []);
    const [image1, setImage] = useState([]);

    const fetchData = async () => {
        const image = await fetch('https://api.thecatapi.com/v1/breeds/?api_key=9970f68a-4f40-4895-bb44-078c98f2974a')
        
        const Image = await image.json();
        console.log(Image)
        setImage(Image)
    }
    return(

<div>
         my api<br/>
     <button onClick={fetchData}>Fetch Api  </button>
      <br/>


       {image1.length!==0?image1.map(item=> {
           return(<div className="category" key={item.id}>
               <p>{item.name}</p>
            {/* <img alt="image" src={item.name} /> */}
        </div>
           )
       }):null}

</div>


    )




}
export default Fetchapi;
























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
