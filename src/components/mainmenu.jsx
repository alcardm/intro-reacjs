import { Link } from "react-router-dom";
function MainMenu() {
  return (
    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
      <li>
        <Link to={"/"} className="nav-link px-2 text-secondary">
          Home
        </Link>
      </li>
      <li>
        <Link to={"/cover"} className="nav-link px-2 text-white">
          Ruta 2
        </Link>
      </li>
      <li>
        <Link to={"/rutax"} className="nav-link px-2 text-white">
          Ruta X
        </Link>
      </li>
    </ul>
  );
}
export default MainMenu;
