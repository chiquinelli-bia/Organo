import "./dropdown.css";

export function Dropdown({ label, itens, required, valor, aoAlterado }) {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={required}
        value={valor}
      >
        <option value="">Selecione um time</option>

        {itens.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
