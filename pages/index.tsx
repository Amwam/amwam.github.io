import * as React from 'react';
import styles from './index.module.css';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <ul>
          <li className={styles['link-item']}>
            Chief Architect EP International @{' '}
            <a href="https://www.ep.com/">Entertainment Partners UK</a>
            <ul>
              <li>Entertainment Partners aquired We Got POP LTD in 2020</li>
            </ul>
          </li>
          <li className={styles['link-item']}>
            Mentor @ <a href="https://codeyourfuture.co/">Code Your Future</a>
          </li>
          <li className={styles['link-item']}>
            Committer @ <a href="https://github.com/Amwam/">GitHub</a>
          </li>
          <li className={styles['link-item']}>
            Tweeter @ <a href="https://twitter.com/Amwam/">Twitter</a>
          </li>  
          <li className={styles['link-item']}>
            Mastadon @ 
 <a rel="me" href="https://mstdn.party/@amwam">Mastodon</a>
          </li>
          <li className={styles['link-item']}>
            Stack Overflow @{' '}
            <a href="https://stackoverflow.com/story/amwam">Stack Overflow</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
