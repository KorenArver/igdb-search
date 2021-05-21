import androidLogo from '../../assets/androidLogo.svg'
import iOSLogo from '../../assets/iOSLogo.svg'
import linuxLogo from '../../assets/linuxLogo.svg'
import macLogo from '../../assets/macLogo.svg'
import nintendoSwitchLogo from '../../assets/nintendoSwitchLogo.svg'
import playstationLogo from '../../assets/playstationLogo.svg'
import stadiaLogo from '../../assets/stadiaLogo.svg'
import windowsLogo from '../../assets/windowsLogo.svg'
import windowsPhoneLogo from '../../assets/windowsPhoneLogo.svg'
import xboxLogo from '../../assets/xboxLogo.svg'
import '../../style/Game/GameHeader.css'

/**
 * Defines the types of the GameHeader props
 */
interface GameHeaderProps {
  name: string
  platforms: {
    id: number
    name: string
  }[]
  firstReleaseDate: Date
  backgroundScreenshot: { id: number; url: string }
}

/**
 * Component displaying the header part of the game page
 * @param props the component props
 * @returns the JSX element displaying the component
 */
export default function GameHeader(props: GameHeaderProps): JSX.Element {
  /**
   * Return the path of a platform logo associated to the given platform id
   * @param id the platform id to get the logo for
   * @returns the path of the platform logo or undefined if there's no logo
   */
  const getBrandPlatformLogo = (id: number) => {
    switch (id) {
      case 3: // Linux
        return linuxLogo
      case 6: // PC Windows
        return windowsLogo
      case 9: // Playstation 3
      case 48: // PlayStation 4
      case 167: // Playstation 5
        return playstationLogo
      case 12: // XBox 360
      case 49: // XBox One
      case 169: // XBox Series
        return xboxLogo
      case 14: // Mac
        return macLogo
      case 34: // Android
        return androidLogo
      case 39: // iOS
        return iOSLogo
      case 74: // Windows Phone
        return windowsPhoneLogo
      case 130: // Nintendo Switch
        return nintendoSwitchLogo
      case 170: // Google Stadia
        return stadiaLogo
      default:
        return undefined
    }
  }

  /**
   * Returns an element containing the game platforms information as logos if they're found or names if not.
   * It also makes sure that only one logo is displayed for multiple platforms belonging to the same console series (Xbox, Playstation, ...)
   * @param platforms the game platforms array
   * @returns the JSX element displaying the game platforms information
   */
  const displayGamePlatforms = (
    platforms: {
      id: number
      name: string
    }[]
  ) => {
    const alreadyDisplayedLogos: string[] = []
    return (
      <>
        {platforms.map((platform) => {
          const brandPlatformLogo = getBrandPlatformLogo(platform.id)
          if (!brandPlatformLogo) {
            return (
              <span key={platform.id}>
                {platform.name}
                {platform.id}
              </span>
            )
          } else if (
            brandPlatformLogo &&
            !alreadyDisplayedLogos.includes(brandPlatformLogo)
          ) {
            alreadyDisplayedLogos.push(brandPlatformLogo)
            return (
              <span key={platform.id}>
                <img src={brandPlatformLogo} alt="platform logo" />
              </span>
            )
          }
        })}
      </>
    )
  }

  return (
    <div className="GameHeader">
      <div
        className="GameHeaderBackground"
        style={
          props.backgroundScreenshot && props.backgroundScreenshot.url
            ? {
                backgroundImage: `url(${props.backgroundScreenshot.url.replace(
                  'thumb',
                  '1080p'
                )})`,
              }
            : undefined
        }
      />
      <div className="GameHeaderBackgroundFade" />
      <h1>{props.name}</h1>
      <div className="GameHeaderAdditionalInformation">
        <div className="GameHeaderFirstReleaseDate">
          {new Date(props.firstReleaseDate).toLocaleDateString()}
        </div>
        <div className="GameHeaderPlatforms">
          {displayGamePlatforms(props.platforms)}
        </div>
      </div>
    </div>
  )
}
