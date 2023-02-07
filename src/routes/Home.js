import { useState, useEffect, useMemo } from 'react'
import AmiiboCard from '../components/AmiiboCard'
import CardPopup from '../components/CardPopup'
import '../Style.scss'

function Home() {
  const [amiibo, setAmiibo] = useState([])
  const [loading, setLoading] = useState(true)
  const [clickedCard, setClickedCard] = useState('')

  const getAmiibo = async () => {
    try {
      const res = await (
        await fetch(
          'https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Animal%20Crossing&type=card',
        )
      ).json()
      setAmiibo(res.amiibo)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getAmiibo()
  }, [])

  const filterAmiibos = useMemo(
    () =>
      amiibo
        .filter((update) => update.release.jp === '2015-07-30')
        .map(({ name, image, tail }) => ({ name, image, tail }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    [amiibo],
  )

  const clickedImg = filterAmiibos.find((el) => el.tail === clickedCard)
  const getClickedCard = (clickedCard) => {
    setClickedCard(clickedCard)
  }

  return (
    <div className='main'>
      <div className='contents'>
        {loading ? (
          'Loading...'
        ) : (
          <div>
            <CardPopup img={clickedImg?.image} />
            <AmiiboCard
              filterAmiibos={filterAmiibos}
              getClickedCard={getClickedCard}
              clickedCard={clickedCard}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
