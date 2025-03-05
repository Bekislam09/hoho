import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/app.scss';
import { 
  AboutPage,
} from '../../pages'; 
import { Footer, Header, Breadcrumb } from '../../widgets';

const routesArr = [
  {
    path: '/',
    element: <AboutPage />
  },
];

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Breadcrumb />
      <Routes>
        {routesArr.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
