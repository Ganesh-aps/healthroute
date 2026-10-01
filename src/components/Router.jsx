import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const RouterContext = createContext(null);

export function BrowserRouter({ children }) {
  const [pathname, setPathname] = useState(() => window.location.pathname || '/');
  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname || '/');
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  const navigate = useCallback((to, { replace = false } = {}) => {
    if (replace) window.history.replaceState({}, '', to);
    else window.history.pushState({}, '', to);
    setPathname(window.location.pathname || '/');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  const value = useMemo(() => ({ pathname, navigate }), [pathname, navigate]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function usePathname() {
  return useContext(RouterContext)?.pathname ?? window.location.pathname ?? '/';
}

export function Link({ to, onClick, children, ...props }) {
  const router = useContext(RouterContext);
  return <a href={to} {...props} onClick={event => {
    onClick?.(event);
    if (event.defaultPrevented || !router || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || props.target === '_blank') return;
    const url = new URL(to, window.location.href);
    if (url.origin !== window.location.origin || url.pathname === window.location.pathname && url.hash) return;
    event.preventDefault();
    router.navigate(`${url.pathname}${url.search}${url.hash}`);
  }}>{children}</a>;
}
