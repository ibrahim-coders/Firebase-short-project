import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { createContext, useEffect, useState } from 'react';

import {
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { auth } from './FireBase/firebase.console';
export const AuthContext = createContext();

const MainLayout = () => {
  const [user, setUser] = useState(null);
  const google = new GoogleAuthProvider();
  const github = new GithubAuthProvider();
  const twitter = new TwitterAuthProvider();
  const handleGooglelogin = () => {
    signInWithPopup(auth, google)
      .then(result => {
        setUser(result.user);
      })
      .catch(error => {
        console.log('ERROR', error);
      });
    console.log('google');
  };

  //github
  const handleGithublogin = () => {
    signInWithPopup(auth, github).then(result => {
      setUser(result.user);
    });

    console.log('github');
  };
  const handleTwitterLogin = () => {
    signInWithPopup(auth, twitter).then(result => {
      setUser(result.user);
      console.log(result);
    });

    console.log('twitter');
  };

  useEffect(() => {
    console.log('user loging', user);
  }, []);

  const authData = {
    handleGooglelogin,
    handleGithublogin,
    handleTwitterLogin,
  };

  return (
    <div>
      <AuthContext.Provider value={{ authData }}>
        <Navbar />
        <Outlet />
        <Footer />
      </AuthContext.Provider>
    </div>
  );
};

export default MainLayout;
