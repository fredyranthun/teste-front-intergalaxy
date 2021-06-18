import { useState } from "react"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const Banner = (props) => {

    const [bandIndex, SetBandIndex] = useState(0);

    const band = props.data._embedded.attractions[bandIndex]

    const links = [
        {
            socialNetwork: "facebook", icon: <FaFacebook />,
        },
        {
            socialNetwork: "twitter", icon: <FaTwitter />
        },
        {
            socialNetwork: "youtube", icon: <FaYoutube />
        },
        {
            socialNetwork: "instagram", icon: <FaInstagram />
        }
    ]

    const linkIcons = links.map((item, index) => (
        <Button
            className="m-1"
            variant="dark"
            href={band.externalLinks ? band.externalLinks[item.socialNetwork][bandIndex].url : ''}
            key={`${index}link`}
        >
            {item.icon}
        </Button>
    ))

    const bannerImage = (band) => {
        let i = 0;
        while (true) {
            if (band.images[i].width > 500) {
                return band.images[i].url
            }
            i++
        }
    }

    return (
        <div className="d-flex flex-column align-items-center p-4" fluid>
            <img
                className="img-fluid m-4"
                src={bannerImage(band)}
                alt={band.name}
            />

            <div className="d-flex flex-column flex-md-row align-items-center justify-content-md-between container-fluid">
                <h2>{band.name}</h2>
                <div>{linkIcons}</div>
            </div>
        </div>
    )
}

export default Banner