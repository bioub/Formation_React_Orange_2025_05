import { Link, Outlet } from 'react-router';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/about/Romain">About Romain</Link>
        <Link to="/about/Toto">About Toto</Link>
        <Link to="/todos">Todos</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App;