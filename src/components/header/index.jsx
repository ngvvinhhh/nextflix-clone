import { Link } from "react-router-dom";
import "./index.scss";
import { SearchOutlined } from "@ant-design/icons";
<<<<<<< HEAD

=======
>>>>>>> 360b243975187a587175244ce0741e528f3312c7
function Header() {
  return (
    <header className="header">
      <div className="header__logo">
<<<<<<< HEAD
        <img src="https://movie-eta-sage.vercel.app/assets/movix-logo-d720c325.svg" alt="" />
      </div>
=======
        <img
          src="https://movie-eta-sage.vercel.app/assets/movix-logo-d720c325.svg"
          alt=""
          width={200}
        />
      </div>

>>>>>>> 360b243975187a587175244ce0741e528f3312c7
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Movies</Link>
          </li>
          <li>
            <Link to="/movie-management">Movie Management</Link>
          </li>
          <li>
            <SearchOutlined />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
