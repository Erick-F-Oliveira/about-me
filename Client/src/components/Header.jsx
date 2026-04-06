const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Ercik F. O</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <a className="btn btn-accent">+Sobre mim</a>
          </li>
          <li>
            <a>Projetos</a>
          </li>
          <li>
            <a>Contatos</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
