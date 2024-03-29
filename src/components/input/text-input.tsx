import { ChangeEvent, useState } from "react";

type InputProps = {
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  maxLength: number;
  placeholder?: string;
  disabled?: boolean;
  type: "text" | "search";
};

export function TextInput(props: InputProps) {
  const { id, value, onChange, error, maxLength, placeholder, disabled, type } =
    props;
  const [isPlaceholderUp, setIsPlaceholderUp] = useState(
    typeof value === "string" && value.trim() !== ""
  );

  const handleFocus = () => {
    setIsPlaceholderUp(true);
  };

  const handleBlur = () => {
    setIsPlaceholderUp(!!value);
  };

  return (
    <div>
      <div className="relative">
        <label
          className={`
          absolute left-4 cursor-text text-base transition-all ${
            isPlaceholderUp
              ? "-top-0.5 sm:top-0 flex h-[1px] items-center bg-slate-600 text-xs sm:text-sm"
              : "top-1/2 -translate-y-1/2 transform"
          }
          bg-transparent px-2 text-slate-400
        `}
          onClick={() => {
            document.getElementById(id)?.focus();
          }}
        >
          <span>{placeholder}</span>
        </label>
        <input
          id={id}
          type={type}
          className={`z-[2] w-full
          rounded-2xl p-2 pl-6 pr-4
          before:transition-all focus:outline-none focus:ring-2 focus:ring-sky-400/10
          bg-slate-600 text-slate-400
          ${error && error !== "" ? "border border-solid border-red-600" : ""}
          disabled:cursor-not-allowed disabled:bg-slate-200
        `}
          value={value}
          onChange={onChange}
          disabled={disabled}
          maxLength={maxLength}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      {error && error !== "" && (
        <span className="text-red-600 pl-4 sm:text-base text-sm">{error}</span>
      )}
    </div>
  );
}
