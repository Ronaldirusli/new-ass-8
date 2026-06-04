/**
 * Main App Component
 *
 * TODO untuk mentee:
 * 1. Import Home page component (setelah dibuat)
 * 2. Render Home component di sini
 * 3. Atau setup routing jika membuat multiple pages
 *
 * Current: Placeholder untuk testing Tailwind setup
 */
import { useState, useEffect } from 'react';
import { Home } from './pages/Home';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };
  //return <h1>Testing</h1>;
  return <Home currentTheme={theme} onToggleTheme={toggleTheme} />;
}

export default App;
