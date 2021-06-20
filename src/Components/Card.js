import { useState } from "react"
import Button from 'react-bootstrap/Button'
import './Card.scss'

const Card = (props) => {
    const [videoOpen, setVideoOpen] = useState(false)

    const handleClick = e => {
        e.preventDefault();
        setVideoOpen(true)
    }

    const toggleClose = e => {
        e.preventDefault();
        setVideoOpen(prevState => !prevState)
    }


    return (
        <div className="card-container d-flex flex-column flex-md-row d-4 m-2">
            {
                !videoOpen ?
                    <div className="video-container ratio ratio-16x9">
                        <img
                            src={props.src}
                            alt={props.alt}
                            className="image-card image-fluid m-2"
                        />
                    </div> :
                    <div className="video-container ratio ratio-16x9">
                        <iframe
                            title={`${props.title}-video`}
                            allowFullScreen
                            className="frame image-fluid m-2"
                            src={props.video}
                        >
                            <p>Your Browser does not support Iframe.</p>
                        </iframe>
                    </div>
            }

            <div className="card-description m-2">
                <button className="card-link" onClick={handleClick}>{props.title}</button>
                <p className="text-link" >{props.description}</p>
                <Button className="button-link" variant='dark' onClick={toggleClose}>{videoOpen ? 'Close Video' : 'Open Video'}</Button>
            </div>

        </div>
    )
}

export default Card