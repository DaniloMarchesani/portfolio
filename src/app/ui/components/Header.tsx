import Avatar from "../Avatar";
import SocialLinks from "../SocialLinks";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Avatar />
      <SocialLinks />
    </header>
  );
}
