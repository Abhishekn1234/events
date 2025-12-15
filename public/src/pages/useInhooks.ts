import { useEffect, useRef, useState, RefObject } from "react";

export default function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = {}
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      options
    );

    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
      observer.disconnect();
    };
  }, [options]);

  return [ref, isVisible];
}
