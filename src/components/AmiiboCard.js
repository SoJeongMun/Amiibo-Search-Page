import { useMemo, useState } from 'react'

function AmiiboCard({ filterAmiibos, getCardPopup, cardPopup }) {
  const [search, setSearch] = useState('')

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }
  const searched = useMemo(
    () =>
      filterAmiibos.filter((elements) =>
        elements.name?.match(new RegExp(search, 'gi')),
      ),
    [filterAmiibos, search],
  )
  const deleteInput = () => {
    setSearch('')
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
        value={search}
        onChange={onChangeSearch}
      />
      {search.length ? (
        <button type='button' className='delete-btn' onClick={deleteInput}>
          X
        </button>
      ) : null}
      {searched.map((amiibo) => (
        <div key={amiibo.tail}>
          <p className='title'>{amiibo.name}</p>
          <img
            id={amiibo.tail}
            src={amiibo.image}
            alt='amiiboCard'
            onClick={openPopup}
          />
        </div>
      ))}
    </div>
  )
}

export default AmiiboCard
