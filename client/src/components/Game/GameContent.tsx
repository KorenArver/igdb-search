import '../../style/Game/GameContent.css'

/**
 * Defines the types of the GameContent props
 */
interface GameContentProps {
  summary: string
  storyline: string
  developers: {
    id: number
    company: { name: string }
  }[]
  publishers: {
    id: number
    company: { name: string }
  }[]
  websites: {
    id: number
    url: string
  }[]
  platforms: {
    id: number
    name: string
  }[]
  releaseDates: {
    id: number
    date: number
    platform: { name: string }
  }[]
}

/**
 * Component displaying the content part of the game page in the application
 * @param props the component props
 * @returns the JSX element displaying the component
 */
export default function GameContent(props: GameContentProps): JSX.Element {
  return (
    <>
      <div className="GameContent">
        <div className="GameContentAbout">
          <h4>About</h4>
          <p>{props.summary}</p>
          <p>{props.storyline}</p>
        </div>
        <div className="GameContentDetails">
          <div className="GameContentDevelopers">
            <h4>Developers</h4>
            {props.developers.map((developer) => (
              <p key={developer.id}>{developer.company.name}</p>
            ))}
          </div>
          <div className="GameContentPublishers">
            <h4>Publishers</h4>
            {props.publishers.map((publisher) => (
              <p key={publisher.id}>{publisher.company.name}</p>
            ))}
          </div>
          <div className="GameContentPlatforms">
            <h4>Platforms</h4>
            {props.platforms.map((platform) => (
              <p key={platform.id}>{platform.name}</p>
            ))}
          </div>
          <div className="GameContentReleaseDates">
            <h4>Release dates</h4>
            {props.releaseDates.map((releaseDate) => (
              <p key={releaseDate.id}>
                {`${new Date(releaseDate.date * 1000).toLocaleDateString()} - ${
                  releaseDate.platform.name
                }`}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
