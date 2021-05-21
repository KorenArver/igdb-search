import { useHistory, useParams } from 'react-router-dom'
import searchIcon from '../assets/searchIcon.svg'
import useFetchSearchResult from '../hooks/useFetchSearchResult'
import '../style/SearchResult.css'

/**
 * Defines the types of the SearchResult props
 */
interface ParamTypes {
  searchInput: string
}

/**
 * Component displaying the search result page in the application
 * @returns the JSX element displaying the component
 */
export default function SearchResult(): JSX.Element {
  const history = useHistory()
  const { searchInput } = useParams<ParamTypes>()
  const resultGames = useFetchSearchResult(searchInput)

  /**
   * Handles the search button click
   */
  const handleSearch = () => {
    history.push('/')
  }

  /**
   * Handles the click on a row of the result table
   * @param gameId the game id associated to the table row
   */
  const handleRowClick = (gameId: number) => {
    history.push(`/game/${gameId}`)
  }

  return (
    <div className="SearchResult">
      {!resultGames.isPending && (
        <>
          <table>
            <thead>
              <tr>
                <th>Results</th>
              </tr>
            </thead>
            <tbody>
              {resultGames.resultGames.map((game) => {
                return (
                  <tr key={game.id} onClick={() => handleRowClick(game.id)}>
                    <td>{game.name}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className="SearchResultSearchIcon" onClick={handleSearch}>
            <img src={searchIcon} alt="search icon" />
          </div>
        </>
      )}
    </div>
  )
}
