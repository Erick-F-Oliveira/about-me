const CardProjects = ({ project }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-lg">
      <div className="card-body">
        {project.private === true ? (
          <span className="badge badge-sm badge-warning">Privado</span>
        ) : (
          <span className="badge badge-sm badge-primary">Público</span>
        )}
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{project.title}</h2>
        </div>
        <span>{project.description}</span>
        <ul className="mt-6 flex flex-col gap-2 text-sm">
          <li>Tecnologias</li>
          {project.technologies &&
            project.technologies.map((tech, index) => (
              <li key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{tech}</span>
              </li>
            ))}
        </ul>
        <div className="badge badge-outline">{project.status}</div>
        <div className="mt-6">
          <button className="btn btn-accent btn-block">Conferir</button>
        </div>
      </div>
    </div>
  );
};
export default CardProjects;
