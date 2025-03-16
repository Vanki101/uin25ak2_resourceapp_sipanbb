import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';
import PageTitle from '../PageTitle/PageTitle';
import './Layout.scss';

const Layout = () => {
  return (
    <main>
      <PageTitle title="Ressursarkiv" />
      <Nav />
      <section id="resource-content">
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;