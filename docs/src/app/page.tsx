import Sidebar from "@/components/sidebar";
import CenterLogo from "@/assets/RAGE-default.png";
import SubText from "@/assets/Subtext.svg";
import Image from "next/image";

export default function Home() {
  return (
    <body>
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <Image className="center-logo" src={CenterLogo} alt="RAGE" />
          <Image className="subtext" src={SubText} alt="RAGE-subtext" />
        </div>
      </div>
    </body>
  );
}
