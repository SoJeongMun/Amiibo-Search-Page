import { useMemo, useState } from 'react'
import remove from 'assets/remove.png'

function AmiiboCard({
  amiiboList,
  getClickedCard,
  clickedCard,
  isOpen,
  getIsOpen,
}) {
  const [userInput, setUserInput] = useState('')

  const onChangeSearch = (e) => {
    setUserInput(e.target.value)
  }
  const searchedList = useMemo(
    () =>
      amiiboList.filter((elements) =>
        elements.name?.match(new RegExp(userInput, 'gi')),
      ),
    [amiiboList, userInput],
  )
  const deleteInput = () => {
    setUserInput('')
  }

  const openPopup = (e) => {
    clickedCard = e.target.id
    getClickedCard(clickedCard)
    getIsOpen(!isOpen)
  }

  const onClose = () => {
    window.close()
  }
  const moveToSite = () => {
    window.open(
      'https://www.nintendo.co.kr/software/switch/acbaa/index.html',
      '_blank',
    )
  }
  const onRefresh = () => {
    window.location.reload()
  }

  return (
    <div className='text-center'>
      <div className='flex items-center bg-white sticky top-0 z-10 w-full px-10 pt-5 pb-5 shadow'>
        <div className='flex gap-[6px] w-[23%]'>
          <div
            className='w-4 h-4 rounded-full bg-red-500'
            onClick={onClose}
          ></div>
          <div
            className='w-4 h-4 rounded-full bg-yellow-500'
            onClick={moveToSite}
          ></div>
          <div
            className='w-4 h-4 rounded-full bg-green-500'
            onClick={onRefresh}
          ></div>
        </div>
        <input
          className='w-1/2 bg-amber-500 text-white focus:outline-none pt-2 pb-2 px-4 placeholder-white box-border rounded-full'
          type='text'
          placeholder='검색어를 입력해주세요.'
          value={userInput}
          onChange={onChangeSearch}
        />
        {userInput.length ? (
          <button
            type='button'
            className='absolute w-4 top-[40.5%] right-[29.5%]'
            onClick={deleteInput}
          >
            <img src={remove} alt='delete w-full' />
          </button>
        ) : null}
      </div>
      <div className='flex flex-wrap justify-around mt-10'>
        {searchedList.map(({ tail, name, image }) => (
          <div key={tail} className='w-1/5 mx-3 mb-10'>
            <img
              className='w-full h-auto'
              id={tail}
              src={image}
              alt='amiiboCard'
              onClick={openPopup}
            />
            <h4 className='text-xl mt-4 inline-block border-b-2 border-orange-400 px-2 pb-1 hover:text-orange-400'>
              {name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AmiiboCard
