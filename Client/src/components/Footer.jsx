import { BsDiscord, BsLinkedin, BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <p>Feito com ❤️</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
          <BsDiscord />
        </a>
        <a href="https://www.linkedin.com/in/erick-f-oliveira/" target="_blank" rel="noopener noreferrer" className="text-2xl">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Erick-F-Oliveira" target="_blank" rel="noopener noreferrer" className="text-2xl">
          <BsGithub />
        </a>
      </nav>
    </footer>
  );
};
export default Footer;
