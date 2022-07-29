import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Debounce from './pages/Debounce';
import Hover from './pages/Hover';
import Request from './pages/Request';
import Input from './pages/Input';
import Scroll from './pages/Scroll';
import Layout from './layout/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout />} >
          <Route index element={ <Home /> } />
          <Route path="debounce" element={ <Debounce /> } />
          <Route path="hover"    element={ <Hover />    } />
          <Route path="request"  element={ <Request />  }/>
          <Route path="input"    element={ <Input />    } />
          <Route path="scroll"   element={ <Scroll />   } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
