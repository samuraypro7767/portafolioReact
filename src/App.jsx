import { Home } from '../src/components/pages/Home/Home.jsx';
import { Experience } from './components/pages/Experience/Experience.jsx';
import { Routes, Route } from 'react-router-dom';
import { Profile } from './components/pages/Profile/Profile.jsx';
import { Studies } from './components/pages/Studies/Studies.jsx';
import { NotFound } from './components/NotFound/NotFound.jsx';


export const App = () => {
  return (
    <>
      <div> 
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Studies" element={<Studies />} />
          <Route path="/Studies" element={<Studies />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </>
  );
};