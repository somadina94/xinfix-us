import { Fragment } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

import Layout from './components/layout/Layout';
import ErrorModal from './components/UI/ErrorModal';
import Home from './components/pages/Home';
import Plumbing from './components/body/plumbing/Plumbing';
import Heating from './components/body/heating/Heating';
import About from './components/body/about/About';
import ContactUs from './components/body/contact/ContactUs';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorModal />}>
      <Route index element={<Home />} />
      <Route path="plumbing" element={<Plumbing />} />
      <Route path="heating" element={<Heating />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactUs />} />
    </Route>
  )
);

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
      <TawkMessengerReact
        propertyId="643012464247f20fefea5d26"
        widgetId="1gtdseqgd"
      />
    </Fragment>
  );
}

export default App;
