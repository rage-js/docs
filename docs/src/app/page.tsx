import Sidebar from "@/components/sidebar";
import Image from "next/image";
import Subtext from "@/assets/Subtext.svg";

export default function Home() {
  return (
    <body>
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              src="/RAGE-default.png"
              width="377"
              height="110"
              alt="RAGE"
            />
            <Image className="subtext" src={Subtext} alt="RAGE-subtext" />
          </div>
        </div>
      </div>
    </body>
  );
}
