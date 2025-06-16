"use client";

import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function ScrollReveal({ 
  children, 
  animation = 'scroll-reveal', 
  threshold = 0.1, 
  rootMargin = '-50px 0px',
  className = '',
  ...props 
}) {
  const { targetRef, hasIntersected } = useIntersectionObserver({ 
    threshold, 
    rootMargin 
  });

  return (
    <div 
      ref={targetRef}
      className={`${animation} ${hasIntersected ? 'visible' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// Componentes específicos para diferentes tipos de animación
export function ScrollRevealLeft({ children, ...props }) {
  return (
    <ScrollReveal animation="scroll-reveal-left" {...props}>
      {children}
    </ScrollReveal>
  );
}

export function ScrollRevealRight({ children, ...props }) {
  return (
    <ScrollReveal animation="scroll-reveal-right" {...props}>
      {children}
    </ScrollReveal>
  );
}

export function ScrollRevealScale({ children, ...props }) {
  return (
    <ScrollReveal animation="scroll-reveal-scale" {...props}>
      {children}
    </ScrollReveal>
  );
}

export function ScrollRevealUp({ children, ...props }) {
  return (
    <ScrollReveal animation="scroll-reveal" {...props}>
      {children}
    </ScrollReveal>
  );
} 