import "./dropdown.css";

export function Dropdown({ label, itens }) {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
