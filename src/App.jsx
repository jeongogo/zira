import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary  } from 'react-error-boundary';
import Loader from "./components/shared/common/Loader";
import ErrorFallback from './ErrorFallback';
import './App.css';

const Home = React.lazy(() => import('./pages/home/HomePage'));
const Schedule = React.lazy(() => import('./pages/schedule/HomePage'));
const Task = React.lazy(() => import('./pages/task/HomePage'));

function App() {
  return (
    <>
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={(details) => {console.log(details)}}>
      <Routes>
        <Route path="/" element={<Suspense fallback={<Loader />}><Home /></Suspense>} />
        <Route path="/schedule" element={<Suspense fallback={<Loader />}><Schedule /></Suspense>} />
        <Route path="/task" element={<Suspense fallback={<Loader />}><Task /></Suspense>} />
      </Routes>
    </ErrorBoundary>
    </>
  );
}

export default App;
