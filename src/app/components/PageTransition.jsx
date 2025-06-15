'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from '../../styles/PageTransition.module.css';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`${styles.pageTransition} ${isVisible ? styles.visible : ''}`}>
      {children}
    </div>
  );
} 