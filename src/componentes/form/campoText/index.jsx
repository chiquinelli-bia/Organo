import "./campoText.css";

export function CampoText({ label, placeholder, required, valor, aoAlterado }) {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={required}
        value={valor}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
