import "../index.css";
import {
  Header,
  NavbarandContent,
  Footer,
  SocialBox,
} from "./export-components";
import {
  headerData,
  navbarOptions,
  socialBoxOptions,
  footerData,
} from "../utils/app-utils";

export default function App() {
  return (
    <div>
      <Header
        imgdir={headerData.imgdir}
        header={headerData.header}
        subheader={headerData.subheader}
        socialbox={<SocialBox fill="white" options={socialBoxOptions} />}
      />

      <NavbarandContent>
        {navbarOptions.map((option, i) => (
          <div key={i} label={option.name} fallback={option.fallback}>
            {option.component}
          </div>
        ))}
      </NavbarandContent>

      <Footer label={footerData} />
    </div>
  );
}
