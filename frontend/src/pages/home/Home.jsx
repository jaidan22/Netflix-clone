import { useState, useEffect } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import axios from "axios";
import { Helmet } from "react-helmet";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token: `Bearer ${
                JSON.parse(localStorage.getItem("user")).accessToken
              }`,
            },
          }
        );
        setLists(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Netflix-Clone</title>
        <meta property="og:site_name" content="Netflix" />
        <meta property="og:title" content="Netflix to Netflix" />
        <meta property="og:url" content="https://netflix.com" />
        <meta
          property="og:image"
          itemprop="image"
          content="https://media.istockphoto.com/photos/remote-control-in-the-foreground-video-on-demand-screen-in-the-blurry-picture-id1200520920?b=1&k=20&m=1200520920&s=170667a&w=0&h=V2bxCRMbVvCXVAsYTmCEW5LgE6Doiwek_jInet-r70c="
        />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Netflix" />
      </Helmet>
      <Navbar />
      {console.log(lists)}
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
