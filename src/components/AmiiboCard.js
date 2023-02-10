import { useMemo, useState } from 'react'

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
    <div className='container text-center'>
      <div className='relative flex stickiy'>
        <input
          className='mt-10 mb-20 w-1/2 focus:outline-none focus:border-b-amber-500 focus:border-b-2'
          type='text'
          placeholder='검색어를 입력해주세요.'
          value={userInput}
          onChange={onChangeSearch}
        />
        {userInput.length ? (
          <button
            type='button'
            className='absolute w-1/4'
            onClick={deleteInput}
          >
            <img src='src/assets/remove' alt='delete' />
          </button>
        ) : null}
      </div>
      <div className='flex flex-wrap justify-around'>
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
