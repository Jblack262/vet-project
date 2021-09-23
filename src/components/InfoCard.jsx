import React from 'react'

function InfoCard({title, content}) {
    return (
        <div className="infoCard">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default InfoCard
