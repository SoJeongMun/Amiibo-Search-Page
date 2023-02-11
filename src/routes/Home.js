import { useState, useEffect, useMemo } from 'react'
import SortBox from 'components/SortBox'

function Home() {
  const [amiibo, setAmiibo] = useState([])
  const [loading, setLoading] = useState(true)

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
    () => amiibo.filter((update) => update.release.jp === '2015-07-30'),
    [amiibo],
  )

  return (
    <div className='relative h-screen'>
      {loading ? (
        'Loading...'
      ) : (
        <div>
          <SortBox filterAmiibos={filterAmiibos} />
        </div>
      )}
    </div>
  )
}

export default Home
