import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-100 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">💍 Lista de Convidados Fechada</h1>
      <nav className="flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-700 font-bold underline" : "text-blue-500 hover:underline"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive ? "text-blue-700 font-bold underline" : "text-blue-500 hover:underline"
          }
        >
          Admin
        </NavLink>
      </nav>
    </header>
  );
}
