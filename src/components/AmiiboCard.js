import { useMemo, useState } from 'react'

function AmiiboCard({ filterAmiibos, getCardPopup, cardPopup }) {
  const [userInput, setUserInput] = useState('')

  const onChangeSearch = (e) => {
    setUserInput(e.target.value)
  }
  const searchedList = useMemo(
    () =>
      filterAmiibos.filter((elements) =>
        elements.name?.match(new RegExp(userInput, 'gi')),
      ),
    [filterAmiibos, userInput],
  )
  const deleteInput = () => {
    setUserInput('')
  }

  const openPopup = (e) => {
    cardPopup = e.target.id
    getCardPopup(cardPopup)
  }

  return (
    <div className='container'>
      <input
        type='text'
        placeholder='검색어를 입력해주세요.'
        value={userInput}
        onChange={onChangeSearch}
      />
      {userInput.length ? (
        <button type='button' className='delete-btn' onClick={deleteInput}>
          ❌
        </button>
      ) : null}
      {searchedList.map(({ tail, name, image }) => (
        <div key={tail}>
          <p className='title'>{name}</p>
          <img id={tail} src={image} alt='amiiboCard' onClick={openPopup} />
        </div>
      ))}
    </div>
  )
}

export default AmiiboCard
