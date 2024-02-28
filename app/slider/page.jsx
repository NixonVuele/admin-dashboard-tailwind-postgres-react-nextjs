// components/Sidebar.js
'use client'
import React, { useState } from 'react';
import styles from './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <button onClick={toggleSidebar} className={styles.toggleButton}>
        Toggle Sidebar
      </button>
      <ul className={styles.menu}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;
