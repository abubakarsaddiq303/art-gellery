import react, { useState, useEffect } from "react";
import { createClient } from "pexels";
import search1 from "./magnifying-glass.png";
import search2 from "./gallery.png";
import "./App.css";
import { Pagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";

// import "bootstrap/dist/css/bootstrap.min.css";

function Fetchapi() {
  const [image1, setImage] = useState([]);
  const [search, setSearch] = useState("beautiful");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (e) => {
    // const image = await fetch('https://api.pexels.com/v1/curated?per_page=1"563492ad6f91700001000001929f59b90b0943c6bea996c79659a42a')

    // const Image = await image.json();
    // console.log(Image)
    // setImage(Image)
    var query;
    console.log("123");
    const client = createClient(
      "563492ad6f91700001000001929f59b90b0943c6bea996c79659a42a"
    );

    if (e) {
      query = e;
    } else query = search;
    await client.photos.search({ query, per_page: 80 }).then((photos) => {
      setImage(photos);
      console.log(photos);
    });
  };

  console.log(image1);
  console.log(search);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchData();
      console.log("do validate");
    }
  };

  const handlepageClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <div className="header">
        <a href="/">
          <img src={search2} alt="search" class="ArtIcon" />
        </a>
        <h2>
          <a className="Gallery" href="/">
            {" "}
            Art Gallery{" "}
          </a>{" "}
        </h2>

        <div class="navbar">
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <br />

      <br />

      <div className="Search">
        <input
          //   value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={"Search Images"}
          onKeyDown={handleKeyDown}
        />

        <img
          src={search1}
          alt="search"
          class="icon"
          onClick={(e) => fetchData()}
        />
      </div>

      <div className="All">
        <ul className="Items ">
          <li
            className="item"
            onClick={async (e) => {
              await fetchData("Art");
            }}
          >
            Art
          </li>

          <li
            className="item"
            onClick={async (e) => {
              await fetchData("culture");
            }}
          >
            Culture
          </li>

          <li
            className="item"
            onClick={async (e) => {
              await fetchData("Sports");
            }}
          >
            Sports
          </li>
          <li
            className="item"
            onClick={async (e) => {
              await fetchData("Travel");
            }}
          >
            Travel
          </li>
          <li
            className="item"
            onClick={async (e) => {
              await fetchData("nature");
            }}
          >
            Nature
          </li>

          <li
            className="item"
            onClick={async (e) => {
              await fetchData("animals");
            }}
          >
            Animals
          </li>

          <li
            className="item"
            onClick={async (e) => {
              await fetchData("Photography");
            }}
          >
            Photography
          </li>
          <li
            className="item"
            onClick={async (e) => {
              await fetchData("Fashion");
            }}
          >
            Fashion
          </li>

          <li
            className="item"
            onClick={async (e) => {
              await fetchData("comic");
            }}
          >
            Comic
          </li>

          <li
            className="item"
            onClick={async (e) => {
              await fetchData("flowers");
            }}
          >
            Flowers
          </li>

          <li
            className="item"
            onClick={async (e) => {
              await fetchData("love");
            }}
          >
            Love
          </li>
        </ul>
      </div>

      {/* <button style={{marginLeft:'38rem'}} onClick={fetchData}><h5 >Fetch Api </h5> </button>
      <br/> */}

      <div class="row">
        {image1.length !== 0
          ? image1.photos.map((item) => {
              return (
                <div className="category" key={item.id}>
                  {/* <p>{item.name}</p> */}
                  <img
                    alt="image"
                    src={item.src.medium}
                    className="imagegrid"
                  />
                </div>
              );
            })
          : null}
      </div>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        pageCount={10}
        marginPagesDisplayed={2}
        onPageChange={handlepageClick}
      />
    </div>
  );
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
