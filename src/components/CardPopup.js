import { useRef } from 'react'

function CardPopup({ img }) {
  const isClose = useRef()
  const onClick = (e) => {
    isClose.current.hidden = true
  }

  return (
    <div
      className='z-10 absolute inset-0 bg-gray-500 bg-opacity-75 min-w-full min-h-full'
      ref={isClose}
    >
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <img src={img} alt='amiiboCard' />
        <button type='button' onClick={onClick}>
          닫기❌
        </button>
      </div>
    </div>
  )
}

export default CardPopup
