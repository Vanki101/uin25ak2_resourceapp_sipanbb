import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const categories = [
    { path: '/html', name: 'HTML' },
    { path: '/css', name: 'CSS' },
    { path: '/javascript', name: 'JavaScript' },
    { path: '/react', name: 'React' },
    { path: '/sanity', name: 'Sanity and headless CMS' }
  ];

  return (
    <nav>
      {categories.map((category) => (
        <NavLink 
          key={category.path}
          to={category.path}
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          {category.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;