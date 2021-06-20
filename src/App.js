import { useState } from 'react'
import SearchBar from './Components/SearchBar'
import Card from './Components/Card'
import Banner from './Components/Banner'
import Container from 'react-bootstrap/Container'
import youtubeApi from './API/YoutubeApi'
import { decode } from 'html-entities'
import TicketMasterAPI from './API/TicketMasterAPI'

import './App.scss'

const App = () => {

  const [videosInfo, SetVideosInfo] = useState([])
  const [panel, setPanel] = useState({})
  const [alert, setAlert] = useState(false)

  const handleSearch = async query => {
    let response;
    try {
      response = [
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
      setAlert(false)
    } catch (e) {
      setAlert(true);
      return
    }

    SetVideosInfo(response[0].data.items)
    setPanel(response[1])
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
    <Container
      fluid
      className={`d-flex flex-column min-vh-100 p-4 align-items-center app-container ${panel.data ?
        'justify-content-between' :
        'justify-content-center'}`}
    >
      <SearchBar onSearch={handleSearch}></SearchBar>

      {
        panel.data &&
        <Banner data={panel.data}></Banner>
      }
      {
        videosInfo && videos
      }
      {
        alert && <div>Ooops! Something went wrong. Try again Later :)</div>
      }
    </Container>
  );
}

export default App;
