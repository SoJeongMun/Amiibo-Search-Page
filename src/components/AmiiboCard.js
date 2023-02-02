function AmiiboCard({ name, image }) {
    return (
            <div className="container">
                <p className="card-title">{ name }</p>
                <img src={ image } alt='card' />
            </div>
    );
}

export default AmiiboCard;