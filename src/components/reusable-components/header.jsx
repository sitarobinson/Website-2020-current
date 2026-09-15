import Style from "style-it";
import { Stack, ThemeToggle } from "../export-components";

export default function Header(props) {
  const styles = `
    @keyframes move-circles {
      0%, 100% {
        background-position: 38% 55%, 34% 85%, 0% 36%, 42% 37%, 48% 39%;
      }
      25% {
        background-position: 60% 70%, 20% 60%, 80% 50%, 30% 20%, 70% 80%;
      }
      50% {
        background-position: 15% 40%, 75% 30%, 45% 80%, 85% 65%, 25% 15%;
      }
      75% {
        background-position: 50% 25%, 40% 90%, 10% 60%, 65% 45%, 80% 55%;
      }
    }

    .gradient-bg {
      position: relative;
      padding: 2rem 1.5rem;
      min-width: 38.625rem;
      background-image: radial-gradient(circle at 38% 55%, var(--hero-circle) 0%, var(--hero-circle) 23%,transparent 23%, transparent 78%,transparent 78%, transparent 100%),radial-gradient(circle at 34% 85%, var(--hero-circle) 0%, var(--hero-circle) 7%,transparent 7%, transparent 41%,transparent 41%, transparent 100%),radial-gradient(circle at 0% 36%, var(--hero-circle) 0%, var(--hero-circle) 2%,transparent 2%, transparent 59%,transparent 59%, transparent 100%),radial-gradient(circle at 42% 37%, var(--hero-circle) 0%, var(--hero-circle) 6%,transparent 6%, transparent 21%,transparent 21%, transparent 100%),radial-gradient(circle at 48% 39%, var(--hero-circle) 0%, var(--hero-circle) 8%,transparent 8%, transparent 90%,transparent 90%, transparent 100%), var(--gradient);
      background-size: 200% 200%, 200% 200%, 200% 200%, 200% 200%, 200% 200%, 100% 100%;
      animation: move-circles 70s ease-in-out infinite;
      flex-direction: column;
    }

    .profile-container {
      gap: 2rem;
    }

    .header-img {
      width: 7.5rem;
      height: 7.5rem;
      border-radius: 50%;
      border: 0.25rem solid rgba(255, 255, 255, 0.2);
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
