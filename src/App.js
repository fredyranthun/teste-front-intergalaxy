import { useState } from 'react'
import SearchBar from './Components/SearchBar'
import Card from './Components/Card'

import './App.css'
import youtubeApi from './API/YoutubeApi'
import { decode } from 'html-entities'


const App = () => {

  const [videosInfo, SetVideosInfo] = useState([])

  const handleSearch = async query => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: query,
      }
    })
    SetVideosInfo(response.data.items)
    console.log(videosInfo)
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
