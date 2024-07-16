import './App.css';
import Container from './components/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Container />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
