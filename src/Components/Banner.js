import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Button from 'react-bootstrap/Button'
import './Banner.scss'


const Banner = (props) => {

    const bandIndex = 0;

    let band
    try {
        band = props.data._embedded.attractions[bandIndex]
    } catch (error) {
        band = false;
    }

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
            href={band && band.externalLinks && band.externalLinks[item.socialNetwork] ? band.externalLinks[item.socialNetwork][bandIndex].url : ''}
            key={`${index}link`}
        >
            {item.icon}
        </Button>
    ))

    const bannerImage = (band) => {
        if (!band.images[0]) {
            return
        }
        let i = 0;
        while (true) {
            if (band.images[i].width > 500) {
                return band.images[i].url
            }
            i++
        }
    }

    return (band && (
            <div className="d-flex flex-column align-items-center p-4">
                <img
                    className="img-fluid m-4 banner-image"
                    src={bannerImage(band)}
                    alt={band.name}
                />

                <div className="banner-title d-flex flex-column flex-md-row align-items-center justify-content-md-between container-fluid" >
                    <h2 className="main-title">{band.name}</h2>
                    <div>{linkIcons}</div>
                </div>
            </div>
        )
    )
}

export default Banner