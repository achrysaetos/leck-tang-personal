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
          <Greeting/>
          <Resume/>
        </>
      ) : ""}
      <main class="py-4">{children}</main>
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