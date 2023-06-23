import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styling/essentials.css";

export default function NormalLink({ href, children }) {
  const path = useLocation();

  let args = "btn-header-normal";

  args +=
    path.pathname === href ? " btn-active-normal" : " btn-nonactive-normal";


    
  return (
    <Link to={href}>
      <button className={args}>{children}</button>
    </Link>
  );
}
