import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/Home";
import Nosotros from 'containers/pages/Nosotros';
import Casos from 'containers/pages/Casos';
import Servicios from 'containers/pages/Servicios';
import Carreras from 'containers/pages/Carreras';
import Blog from 'containers/pages/Blog';
import Contacto from 'containers/pages/Contacto';



function App() {
  
  return (

    <Provider store={store}>

      <Router>
        <Routes>
          {/* {Error display} */}
          <Route path="*" element={<Error404 />} />

          {/* {Home display} */}
          <Route path="/" element={<Home />} />
          <Route path="/casos" element={<Casos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/carreras" element={<Carreras />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />

        </Routes>
      </Router>
    </Provider>

  )

}

export default App;
