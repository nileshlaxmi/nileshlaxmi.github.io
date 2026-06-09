import { useEffect, useRef } from 'react';

export default function FadeUp({ children, className = '', style, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.classList.add('visible');

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal();
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '-10% 0px' },
      );
      io.observe(el);
      return () => io.disconnect();
    }

    reveal();
  }, []);

  return (
    <div ref={ref} className={`fade-up ${className}`.trim()} style={style} {...props}>
      {children}
    </div>
  );
}
