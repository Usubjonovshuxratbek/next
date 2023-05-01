import styles from '@/styles/Home.module.scss'
import Image from 'next/image'

export default function HomeMain() {
    return (
        <section className={styles.main}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.right}>
                        <span></span>
                        <h2>Build & manage distributed teams like no one else.</h2>
                    </div>
                    <div className={styles.left}>
                        <div className={styles.blocks}>
                        <div className={styles.block}>
                                <div className={styles.img}>
                                    <Image src="/img/block-img.svg" width={72} height={72} alt='block' />
                                </div>
                                <div className={styles.text}>
                                    <h4>Experienced Individuals</h4>
                                    <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                                </div>
                            </div>
                            <div className={styles.block}>
                                <div className={styles.img}>
                                    <Image src="/img/block-img.svg" width={72} height={72} alt='block' />
                                </div>
                                <div className={styles.text}>
                                    <h4>Experienced Individuals</h4>
                                    <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                                </div>
                            </div>
                            <div className={styles.block}>
                                <div className={styles.img}>
                                    <Image src="/img/block-img.svg" width={72} height={72} alt='block' />
                                </div>
                                <div className={styles.text}>
                                    <h4>Experienced Individuals</h4>
                                    <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                                </div>
                            </div>
                            <div className={styles.block}>
                                <div className={styles.img}>
                                    <Image src="/img/block-img.svg" width={72} height={72} alt='block' />
                                </div>
                                <div className={styles.text}>
                                    <h4>Experienced Individuals</h4>
                                    <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
