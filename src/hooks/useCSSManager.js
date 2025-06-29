import { useEffect, useRef } from "react";

function useCSSManager(cssUrls = [], options = {}) {
  const loadedRef = useRef(new Set());
  const { preload = false, removeOnUnmount = true } = options;

  useEffect(() => {
    const loadCSS = (href) => {
      return new Promise((resolve, reject) => {
        // Check if already loaded
        if (loadedRef.current.has(href)) {
          resolve();
          return;
        }

        // Check if already exists in DOM
        const existingLink = document.querySelector(`link[href="${href}"]`);
        if (existingLink) {
          loadedRef.current.add(href);
          resolve();
          return;
        }

        // Create new link element
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;

        link.onload = () => {
          loadedRef.current.add(href);
          resolve();
        };

        link.onerror = () => {
          console.error(`Failed to load CSS: ${href}`);
          reject(new Error(`Failed to load CSS: ${href}`));
        };

        document.head.appendChild(link);
      });
    };

    // Preload CSS files
    if (preload) {
      cssUrls.forEach((url) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "style";
        link.href = url;
        document.head.appendChild(link);
      });
    }

    // Load all CSS files
    const loadPromises = cssUrls.map(loadCSS);
    Promise.all(loadPromises).catch(console.error);

    // Cleanup function
    return () => {
      if (removeOnUnmount) {
        const currentLoaded = loadedRef.current;
        cssUrls.forEach((href) => {
          const link = document.querySelector(`link[href="${href}"]`);
          if (link && document.head.contains(link)) {
            document.head.removeChild(link);
          }
          currentLoaded.delete(href);
        });
      }
    };
  }, [cssUrls, preload, removeOnUnmount]);

  return loadedRef.current;
}

export default useCSSManager;
