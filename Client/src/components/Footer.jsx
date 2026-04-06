import { BsDiscord, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <p>Feito com ❤️</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <span className="text-2xl">
          <BsDiscord />
        </span>
        <span className="text-2xl">
          <BsLinkedin />
        </span>
      </nav>
    </footer>
  );
};
export default Footer;
