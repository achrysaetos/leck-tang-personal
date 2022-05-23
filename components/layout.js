import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export const siteTitle = 'Leck Tang';
const name = 'Leck Tang';
const aboutMe = "Hello there! You've reached my personal site and blog. I still have to add styling and resume info, but the blog should be functional."

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {home ? (
      <header className={styles.header}>
        <div class="flex justify-center">
          <div class="w-60 h-60 flex-1">
            <img src="/images/profile.png" class="p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"/>
          </div>
          <div class="px-8 py-4 flex-1">
            <h3 class="font-sans text-4xl">{name}</h3>
            <h4 class="pt-4 leading-snug">{aboutMe}</h4>
            <div class="flex flex-row gap-4 pt-6">
              <a href="https://github.com/achrysaetos">
                <img class="w-8 h-8" src="https://unpkg.com/simple-icons@v6/icons/github.svg" />
              </a>
              <a href="https://www.linkedin.com/in/leck-tang-b15b89171">
                <img class="w-8 h-8" src="https://unpkg.com/simple-icons@v6/icons/linkedin.svg" />
              </a>
              <a href="https://twitter.com/lecktang">
                <img class="w-8 h-8" src="https://unpkg.com/simple-icons@v6/icons/twitter.svg" />
              </a>
            </div>
          </div>
        </div>
      </header>
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