import "./dropdown.css";

export function Dropdown({ label, itens, required, value, aoAlterado }) {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={required}
        value={value}
      >
        {itens.map((item) => (
          <option required={required} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
