"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import "../styles/page-transition.scss";

interface PageTransitionProps {
  children: React.ReactNode;
}

// NOTE: Next.js App Router already handles routing; we don't use React Router here.
// This component animates old content sliding left out while new content slides in from the right.
export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);
  const [outgoing, setOutgoing] = useState<React.ReactNode | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (pathname === currentPath) return;
    // Move current content to outgoing layer for slide-out
    setOutgoing(children);
    setCurrentPath(pathname); // triggers incoming mount
    // Clear outgoing after animation duration
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setOutgoing(null);
    }, 800); // matches slide animation duration
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div
      className="page-transition-container"
      aria-live="polite"
      aria-busy={!!outgoing}
    >
      {outgoing && (
        <div className="page-transition layer outgoing" data-path={currentPath}>
          {outgoing}
        </div>
      )}
      <div
        key={currentPath}
        className="page-transition layer incoming"
        data-path={currentPath}
      >
        {children}
      </div>
    </div>
  );
}
