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

  return (
    <div className='text-center'>
      <div className='flex bg-white sticky top-0 z-10 w-full justify-center pt-5 pb-5'>
        <input
          className='w-1/2 bg-amber-500 text-white focus:outline-none pt-2 pb-2 px-4 placeholder-white box-border rounded-full'
          type='text'
          placeholder='검색어를 입력해주세요.'
          value={userInput}
          onChange={onChangeSearch}
        />
        {/* <input
          className='w-1/2 focus:outline-none focus:border-b-amber-500 focus:border-b-2 hover:border-b-amber-500 hover:border-b-2'
          type='text'
          placeholder='검색어를 입력해주세요.'
          value={userInput}
          onChange={onChangeSearch}
        /> */}
        {userInput.length ? (
          <button
            type='button'
            className='absolute w-4 top-[43%] right-1/4'
            onClick={deleteInput}
          >
            <img src={remove} alt='delete w-full' />
          </button>
        ) : null}
      </div>
      <div className='flex flex-wrap justify-around mt-5'>
        {searchedList.map(({ tail, name, image }) => (
          <div key={tail} className='w-1/4 mx-3 mb-5'>
            <img
              className='w-full h-auto'
              id={tail}
              src={image}
              alt='amiiboCard'
              onClick={openPopup}
            />
            <p className='title'>{name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AmiiboCard
