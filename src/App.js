import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './Auth/RequireAuth';
import useFirebase from './Hooks/useFirebase';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import SignIn from './Pages/Login/SignIn/SignIn';
import SignUp from './Pages/Login/SignUp/SignUp';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import { NotFound } from './Shared/NotFound/NotFound';
export const AuthContext = createContext(null)
function App() {
  const {user, isAuth, setIsAuth} = useFirebase();
  return (
    <>
    <AuthContext.Provider value={{user, isAuth, setIsAuth}}>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/checkout' element={<RequireAuth><CheckOut /></RequireAuth>} />
          <Route path='/service-detail/:serviceId' element={<ServiceDetails />} />

          {/* route for 404 */}
          <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthContext.Provider>
    </>
  );
}

export default App;
