import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>Hambee Studio</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
        explicabo.
      </p>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>
      <NavLink to={'/second'}>Second page</NavLink>
    </>
  );
};

export default HomePage;
