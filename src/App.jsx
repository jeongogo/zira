import React, { useEffect, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ErrorBoundary  } from 'react-error-boundary';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import useStore from "./store/store";
import Loader from "./components/shared/common/Loader";
import ErrorFallback from './ErrorFallback';
import './App.css';

const Home = React.lazy(() => import('./pages/home/HomePage'));
const Login = React.lazy(() => import('./pages/auth/LoginPage'));
const Register = React.lazy(() => import('./pages/auth/RegisterPage'));
const Schedule = React.lazy(() => import('./pages/schedule/HomePage'));
const TaskHome = React.lazy(() => import('./pages/task/HomePage'));
const TaskDetail = React.lazy(() => import('./pages/task/DetailPage'));
const Request = React.lazy(() => import('./pages/request/HomePage'));
const Notification = React.lazy(() => import('./pages/notification/HomePage'));
const ProjectHome = React.lazy(() => import('./pages/project/HomePage'));
const ProjectDetail = React.lazy(() => import('./pages/project/DetailPage'));
const Mypage = React.lazy(() => import('./pages/mypage/HomePage'));
const Preferences = React.lazy(() => import('./pages/preferences/HomePage'));

function App() {
  const navigate = useNavigate();
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate('/login');
      } else {
        setUser(currentUser);
      }
    });
  }, [user]);

  return (
    <>
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={(details) => {console.log(details)}}>
      <Routes>
        <Route path="/" element={<Suspense fallback={<Loader />}><Home /></Suspense>} />
        <Route path="/login" element={<Suspense fallback={<Loader />}><Login /></Suspense>} />
        <Route path="/register" element={<Suspense fallback={<Loader />}><Register /></Suspense>} />
        <Route path="/schedule" element={<Suspense fallback={<Loader />}><Schedule /></Suspense>} />
        <Route path="/task" element={<Suspense fallback={<Loader />}><TaskHome /></Suspense>} />
        <Route path="/task/:id" element={<Suspense fallback={<Loader />}><TaskDetail /></Suspense>} />
        <Route path="/request" element={<Suspense fallback={<Loader />}><Request /></Suspense>} />
        <Route path="/notification" element={<Suspense fallback={<Loader />}><Notification /></Suspense>} />
        <Route path="/project" element={<Suspense fallback={<Loader />}><ProjectHome /></Suspense>} />
        <Route path="/project/:id" element={<Suspense fallback={<Loader />}><ProjectDetail /></Suspense>} />
        <Route path="/mypage" element={<Suspense fallback={<Loader />}><Mypage /></Suspense>} />
        <Route path="/preferences" element={<Suspense fallback={<Loader />}><Preferences /></Suspense>} />
      </Routes>
    </ErrorBoundary>
    </>
  );
}

export default App;
