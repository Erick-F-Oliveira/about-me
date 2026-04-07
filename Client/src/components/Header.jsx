import {Link} from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Erick F. O
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-4 items-center">
          <li>
            <Link to="/about">+Sobre mim</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <Link to="/contacts">Contatos</Link>
          </li>
         <li>
    <label className="flex cursor-pointer gap-2 items-center">
      <span className="label-text">🌙</span>
      <input
        type="checkbox"
        value="emerald"
        className="toggle theme-controller"
      />
      <span className="label-text">☀️</span>
    </label>
  </li>

</ul>
      </div>
    </div>
  );
};
export default Header;
