const Card = (props) => {
    return (
        <div>
                <img
                    src={props.src}
                    alt={props.alt}
                />
                {/* <iframe
                width={300}
                src={props.video}
            >
                <p>Your Browser does not support Iframe.</p>
            </iframe> */}
                <h2>{props.title}</h2>
                <p>{props.description}</p>
        </div>
    )
}

export default Card