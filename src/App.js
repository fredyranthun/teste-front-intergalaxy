import { useState } from 'react'
import SearchBar from './Components/SearchBar'
import Card from './Components/Card'
import Banner from './Components/Banner'


import './App.css'
import youtubeApi from './API/YoutubeApi'
import { decode } from 'html-entities'
import TicketMasterAPI from './API/TicketMasterAPI'


const App = () => {

  const [videosInfo, SetVideosInfo] = useState([])
  const [panel, setPanel] = useState({})

  const handleSearch = async query => {
    const response = [
      await youtubeApi.get("/search", {
        params: {
          q: query,
        }
      }),
      await TicketMasterAPI.get("attractions.json?", {
        params: {
          keyword: query,
        }
      })]

    SetVideosInfo(response[0].data.items)
    setPanel(response[1])
    console.log(videosInfo)
    console.log(panel)
  }

  const videos = videosInfo.map((item, index) => (
    <Card
      key={`${index}vid`}
      title={decode(item.snippet.title)}
      description={decode(item.snippet.description)}
      src={item.snippet.thumbnails.medium.url}
      alt={`thumbnail: ${item.snippet.title}`}
      video={`https://www.youtube.com/embed/${item.id.videoId}`}
    />
  ))

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch}></SearchBar>
      {panel.data &&
        <Banner data={panel.data}></Banner>
      }
      {videos}
      {/* <SearchResults>
        <Banner></Banner>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </SearchResults> */}
    </div>
  );
}

export default App;
