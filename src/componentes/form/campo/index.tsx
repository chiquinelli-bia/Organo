import "./campo.css";

interface CampoProps {
  type: "text" | "password" | "email" | "number";
  label: string;
  placeholder: string;
  required?: boolean;
  valor: string;
  aoAlterado: (valor: string) => void;
}
export function Campo({
  type,
  label,
  placeholder,
  required,
  valor,
  aoAlterado,
}: CampoProps) {
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
