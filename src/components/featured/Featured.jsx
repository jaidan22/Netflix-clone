import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import movieimg from "../../images/dark-knight-title.jpeg";
import moviebg from "../../images/dark-knight-bg.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

function Featured(type) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandom = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk1NmJmYTUwYWRjNTEzYzRiNjU3ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzgxMDUzOSwiZXhwIjoxNjQ0MjQyNTM5fQ.8KS5Jmq2ymaQ_VUUp7aEENmz9oZnhAtCsWe0lzPJ6h0",
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandom();
  }, [type]);
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

      <img src={content.imgThumbnail} alt="user" width="100%" />
      <div className="info">
        {console.log(content)}
        <img src={content.imgTitle} alt="movie" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
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
