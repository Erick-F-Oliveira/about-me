const notFound = () => {
  return (
    <div className="hero bg-base-300 min-h-screen">
      <div>
        <p>Erro:</p>
        <h1 className="text-9xl font-bold text-error">404</h1>
        <p>Página não encontrada</p>
      </div>
    </div>
  );
};

export default notFound;
