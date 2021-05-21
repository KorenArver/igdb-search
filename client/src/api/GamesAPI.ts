import axios, { AxiosResponse, CancelToken } from 'axios'

/**
 * Sends a request to search for a game by name with the given string in the IGDB database
 * @param searchInput the input string to search the game with
 * @param cancelToken the cancel token used to cancel the request if needed
 * @returns the Promise of the axios response
 */
export async function searchGame(
  searchInput: string,
  cancelToken: CancelToken
): Promise<AxiosResponse<{ id: number; name: string }[]>> {
  return axios.get(`/games/search/${searchInput}`, { cancelToken: cancelToken })
}

/**
 * Sends a request to get relevant data for the game identified by the given id in the IGDB database
 * @param gameId the game id to search for in the IGDB database
 * @param cancelToken the cancel token used to cancel the request if needed
 * @returns the Promise of the axios response
 */
export async function getGameRelevantData(
  gameId: string,
  cancelToken: CancelToken
): Promise<
  AxiosResponse<
    {
      name: string
      platforms: {
        id: number
        name: string
      }[]
      involved_companies: {
        id: number
        company: {
          name: string
        }
        developer: boolean
        publisher: boolean
      }[]
      first_release_date: number
      release_dates: {
        id: number
        date: number
        platform: {
          name: string
        }
      }[]
      storyline: string
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
    }[]
  >
> {
  return axios.get(`/games/${gameId}/relevantInfo`, {
    cancelToken: cancelToken,
  })
}
