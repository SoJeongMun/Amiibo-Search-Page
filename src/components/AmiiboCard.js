import { useMemo, useState } from 'react'
import CardPopup from './CardPopup'

function AmiiboCard({ filterAmiibos }) {
  const [search, setSearch] = useState('')
  const [cardPopup, setCardPopup] = useState(false)

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

  const openPopup = () => {
    setCardPopup(!cardPopup)
  }
  // const openModal = () => {
  // 	getCardModal(!cardModal)
  // };

  return (
    <div className='container'>
      <input
        type='text'
        placeholder='검색어를 입력해주세요.'
        value={search}
        onChange={onChangeSearch}
      />
      {search.length > 0 ? (
        <button className='delete-btn' onClick={deleteInput}>
          X
        </button>
      ) : null}
      {searched.map((amiibo) => {
        return (
          <div key={amiibo.tail}>
            <p className='title'>{amiibo.name}</p>
            <img src={amiibo.image} alt='amiiboCard' onClick={openPopup} />
            {/* TODO : 클릭한 이미지의 모달만 열리게 만들기 */}
          </div>
        )
      })}
      {cardPopup === true ? <CardPopup image={filterAmiibos.image} /> : null}
    </div>
  )
}

export default AmiiboCard
