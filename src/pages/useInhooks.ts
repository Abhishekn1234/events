import { useEffect, useRef, useState, RefObject } from "react";

export default function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = {}
): [RefObject<T | null>, boolean] {

  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, options);

    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);

  return [ref, isVisible];
}

