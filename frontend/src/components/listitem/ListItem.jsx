import "./listitem.scss";
import { Link } from "react-router-dom";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const loadRef = useRef();


  const loading = () => {
    loadRef.current.style.opacity = 1;
    loadRef.current.style.visibility = "visible";
  };

  const stoploading = () => {
    loadRef.current.style.opacity = 0;
    loadRef.current.style.visibility = "hidden";
  };

  useEffect(() => {
    const getMovie = async () => {
      try {
        loading();
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/movies/find/` + item,
          {
            headers: {
              token: `Bearer ${
                JSON.parse(localStorage.getItem("user")).accessToken
              }`,
            },
          }
        );
        setMovie(res.data);
        stoploading();
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, []);

  return (
    // <Link to={{ pathname: "/watch", state: movie }}>
    <>
      <div class="loader-container" ref={loadRef}>
        <div class="loader"></div>
      </div>
      
      <Link to="/watch" state={movie}>
        <div
          className="listItem"
          style={{ left: isHovered && index * 230 - 50 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={movie.imgThumbnail} alt="image" />
          {isHovered && (
            <>
              <iframe
                id="ytplayer"
                width="100%"
                height="140px"
                type="text/html"
                // src="https://www.youtube.com/embed/BIhNsAtPbPI?autoplay=1&controls=0&modestbranding=1&fs=0&loop=1&rel=0&iv_load_policy=3"
                src={movie.trailer}
                frameborder="0"
                allowfullscreen
                allow="autoplay;"
              ></iframe>
              <div className="movieinfo">
                <div className="icons">
                  <PlayArrow className="icon" />
                  <Add className="icon" />
                  <ThumbUpAltOutlined className="icon" />
                  <ThumbDownOutlined className="icon" />
                </div>

                <div className="infoTop">
                  <span>{movie.duration}</span>
                  <span className="age">{movie.age}+</span>
                  <span>{movie.year}</span>
                </div>

                <div className="desc">{movie.desc} </div>
                <div className="genre">{movie.genre}</div>
              </div>
            </>
          )}
        </div>
      </Link>
    </>
  );
}

export default ListItem;
