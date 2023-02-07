function CardPopup({ img }) {
  const onClick = () => {
    document.querySelector('.card-popup').classList.add('hidden')
  }

  return (
    <div className='card-popup hidden'>
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
