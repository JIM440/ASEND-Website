import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

// +++++++++++ pages +++++++++++
import Home from './pages/home';
import About from './pages/about';
import Concours from './pages/concours';
import Services from './pages/services';
import NotFound from './pages/notfound/NotFound';
import MedicineTab from './pages/concours/components/MedicineTab';
import EngineeringTab from './pages/concours/components/EngineeringTab';
import VetAgricTab from './pages/concours/components/VetAgricTab';
import AllConcours from './pages/concours/components/AllConcours';

// +++++++++++ layout +++++++++++

import RootLayout from './common/Layout/RootLayout';

// +++++++++++ Routes +++++++++++

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* Home */}
      <Route index element={<Home />} />

      {/* About */}
      <Route path="about" element={<About />} />
      {/* Concours */}
      <Route path="concours" element={<Concours />}>
        <Route index element={<AllConcours />} />
        <Route path="engineering" element={<EngineeringTab />} />
        <Route path="medicine" element={<MedicineTab />} />
        <Route path="agriculture" element={<VetAgricTab />} />
      </Route>
      {/* sercices */}
      <Route path="services" element={<Services />} />
      {/* not found */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

// used to scroll to top whenever a page is changed

function App() {
  return <RouterProvider router={router} />;
}

export default App;
