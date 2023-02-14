import { useMemo, useState } from 'react'
import AmiiboCard from '../components/AmiiboCard'
import CardPopup from '../components/CardPopup'

function SortBox({ filterAmiibos }) {
  const optionList = [
    { idx: '0', name: '오름차순' },
    { idx: '1', name: '내림차순' },
    { idx: '2', name: '업데이트순' },
  ]

  const sortedAmiibos = useMemo(
    () =>
      filterAmiibos
        .map(({ name, image, tail }) => ({
          name,
          image,
          tail,
        }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    [filterAmiibos],
  )
  const reverseSortedAmiibos = useMemo(
    () =>
      filterAmiibos
        .map(({ name, image, tail }) => ({
          name,
          image,
          tail,
        }))
        .sort((a, b) => b.name.localeCompare(a.name)),
    [filterAmiibos],
  )
  const latestSortedAmiibos = useMemo(
    () =>
      filterAmiibos
        .map(({ name, image, tail }) => ({
          name,
          image,
          tail,
        }))
        .sort((a, b) => a.tail - b.tail),
    [filterAmiibos],
  )

  const [amiiboList, setAmiiboList] = useState(sortedAmiibos)

  const onChange = (e) => {
    const userSelect = e.target.value
    if (userSelect === '0') {
      setAmiiboList(sortedAmiibos)
    } else if (userSelect === '1') {
      setAmiiboList(reverseSortedAmiibos)
    } else {
      setAmiiboList(latestSortedAmiibos)
    }
  }

  const [clickedCard, setClickedCard] = useState('')

  const clickedImg = filterAmiibos.find((el) => el.tail === clickedCard)
  const getClickedCard = (clickedCard) => {
    setClickedCard(clickedCard)
  }

  return (
    <div>
      <CardPopup img={clickedImg?.image} />
      <select onChange={onChange}>
        {optionList.map(({ idx, name }) => (
          <option key={idx} value={idx}>
            {name}
          </option>
        ))}
      </select>
      <AmiiboCard
        amiiboList={amiiboList}
        getClickedCard={getClickedCard}
        clickedCard={clickedCard}
      />
    </div>
  )
}

export default SortBox
