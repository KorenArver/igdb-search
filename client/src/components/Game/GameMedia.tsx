import SwiperCore, { Navigation, Pagination } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import '../../style/Game/GameMedia.css'

// Installs the needed Swiper modules
SwiperCore.use([Pagination, Navigation])

/**
 * Defines the types of the GameHeader props
 */
interface GameMediaProps {
  screenshots: { id: number; url: string }[]
  artworks: { id: number; url: string }[]
}

/**
 * Component displaying the media part of the game page
 * @param props the component props
 * @returns the JSX element displaying the component
 */
export default function GameMedia(props: GameMediaProps): JSX.Element {
  return (
    <div className="GameMedia">
      <Swiper
        centeredSlides
        slidesPerView={2}
        spaceBetween={16}
        slidesPerGroup={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          '768': {
            slidesPerView: 4,
          },
        }}
      >
        {props.screenshots.concat(props.artworks).map((media) => (
          <SwiperSlide key={media.id}>
            <img
              src={media.url.replace('thumb', '1080p')}
              alt="Game media image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
