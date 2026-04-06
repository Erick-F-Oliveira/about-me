import CardProjects from "../../components/CardProjects";
const Projects = () => {
      const projects = [
            {
                  title: "Projeto 1",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  technologies: ["React", "Node.js", "Express", "MongoDB"],
                  private: true,
                  status: "Em desenvolvimento"
                  
            },
            {
                  title: "Projeto 2",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.2",
                  technologies: ["Vue.js", "Python", "Django"],
                  private: false,
            },
            {
                  title: "Projeto 3",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.3",
                   technologies: ["Vue.js", "Python", "Django"],
                    private: false,
            }
      ]
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