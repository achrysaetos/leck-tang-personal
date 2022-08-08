import styles from './layout.module.css';
import Link from 'next/link';
import Greeting from './greeting';
import Resume from './resume';

export const siteTitle = 'Leck Tang';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {home ? (
        <>
          {/* <div className='w-full h-24'>
            <img src='/images/paris_ultrawide.png'/>
          </div> */}
          <Greeting/>
          <Resume/>
        </>
      ) : ""}
      <hr className="mt-10"/>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}