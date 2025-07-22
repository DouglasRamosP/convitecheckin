import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-mossGreen p-4 flex justify-between items-center">
      <h1 className="text-4xl font-wedding text-mossVeryDark">💍 Lista de Convidados</h1>
      <nav className="flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-mossVeryDark font-bold underline" : "text-mossVeryDark hover:underline"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive ? "text-mossVeryDark font-bold underline" : "text-mossVeryDark hover:underline"
          }
        >
          Admin
        </NavLink>
      </nav>
    </header>
  );
}
