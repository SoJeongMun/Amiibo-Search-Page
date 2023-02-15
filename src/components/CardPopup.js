import { useRef } from 'react'

function CardPopup({ img }) {
  const isClose = useRef()
  const onClick = (e) => {
    isClose.current.hidden = true
  }

  return (
    <div
      className='absolute inset-0 z-10 bg-white bg-opacity-[85%] min-w-full min-h-full'
      ref={isClose}
      onClick={onClick}
    >
      <div className='sticky top-[23vh] ml-[39%]'>
        <img src={img} alt='amiiboCard' className='hover:rotate-[15deg]' />
      </div>
    </div>
  )
}

export default CardPopup
