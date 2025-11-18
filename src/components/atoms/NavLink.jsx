import { Link } from "@tanstack/react-router";

/**
 * Atom: NavLink
 * Lien de navigation avec styles cohérents
 */
export function NavLink({ to, children, className = "", onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-blue-900 hover:text-blue-600 font-medium transition-colors duration-200 ${className}`}
      activeProps={{
        className: "text-blue-600 font-semibold",
      }}
    >
      {children}
    </Link>
  );
}

