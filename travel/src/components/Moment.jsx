import React from "react"

export default function Moment(props){
    return (
        <div className="flexRow moment">
            <div className="moment--img" style={{backgroundImage: `url(${props.info.img})`}}></div>
            <div className="moment--info">
                <div className="flexRow moment--location">
                    <img src="../../public/images/loc.png" />
                    <div className="city">{props.info.location}</div>
                    <a href={props.info.googleUrl}><div className="google">View on Google Maps</div></a>
                </div>
                <h1>{props.info.title}</h1>
                <p><strong>{props.info.startDay} - {props.info.endDay}</strong></p>
                <p className="moment--description">{props.info.description}</p>
            </div>
        </div>
    );
}