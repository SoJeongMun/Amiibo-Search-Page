import { useRef } from 'react'

function CardPopup({ img }) {
  const isClose = useRef()
  const onClick = (e) => {
    isClose.current.hidden = true
  }

  return (
    <div className='bg-black/40' ref={isClose}>
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
