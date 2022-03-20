import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Dogs | Home</title>
                <meta name='keywords' content='dogs'/>
            </Head>
            <div>
                <h1 className={styles.title}>Home</h1>
                <p className={styles.text}>Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated. There are different studies that suggest that this happened between 15.000 and 100.000 years before our time. </p>
                <p className={styles.text}>Dogs have lived and worked with humans in many roles. In addition to the roles dog serve as companion animals, they have been bred for herding livestock (collies, sheepdogs), hunting (hounds, pointers) and rodent control (terriers). Other types of working dogs include search and rescue dogs, detection dogs trained to detect illicit drugs or chemical weapons; guard dogs; dogs who assist fishermen with the use of nets; and dogs that pull loads.</p>
                <Link href={'/dogs'}>
                    <a className={styles.btn}>See Dogs</a>
                </Link>
            </div>
        </>
    )
}
