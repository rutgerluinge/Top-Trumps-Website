import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styling/header.css";

export default function SmartLink({ href, children }) {
  const path = useLocation();

  let args = "btn-header";

  args += path.pathname === href ? " btn-active" : " btn-nonactive";

  return (
    <Link to={href}>
      <button className={args}>{children}</button>
    </Link>
  );
}
