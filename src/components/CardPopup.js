function CardPopup({ img, closePopup, getClosePopup }) {
  const onClick = () => {
    getClosePopup(!closePopup)
  }
  return (
    <div className='card-popup'>
      <div>
        <img src={img} alt='amiiboCard' />
      </div>
      <button type='button' onClick={onClick}>
        닫기❌
      </button>
    </div>
  )
}

export default CardPopup
