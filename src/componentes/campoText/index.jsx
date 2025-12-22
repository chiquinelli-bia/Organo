import "./campoText.css";

export function CampoText(props) {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
}
