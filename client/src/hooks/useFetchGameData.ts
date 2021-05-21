import axios from 'axios'
import { useEffect, useState } from 'react'
import { getGameRelevantData } from '../api/GamesAPI'

/**
 * Custom hook used to fetch data from a game identified by the given id
 * @param gameId the game id to fetch data from
 * @returns an object containing all the relevant game data and a pending state
 */
export default function useFetchGameData(
  gameId: string
): {
  isPending: boolean
  name: string
  platforms: {
    id: number
    name: string
  }[]
  developers: {
    id: number
    company: { name: string }
  }[]
  publishers: { id: number; company: { name: string } }[]
  firstReleaseDate: Date
  releaseDates: {
    id: number
    date: number
    platform: { name: string }
  }[]
  storyLine: string
  summary: string
  artworks: {
    id: number
    url: string
  }[]
  screenshots: {
    id: number
    url: string
  }[]
  websites: {
    id: number
    url: string
  }[]
} {
  const [isPending, setIsPending] = useState(true)
  const [name, setName] = useState('')
  const [platforms, setPlatforms] = useState<{ id: number; name: string }[]>([])
  const [developers, setDevelopers] = useState<
    { id: number; company: { name: string } }[]
  >([])
  const [publishers, setPublishers] = useState<
    { id: number; company: { name: string } }[]
  >([])
  const [firstReleaseDate, setFirstReleaseDate] = useState(new Date())
  const [releaseDates, setReleaseDates] = useState<
    { id: number; date: number; platform: { name: string } }[]
  >([])
  const [storyLine, setStoryLine] = useState('')
  const [summary, setSummary] = useState('')
  const [artworks, setArtworks] = useState<{ id: number; url: string }[]>([])
  const [screenshots, setScreenShots] = useState<{ id: number; url: string }[]>(
    []
  )
  const [websites, setWebsites] = useState<{ id: number; url: string }[]>([])

  useEffect(() => {
    const source = axios.CancelToken.source()
    getGameRelevantData(gameId, source.token)
      .then((res) => {
        if (res.data[0].name) setName(res.data[0].name)
        if (res.data[0].platforms) setPlatforms(res.data[0].platforms)
        if (res.data[0].involved_companies)
          setDevelopers(
            res.data[0].involved_companies.filter(
              (involvedCompany: { developer: boolean }) =>
                involvedCompany.developer
            )
          )
        if (res.data[0].involved_companies)
          setPublishers(
            res.data[0].involved_companies.filter(
              (involvedCompany: { publisher: boolean }) =>
                involvedCompany.publisher
            )
          )
        if (res.data[0].first_release_date)
          setFirstReleaseDate(new Date(res.data[0].first_release_date * 1000))
        if (res.data[0].release_dates)
          setReleaseDates(res.data[0].release_dates)
        if (res.data[0].storyline) setStoryLine(res.data[0].storyline)
        if (res.data[0].summary) setSummary(res.data[0].summary)
        if (res.data[0].artworks) setArtworks(res.data[0].artworks)
        if (res.data[0].screenshots) setScreenShots(res.data[0].screenshots)
        if (res.data[0].websites) setWebsites(res.data[0].websites)
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
  }, [gameId])

  return {
    isPending,
    name,
    platforms,
    developers,
    publishers,
    firstReleaseDate,
    releaseDates,
    storyLine,
    summary,
    artworks,
    screenshots,
    websites,
  }
}
