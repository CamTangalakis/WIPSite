import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
// import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate, getAllUsers } from './store/session';
import SplashPage from './components/SplashPage/SplashPage';
import HomePage from './components/HomePage/HomePage';
import { getProjects } from './store/project';
import { getFavorites } from './store/favorites';
import { getCategories } from './store/category';
import MakeProjectPage from './components/ProjectPages/CreateProjectModal';
import ProjectPage from './components/ProjectPages/ProjectPage';
import { getAlbums } from './store/album';
import FavPage from './components/Favorites/FavPage';
import SearchResults from './components/Search/searchResults';
import Profile from './components/Profile/profile';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getAllUsers());
      await dispatch(getProjects());
      await dispatch(getCategories())
      await dispatch(getAlbums())
      await dispatch(getFavorites())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (

    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact={true}>
          <SplashPage />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/signup' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/newProject' exact={true}>
          <MakeProjectPage />
        </Route>
        <Route path='/projects/:projectId'>
          <ProjectPage />
        </Route>
        <Route path='/favorites' >
          <FavPage />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/search-results' >
          <SearchResults />
        </Route>
        <Route path='/home' exact={true} >
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
