import Image from 'next/image'
import styles from './page.module.css'

import Slideshow from './components/Slideshow/Slideshow.component'

export default function Home() {
  return (
    <div>
      <Slideshow />
    </div>
  )
}
