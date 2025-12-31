import "./dropdown.css";

export function Dropdown({ label, itens, required }) {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select>
        {itens.map((item) => (
          <option required={required} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
