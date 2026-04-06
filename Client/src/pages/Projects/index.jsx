import CardProjects from "../../components/CardProjects";
import dataProjects from "../../data/projects.json";
const Projects = () => {
      const projects = dataProjects;
      return(
         <div className="min-h-screen bg-base-300 py-10 px-4">
     <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Meus projetos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
              <CardProjects key={index} project={project} />
            ))}
      </div>
      </div>
      </div>       
          
        

      )
}
export default Projects;