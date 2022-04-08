import Footer from "../../comps/footer";
import { useRouter } from 'next/router';
import styles from '../user.module.css';

  
export async function getStaticPaths() {
  const res = await fetch('https://vef2-20222-v3-synilausn.herokuapp.com/events');
  const data = await res.json();
  const list = data.items;
  const paths = list.map(item => {
    return {
      params: {
        id: `${item.id}`
      }
    }
  })
  return {
    paths, fallback: false
  }
}

  export const getStaticProps = async (context) => {
    const {params} = context
    const res = await fetch(`https://vef2-20222-v3-synilausn.herokuapp.com/events/${params.id}`);
    const data = await res.json();
    const list = data.items;
    return {
      props: {event: data}
    }
  }
  

  const Events = ({event}) => {
    const registrations = event.registrations;
      return ( 
          <div className={styles.wrap}>
            {event.name}
            <div>Description: {event.description}</div>
            <ul>
      {registrations.map((item, i) => {

        return (
         <li>
          <div>
          <p>{item.name}</p>
             Comment: {item.comment}
          </div>
             </li>
        )
        })}
        </ul>
          <Footer />
          </div>
       ); 
  }
   
  export default Events;