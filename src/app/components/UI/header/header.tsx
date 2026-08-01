import { useRef, type FC } from "react";
import styles from "./header.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, useNavigate } from "react-router";

const Header: FC = () => {
  const navigate = useNavigate();

  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(headerRef.current, {
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      scrollTrigger: {
        trigger: document.body,
        start: 0,
        end: 200,
        scrub: true,
      },
    });
  }, []);

  return (
    <header className={styles.header} ref={headerRef}>
      <section
        className={styles["header__logo-section"]}
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src="/image.jpeg"
          alt="logo"
          className={styles["header__logo-section__logo"]}
        />
        <span className={styles["header__logo-section__title"]}>
          Task System
        </span>
      </section>
      <section className={styles["header__auth-section"]}>
        <Link to="/login">Sign in</Link>
        <Link to="/register">Sign up</Link>
      </section>
    </header>
  );
};

export default Header;
