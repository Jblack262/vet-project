import SkelCard from '../components/SkelCard';

const Load = ({data , columns, selectPet}) => {
    return (
        <div className="cardContainer">
            {data.map((pet) => {
                return (
                    <SkelCard/>
                )
            })}
            {/* {
                [...Array(columns - (data.length % columns))].map((element, index) => { //gets the remainder of cards that should be left to make the flexbox follow a grid pattern
                    if (data.length % columns !== 0) {
                        return (
                            <div key={index} className="card empty" />
                        )
                    } else {
                        return null;
                    }
                })
            } */}
        </div>
    )
}

export default Load
