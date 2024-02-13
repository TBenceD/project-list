import { ChangeEvent, useState } from "react";

interface InputProps {
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  maxLength: number;
  suffix?: JSX.Element;
  placeholder?: string;
  disabled?: boolean;
}

export function SearchInput(props: InputProps) {
  const [isPlaceholderUp, setIsPlaceholderUp] = useState(
    typeof props.value === "string" && props.value.trim() !== ""
  );

  const handleFocus = () => {
    setIsPlaceholderUp(true);
  };

  const handleBlur = () => {
    setIsPlaceholderUp(!!props.value);
  };

  return (
    <div className="relative">
      <label
        className={`
          absolute left-4 cursor-text text-base transition-all ${
            isPlaceholderUp
              ? "-top-0 flex h-[1px] items-center bg-slate-600 text-sm"
              : "top-1/2 -translate-y-1/2 transform"
          }
          bg-transparent px-2 text-slate-400
        `}
        onClick={() => {
          document.getElementById(props.id)?.focus();
        }}
      >
        <span className="text-sm sm:text-base">{props.placeholder}</span>
      </label>
      <input
        id={props.id}
        type="search"
        className={`z-[2] w-full
          rounded-2xl p-2 pl-6 ${props.suffix ? "pr-9" : "pr-4"}
          before:transition-all focus:outline-none focus:ring-2 focus:ring-sky-400/10
          dark:bg-slate-600 dark:text-slate-400
          ${props.error ? "border border-solid border-red-600" : ""}
          disabled:cursor-not-allowed disabled:bg-slate-200
        `}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        maxLength={props.maxLength}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {props.suffix && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          {props.suffix}
        </div>
      )}
    </div>
  );
}
