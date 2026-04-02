import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function RoleSwitcher() {
  const { role, setRole } = useContext(AppContext);

  return (
    <select
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="border p-2"
    >
      <option value="viewer">Viewer</option>
      <option value="admin">Admin</option>
    </select>
  );
}