import React from 'react';
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi';

function Slideshow({images, name}) {
    console.log(images)
    function imgUrl(index) {
        const ref = images[index].asset._ref;
        return `https://cdn.sanity.io/images/ic8mtd9i/production/${ref.split('-')[1]}-${ref.split('-')[2]}.${ref.split('-')[3]}`;
    }
    const [index, setIndex] = React.useState(0);
    const slideLeft = () => {
        if (index > 0) {
            setIndex(index - 1)
        } else {
            setIndex(images.length - 1)
        }
    }
    const slideRight = () => {
        if (index < images.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }
    return (
        <div>
            <div className="slideContainer">
                <div className="iconContainer left">
                    <BiLeftArrow onClick={() => slideLeft()}/>
                </div>

                {images[index] && <img src={imgUrl(index)} alt={name} />}

                <div className="iconContainer right">
                    <BiRightArrow onClick={() => slideRight()}/>
                </div>
            </div>
            <div className="buttonContainer">
                {images.map((element, i) => { //i is for index
                    return (
                        <button key={i} className={i === index ? "selected" : ""} onClick={() => setIndex(i)} />
                    )
                })}
            </div>
        </div>
    )
}

export default Slideshow
