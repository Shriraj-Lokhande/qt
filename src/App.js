import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
/*import Card from "./components/Card/Card";*/
import { fetchTopAlbums } from "./components/api/api";
import Section from "./components/Sections/Section";

export default function App() {
  const [topAlbumData, settopAlbumData] = useState([]);
  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    console.log(data);
    settopAlbumData(data);
  };
  useEffect(() => {
    generateTopAlbumData();
  }, []);
  console.log(topAlbumData, "topAlbumData");
  return(
    <div className="App">
      <Navbar />
      <Hero />
      <div className="sectionWrapper" >
      <Section type="album" title="Top Albums" data={topAlbumData} />
      </div>
      {/* <div className="cardContainer">
      {topAlbumData.map((item) => {
        return <Card key={item.id} data={item} type="album" />;
      })}
      </div> */}
    </div>
  )
}
