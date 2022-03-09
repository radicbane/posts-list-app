import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    requestData()
  }, [])

  async function requestData() {
    try {
      const response = await fetch(url)
      const json = await response.json()
      setData(json)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  return [data, loading, error]
}

export default useFetch
