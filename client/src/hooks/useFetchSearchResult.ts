import axios from 'axios'
import { useEffect, useState } from 'react'
import { searchGame } from '../api/GamesAPI'

/**
 * Custom hook used to get the result of a search request associated to the given string
 * @param searchInput the string to search for with the request
 * @returns an object containing the results of the search request and a pending state
 */
export default function useFetchSearchResult(
  searchInput: string
): {
  isPending: boolean
  resultGames: {
    id: number
    name: string
  }[]
} {
  const [isPending, setIsPending] = useState(true)
  const [resultGames, setResultGames] = useState<
    { id: number; name: string }[]
  >([])

  useEffect(() => {
    const source = axios.CancelToken.source()
    searchGame(searchInput, source.token)
      .then((res) => {
        setResultGames(res.data)
        setIsPending(false)
      })
      .catch((error) => {
        if (!axios.isCancel(error)) {
          console.log(error)
        }
      })

    return () => {
      source.cancel('Operation canceled for cleanup')
    }
  })

  return { isPending, resultGames }
}
