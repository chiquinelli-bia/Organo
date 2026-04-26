import "./campo.css";

interface CampoProps {
  type: "text" | "password" | "email" | "number" | "color" | "date";
  label: string;
  placeholder: string;
  required?: boolean;
  valor: string;
  aoAlterado: (valor: string) => void;
}
export function Campo({
  type = "text",
  label,
  placeholder,
  required = false,
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
