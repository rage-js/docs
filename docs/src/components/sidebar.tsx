import LinkBtn from "./linkBtn";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="link-btns">
        <LinkBtn label="Core - Docs" link="/core" />
        <LinkBtn label="Tools - Docs" link="/tools" />
        <LinkBtn label="CLI - Docs" link="/" />
        <LinkBtn label="Atlas - Docs" link="/" />
        <LinkBtn label="Guide" link="/" />
      </div>
    </div>
  );
}
