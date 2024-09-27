import { Link, NavLink } from "react-router-dom";
import { SectionContainer } from "../../components";
import styles from "./Header.module.css";
import { Button } from "../../components/Button";

const Header = () => {
  return (
    <SectionContainer
      width="medium"
      tag="header"
      innerClassName={styles.headerContaier}
      wrapperClassName={styles.headerWrapper}
    >
      <div className={styles.logoNavContainer}>
        <Link to="/" className={styles.logo}>
          Brainwave.io
        </Link>
        <nav className={styles.navStyle}>
          <ul>
            <li>
              <NavLink to="/demos">Demos</NavLink>
            </li>
            <li>
              <NavLink to="/demos">Pages</NavLink>
            </li>
            <li>
              <NavLink to="/demos">Support</NavLink>
            </li>
            <li>
              <NavLink to="/demos">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Button>Get started a project</Button>
    </SectionContainer>
  );
};

export { Header };
