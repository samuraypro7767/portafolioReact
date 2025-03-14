import { Home } from '../src/components/pages/Home/Home.jsx';
import { Experience } from './components/pages/Experience/Experience.jsx';
import { Routes, Route } from 'react-router-dom';
import { Profile } from './components/pages/Profile/Profile.jsx';
import { Studies } from './components/pages/Studies/Studies.jsx';
import { NotFound } from './components/NotFound/NotFound.jsx';
import { Container } from './components/Contaier/Container.jsx';


export const App = () => {
  return (
    <>
      <div> 
        <Container>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Studies" element={<Studies />} />
          <Route path="/Studies" element={<Studies />} />
          <Route path="*" element={<NotFound />} />

        </Routes></Container>
      </div>
    </>
  );
};