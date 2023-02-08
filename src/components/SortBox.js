// import { useMemo } from 'react'

function SortBox({ filterAmiibos }) {
  const optionList = [
    { idx: '0', name: '오름차순' },
    { idx: '1', name: '내림차순' },
    { idx: '2', name: '업데이트순' },
  ]

  const test = filterAmiibos.map(({ name, image, tail }) => ({
    name,
    image,
    tail,
  }))

  const sortedAmiibos = () => {
    test.sort((a, b) => a.name.localeCompare(b.name))
  }
  const reverseSortedAmiibos = () => {
    test.sort((a, b) => b.name.localeCompare(a.name))
  }
  const latestSortedAmiibos = () => {
    test.sort((a, b) => a.tail - b.tail)
  }

  const onChange = (e) => {
    const userSelect = e.target.value
    if (userSelect === '0') {
      console.log(sortedAmiibos())
    } else if (userSelect === '1') {
      console.log(reverseSortedAmiibos())
    } else {
      console.log(latestSortedAmiibos())
    }
  }

  return (
    <select onChange={onChange}>
      {optionList.map(({ idx, name }) => (
        <option key={idx} value={idx}>
          {name}
        </option>
      ))}
    </select>
  )
}

export default SortBox
