import { MouseEvent } from "react";

interface ButtonProps {
  name: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type: "submit" | "button" | "reset";
  textColor: string;
  onHover: string;
  background: string;
  disabled?: boolean;
  small?: boolean;
}

export function Button(props: ButtonProps) {
  return (
    <button
      className={`relative overflow-hidden border-none font-title transition-all ${
        props.background
      } ${props.onHover} ${
        props.textColor
      } rounded border px-2 py-1 text-xs font-semibold shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] disabled:cursor-not-allowed ${
        !props.small ? "xs:text-sm sm:px-4 sm:py-2" : "tracking-wider"
      }  dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]`}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
    >
      <span>{props.name}</span>
    </button>
  );
}
