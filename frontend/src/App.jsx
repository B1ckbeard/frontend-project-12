import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { UserContextProvider } from './context/context';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import routes from './routes';

const App = () => (
  <UserContextProvider>
    <Router>
      <Routes>
        <Route path={routes.loginPage()} element={<LoginPage />} />
        <Route path={routes.signupPage()} element={<SignupPage />} />
        <Route path={routes.errorPage()} element={<ErrorPage />} />
        <Route path={routes.mainPage()} element={<MainPage />} />
      </Routes>
    </Router>
    <ToastContainer />
  </UserContextProvider>
);

export default App;
