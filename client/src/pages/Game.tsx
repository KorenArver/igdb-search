import { useHistory, useParams } from 'react-router-dom'
import leftArrow from '../assets/leftArrow.svg'
import searchIcon from '../assets/searchIcon.svg'
import GameContent from '../components/Game/GameContent'
import GameHeader from '../components/Game/GameHeader'
import GameMedia from '../components/Game/GameMedia'
import useFetchGameData from '../hooks/useFetchGameData'
import '../style/Game/Game.css'

/**
 * Component displaying the game page in the application
 * @returns the JSX element displaying the component
 */
export default function Game(): JSX.Element {
  const history = useHistory()
  const { gameId } = useParams<{ gameId: string }>()
  const gameData = useFetchGameData(gameId)

  /**
   * Handles the back button click
   */
  const handleBack = () => {
    history.goBack()
  }

  /**
   * Handles the search button click
   */
  const handleSearch = () => {
    history.push('/')
  }

  return (
    <div className="Game">
      {gameData.isPending ? null : (
        <>
          <div className="GameBackIcon" onClick={handleBack}>
            <img src={leftArrow} alt="back icon" />
          </div>
          <div className="GameSearchIcon" onClick={handleSearch}>
            <img src={searchIcon} alt="search icon" />
          </div>
          <GameHeader
            name={gameData.name}
            platforms={gameData.platforms}
            firstReleaseDate={gameData.firstReleaseDate}
            backgroundScreenshot={
              gameData.screenshots.concat(gameData.artworks)[
                Math.floor(
                  Math.random() *
                    gameData.screenshots.concat(gameData.artworks).length
                )
              ]
            }
          />
          <GameMedia
            screenshots={gameData.screenshots}
            artworks={gameData.artworks}
          />
          <GameContent
            summary={gameData.summary}
            storyline={gameData.storyLine}
            developers={gameData.developers}
            publishers={gameData.publishers}
            websites={gameData.websites}
            platforms={gameData.platforms}
            releaseDates={gameData.releaseDates}
          />
        </>
      )}
    </div>
  )
}
