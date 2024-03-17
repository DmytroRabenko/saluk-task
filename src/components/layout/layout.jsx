import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../main/header/header';
import Footer from '../main/footer/footer';
import s from './layout.module.scss';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className={s.wrapper}>
            <Outlet/>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
