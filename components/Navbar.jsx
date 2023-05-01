import styles from '@/styles/Home.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.right}>
                <Link href='/' className={styles.logo}>
                  <Image src="/img/myteam.png" width={159} height={40} alt='logo' />
                </Link>
                <button className={styles.humburger}><Image src="/img/humburger.png" width={20} height={17} alt='humburger' /></button>
                <Link href='/' className={styles.link}>home</Link>
                <Link href='/About' className={styles.link}>about</Link>
              </div>
              <div className={styles.left}>
                <Link href='/Contact' className={styles.link}>contact us</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}