import { MouseEvent } from "react";

type ButtonProps = {
  name: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type: "submit" | "button" | "reset";
  disabled?: boolean;
  small?: boolean;
};

export function Button(props: ButtonProps) {
  const { name, onClick, type, disabled, small } = props;

  return (
    <button
      className={`relative overflow-hidden border-none font-title transition-all bg-slate-600 hover:bg-slate-700 text-slate-400 rounded border px-2 py-1 text-xs font-semibold disabled:cursor-not-allowed ${
        !small ? "xs:text-sm sm:px-4 sm:py-2" : "tracking-wider"
      }  shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <span>{name}</span>
    </button>
  );
}
