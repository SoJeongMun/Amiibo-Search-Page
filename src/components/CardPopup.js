import { useRef } from 'react'
import close from 'assets/arrow.png'

function CardPopup({ img }) {
  const isClose = useRef()
  const onClick = (e) => {
    isClose.current.hidden = true
  }

  return (
    <div
      className='absolute inset-0 z-10 bg-white bg-opacity-80 min-w-full min-h-full'
      ref={isClose}
    >
      <div className='absolute top-[20vh] left-1/2 -translate-x-1/2'>
        <button type='button' onClick={onClick} className='w-[25px]'>
          <img src={close} alt='close' />
        </button>
        <img src={img} alt='amiiboCard' />
      </div>
    </div>
  )
}

export default CardPopup
