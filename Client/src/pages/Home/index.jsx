const Home = () => {
  return (
    <div className="hero bg-base-300 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Oi oi, aqui é Erick</h1>
          <p className="py-6">
            Sou desenvolvedor full-stack usando a linguagem JavaScript, e estou
            sempre em busca de novos desafios e oportunidades para crescer
            profissionalmente. Tenho experiência em desenvolvimento web,
            utilizando tecnologias como React, Node.js e Express. Além de terum
            paixão por RPG (como poderá ver nos meus projetos), também sou um
            entusiasta de tecnologia e inovação. Estou sempre disposto a
            aprender e colaborar em projetos.
          </p>

          <button className="btn btn-primary">Bora lá</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
