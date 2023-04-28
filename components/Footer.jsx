import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.info}>
                        <Link href='/' className={styles.logo}>
                            <Image src="/myteam.png" width={159} height={40} alt='logo' />
                        </Link>
                        <div className={styles.block}>
                            <Link href='/' className={styles.link}>home</Link>
                            <Link href='/' className={styles.link}>about</Link>
                        </div>
                    </div>
                    <div className={styles.box}>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <Link href='/'>987  Hillcrest</Link>
                                <Link href='/'>LaneIrvine,</Link>
                                <Link href='/'>CACalifornia 92714Call Us :</Link>
                                <Link href='/'>949-833-7432</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.socialMedia}></div>
                </div>
            </div>
        </footer>
    )
}
