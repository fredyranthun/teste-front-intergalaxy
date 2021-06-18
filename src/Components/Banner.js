import { useState } from "react"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'


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
        <a
            href={band.externalLinks[item.socialNetwork][bandIndex].url}
            key={`${index}link`}
        >
            {item.icon}
        </a>
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
        <div>
            <img
                height={300}
                src={bannerImage(band)}
                alt={band.name}
            />
            <h1>{band.name}</h1>
            {linkIcons}
        </div>
    )
}

export default Banner