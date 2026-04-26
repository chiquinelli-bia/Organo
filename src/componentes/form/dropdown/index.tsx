import "./dropdown.css";
interface ListaProps {
  label: string;
  required: boolean;
  value: string;
  aoAlterado: (valor: string) => void;
  itens: string[];
}

export function Dropdown({
  label,
  required,
  value,
  aoAlterado,
  itens,
}: ListaProps) {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={required}
        value={value}
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
