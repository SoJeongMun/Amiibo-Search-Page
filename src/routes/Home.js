import { useState, useEffect, useMemo } from 'react'
import AmiiboCard from '../components/AmiiboCard'
import CardPopup from '../components/CardPopup'
import '../Style.scss'

function Home() {
  const [amiibo, setAmiibo] = useState([])
  const [loading, setLoading] = useState(true)
  const [cardPopup, setCardPopup] = useState('')
  const [closePopup, setClosePopup] = useState(false)

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
        .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0)),
    [amiibo],
  )

  const clickedCard = filterAmiibos.find((el) => el.tail === cardPopup)
  const getCardPopup = (cardPopup) => {
    setCardPopup(cardPopup)
    setClosePopup(!closePopup)
  }
  const getClosePopup = (closePopup) => {
    setClosePopup(closePopup)
  }

  return (
    <div className='main'>
      <div className='contents'>
        {loading ? (
          'Loading...'
        ) : (
          <div>
            {cardPopup === clickedCard?.tail && closePopup === false ? (
              <CardPopup
                img={clickedCard?.image}
                closePopup={closePopup}
                getClosePopup={getClosePopup}
              />
            ) : null}
            <AmiiboCard
              filterAmiibos={filterAmiibos}
              getCardPopup={getCardPopup}
              cardPopup={cardPopup}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
