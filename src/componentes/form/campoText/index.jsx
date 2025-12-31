import "./campoText.css";

export function CampoText({ label, placeholder }) {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
