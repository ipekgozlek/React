import {Outlet, NavLink} from "react-router";

const NewView = () => {
  return (
  <>
    <h2>New View Sayfası</h2>
    <Outlet />
    <nav>
        <NavLink to="/haberler/ekonomi"> Ekonomi</NavLink>
        <NavLink to="/haberler/spor"> Spor</NavLink>
    </nav>
  </>
  );
};

export default NewView;