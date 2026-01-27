import "./campo.css";

export function Campo({
  type = "text",
  label,
  placeholder,
  required,
  valor,
  aoAlterado,
}) {
  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={required}
        value={valor}
        placeholder={placeholder}
      />
    </div>
  );
}
