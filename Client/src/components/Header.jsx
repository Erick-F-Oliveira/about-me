const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Ercik F. O</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Projetos</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                  <a>Comprar atributos</a>
                </li>
                <li>
                  <a>Itsik</a>
                </li>
                <li>
                  <a>Meu Advento</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Sobre</a>
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
