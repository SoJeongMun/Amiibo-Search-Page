import { useRef, useState } from 'react'
import AmiiboCard from '../components/AmiiboCard'
import CardPopup from '../components/CardPopup'

function SortBox({ filterAmiibos }) {
  const optionList = [
    {
      idx: '0',
      name: '오름차순',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      idx: '1',
      name: '내림차순',
      sorter: (a, b) => b.name.localeCompare(a.name),
    },
    { idx: '2', name: '업데이트순', sorter: (a, b) => a.tail - b.tail },
  ]

  const amiiboData = filterAmiibos.map(({ name, image, tail }) => ({
    name,
    image,
    tail,
  }))

  const [amiiboList, setAmiiboList] = useState(amiiboData)

  const onChange = (e) => {
    const userSelect = e.target.value
    const option = optionList.find((el) => el.idx === userSelect)
    const selectedOption = amiiboData.sort(option.sorter)
    setAmiiboList(selectedOption)
  }

  const open = useRef()
  const [clickedCard, setClickedCard] = useState('')

  const clickedImg = filterAmiibos.find((el) => el.tail === clickedCard)
  const getClickedCard = (clickedCard) => {
    setClickedCard(clickedCard)
  }

  return (
    <div>
      <CardPopup img={clickedImg?.image} ref={open} />
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
