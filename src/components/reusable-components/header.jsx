import Style from "style-it";
import { Stack, ThemeToggle } from "../export-components";
import HeroFlowers from "./hero-flowers";

export default function Header(props) {
  const styles = `
    .gradient-bg {
      position: relative;
      padding: 2rem 1.5rem;
      min-width: 38.625rem;
      background-image: var(--gradient);
      isolation: isolate;
      overflow: hidden;
      flex-direction: column;
      border-bottom: 0.1875rem solid var(--gold);
    }

    .profile-container {
      gap: 2rem;
    }

    .header-img {
      width: 7.5rem;
      height: 7.5rem;
      border-radius: 50%;
      border: 0.1875rem solid var(--gold);
      box-shadow: 
        0 0.5rem 2rem rgba(0, 0, 0, 0.3),
        0 0 0 0.0625rem rgba(255, 255, 255, 0.1);
      object-fit: cover;
    }

    .text-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .header {
      color: var(--white);
      font-size: 3rem;
      text-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3);
      margin: 0;
      line-height: 1.1;
    }

    .subheader {
      font-weight: 400;
      color: var(--white);
      text-shadow: 0 0.0625rem 0.25rem rgba(0, 0, 0, 0.2);
      margin: 0;
      max-width: 37.5rem;
    }
  `;
  return Style.it(
    styles,
    <header className="gradient-bg flex-center">
      <HeroFlowers />
      <ThemeToggle />
      <Stack spacing="large">
        <div className="profile-container flex-center">
          <img className="header-img" src={props.imgdir} alt="Sita Robinson" />
          <div className="text-content">
            <h1 className="header">{props.header}</h1>
            <p className="subheader">{props.subheader}</p>
          </div>
        </div>
        {props.socialbox}
      </Stack>
    </header>
  );
}
