import React from 'react';
import styles from './header.module.css';
import { ReactComponent as GithubLogo } from '../../assets/images/githubLogo.svg';

function Header() {
  return (
    <div className={styles.headerBlock}>
      <div className={styles.header}>
        <div className={styles.logoText}>
          LLVM Transformation Pass
        </div>
        <div>|</div>
        <div className={styles.subText}>
          Save/Load
        </div>
        <div className={styles.subText}>
          A&darr;
        </div>
        <div>|</div>
        <div className={styles.subText}>
          About
        </div>
        <GithubLogo />
      </div>
    </div>
  );
}

export default Header;
