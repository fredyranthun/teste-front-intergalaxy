import { useEffect, useState } from "react"

const Card = (props) => {
    const [videoOpen, setVideoOpen] = useState(false)

    const handleClick = e => {
        e.preventDefault();
        setVideoOpen(true)
    }

    const toggleClose = e => {
        e.preventDefault();
        setVideoOpen(!videoOpen)
    }


    return (
        <div className="d-flex flex-column flex-md-row d-4 m-2 border-bottom" fluid>
            {
                !videoOpen ?
                    <div className="ratio ratio-16x9">
                        <img
                            src={props.src}
                            alt={props.alt}
                            className="image-fluid m-2"
                        />
                    </div> :
                    <div className="ratio ratio-16x9">
                        <iframe
                            allowFullScreen
                            className="image-fluid m-2"
                            src={props.video}
                        >
                            <p>Your Browser does not support Iframe.</p>
                        </iframe>
                    </div>
            }

            <div className="m-2">
                <a href='' onClick={handleClick}><h2>{props.title}</h2></a>
                <p>{props.description}</p>
                <a href='' onClick={toggleClose}>{videoOpen ? 'Close Video.' : 'Open Video.'}</a>
            </div>

        </div>
    )
}

export default Card