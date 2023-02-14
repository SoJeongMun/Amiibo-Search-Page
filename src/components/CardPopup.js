function CardPopup({ img }) {
  const onClick = () => {
    document.querySelector('.popup').classList.add('hidden')
  }

  return (
    <div className='bg-black/40 hidden popup'>
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
