import { NavLink } from "react-router-dom";

const SecondPage = () => {
  return (
    <>
      <h2>Second Page</h2>
      <NavLink to={'/'}>Back to Home page</NavLink>
    </>
  );
};

export default SecondPage;
