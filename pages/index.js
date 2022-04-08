import Head from 'next/head'
import Footer from '../comps/Footer.js'
import Link from 'next/link'
import styles from './user.module.css';

export const getStaticProps = async () => {

  const res = await fetch('https://vef2-20222-v3-synilausn.herokuapp.com/events');
  const data = await res.json();
  const list = data.items;
  return {
    props: {events: list}
  }
}

let log = false;
export default function Home( {events}) {
  const ISSERVER = typeof window === "undefined";

  if(!ISSERVER) {
      log = localStorage.getItem('loggedIn');
  }
  return (
    <div className={styles.wrap}>
      <h1>EVENTS</h1>
      {events.map(event => (
        <Link href={'/event/'+ event.id} key={event.id}>
          <a>
            <h3>{event.name} </h3>
            <h4>{event.description}</h4>
          </a>
        </Link>
      ))}
      <Footer />
      
      {log && <button class="button" onClick={() => localStorage.setItem("loggedIn", false)}>
            log out
        </button>}
    </div>
  )
}
