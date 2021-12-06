import react, { useState, useEffect } from "react";

import { createClient } from "pexels";
import search1 from "./magnifying-glass.png";
import "./App.css";

import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";

// import "bootstrap/dist/css/bootstrap.min.css";
const client = createClient(
  "563492ad6f91700001000001929f59b90b0943c6bea996c79659a42a"
);
function Fetchapi() {
  const [image1, setImage] = useState([]);
  const [search, setSearch] = useState("Photography");
  const [paginate, setpaginate] = useState("");
  var query;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (e) => {
    // const image = await fetch('https://api.pexels.com/v1/curated?per_page=1"563492ad6f91700001000001929f59b90b0943c6bea996c79659a42a')

    // const Image = await image.json();
    // console.log(Image)
    // setImage(Image)

    console.log("123");

    if (e) {
      query = e;
    } else query = search;
    await client.photos.search({ query, per_page: 80 }).then((photos) => {
      setImage(photos);
      console.log(photos);

      setpaginate(photos.next_page);
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

  const pagination = async () => {
    query = "nature";
    await client.photos
      .search({ query, paginate, per_page: 80 })
      .then((photos) => {
        setImage(photos);
        setpaginate(photos.next_page);
      });
  };

  const [{ isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <div>
      <br />
      <br />
      <br />

      <div className={isDark ? "SearchDark" : "Search"}>
        <input
          className={isDark ? "inputDark" : "input"}
          //   value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={"Search Images, wallpapers ..."}
          onKeyDown={handleKeyDown}
        />

        <img
          src={search1}
          alt="search"
          class={isDark ? "iconDark" : "icon"}
          onClick={(e) => fetchData()}
        />
      </div>

      <div className={isDark ? "AllDark" : "All"}>
        <ul className={isDark ? "itemsDark" : "Items "}>
          <li
            className={isDark ? "itemDark" : "item"}
            onClick={async (e) => {
              await fetchData("Wallpapers");
            }}
          >
            Wallpapers
          </li>

          <li
            className="item"
            onClick={async (e) => {
              await fetchData("Film");
            }}
          >
            Film
          </li>

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
              await fetchData("Food & Drink");
            }}
          >
            Food & Drink
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
              await fetchData("Fitness");
            }}
          >
            Fitness
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

          <li
            className="item"
            onClick={async (e) => {
              await fetchData("History");
            }}
          >
            History
          </li>
        </ul>
      </div>

      <div class={isDark ? "rowDark" : "row"}>
        {image1.length !== 0
          ? image1.photos.map((item) => {
              return (
                <div className="category" key={item.id}>
                  {/* <p>{item.name}</p> */}
                  <img
                    alt="image"
                    src={item.src.large2x}
                    className="imagegrid"
                  />
                </div>
              );
            })
          : null}
      </div>

      <div class={isDark ? "paginationDark" : "pagination"}>
        <a href="#">&laquo;</a>
        <a href="#" onClick={pagination}>
          1
        </a>
        <a href="#" onClick={pagination}>
          2
        </a>
        <a href="#" onClick={pagination}>
          3
        </a>
        <a href="#" onClick={pagination}>
          4
        </a>
        <a href="#" onClick={pagination}>
          5
        </a>
        <a href="#" onClick={pagination}>
          6
        </a>
        <a href="#" onClick={pagination}>
          7
        </a>
        <a href="#" onClick={pagination}>
          8
        </a>
        <a href="#" onClick={pagination}>
          9
        </a>
        <a href="#" onClick={pagination}>
          10
        </a>
        <a href="#">&raquo;</a>
      </div>
    </div>
  );
}
export default Fetchapi;

// onPageChange={(e) => fetchData(paginate)}

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
