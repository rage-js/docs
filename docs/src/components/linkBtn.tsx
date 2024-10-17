import Image from "next/image";
import LinkIcon from "@/assets/Link-icon.svg";

interface LinkBtnProps {
  label: string;
  link: string;
}

export default function LinkBtn(props: LinkBtnProps) {
  return (
    <a href={props.link}>
      <button className="link-btn">
        <span>{props.label}</span>
        <Image className="link-icon" src={LinkIcon} alt="link-icon" />
      </button>
    </a>
  );
}
