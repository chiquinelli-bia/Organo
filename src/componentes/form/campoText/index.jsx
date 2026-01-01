import "./campoText.css";

export function CampoText({ label, placeholder, required, value, aoAlterado }) {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={required}
        value={value}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
