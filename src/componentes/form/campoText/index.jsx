import "./campoText.css";

export function CampoText({ label, placeholder, required }) {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input required={required} type="text" placeholder={placeholder} />
    </div>
  );
}
