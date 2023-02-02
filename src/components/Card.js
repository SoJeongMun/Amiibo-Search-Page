function Card({ card }) {
    return (
            <div key={ card.tail }>
                <p className="title">{ card.name }</p>
                <img src={ card.image } alt='card' />
            </div>
    );
}

export default Card;