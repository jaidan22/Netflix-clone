import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Featured(type) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandom = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/movies/random?type=${type}`, {
          headers: {
            token:
              `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandom();
  }, [type]);

  let imgs = [
    "https://raw.githubusercontent.com/jaidan22/netflix-clone-frontend/main/src/images/dark-knight-bg.jpg?token=GHSAT0AAAAAABUQTZSF2GTMGXRRBYEVLFBKYXDJUKQ",
    "https://raw.githubusercontent.com/jaidan22/netflix-clone-frontend/main/src/images/dark-knight-title.jpeg?token=GHSAT0AAAAAABUQTZSE5CNGNIDIYCPWRDZQYXDJU3A",
  ];

  return (
    <div className="featured">
      {type.type && (
        <div className="category">
          <span>{type.type === "movies" ? "Movies" : "TV Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Adventure</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

      <img src={content.img} alt="user" width="100%" />
      <div className="info">
        {console.log(content)}
        <img src={content.imgTitle} alt="movie" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <Link to="/watch" state={content}>
              <span>Play</span>
              </Link>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
