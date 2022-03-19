import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorem earum eius explicabo id iure modi, pariatur quaerat voluptate voluptatem! Assumenda doloremque inventore ipsam, magnam nesciunt rerum ut voluptates voluptatum?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorem earum eius explicabo id iure modi, pariatur quaerat voluptate voluptatem! Assumenda doloremque inventore ipsam, magnam nesciunt rerum ut voluptates voluptatum?</p>
        <Link href={'/dogs'}>
            <a>See dog list</a>
        </Link>
    </div>
  )
}
