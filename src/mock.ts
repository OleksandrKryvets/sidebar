import img1 from '@/assets/images-for-cards/1.png'
import img2 from '@/assets/images-for-cards/2.png'
import img3 from '@/assets/images-for-cards/3.png'
import img4 from '@/assets/images-for-cards/4.png'
import img5 from '@/assets/images-for-cards/5.png'
import imgGirl from '@/assets/images-for-cards/girl.png'
import type { BackgroundCardType } from './components/sidebars/change-background/background-cards/components/BackgroundCard'

export const DEFAULT_BACKGROUND_IDEA =
  'Animate glowing rays pulsating from behind the bottle, leaves gently swaying, and golden sparkles floating upward for a natural, radiant effect.'

export const MOCK_CARDS: BackgroundCardType[] = [
  { id: '0gdfsgjndfsjll234',  progress: 25, timeLeft: '1 minute left'},
  { id: '1gdfsgjndfsjll234', overlayImageSrc: img1, },
  { id: '2gdfsgjndfsjll234', overlayImageSrc: img2, frontImageSrc: imgGirl },
  { id: '3gdfsgjndfsjll234', overlayImageSrc: img3, frontImageSrc: imgGirl },
  { id: '4gdfsgjndfsjll234', overlayImageSrc: img4, frontImageSrc: imgGirl },
  { id: '5gdfsgjndfsjll234', overlayImageSrc: img5, frontImageSrc: imgGirl },
]
