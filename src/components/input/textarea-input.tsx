import { useState } from "react";

type TextAreaProps = {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  rows: number;
};

export function TextArea(props: TextAreaProps) {
  const { id, value, onChange, error, placeholder, disabled, maxLength, rows } =
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
                  ? "-top-0 flex h-[1px] items-center bg-slate-600 text-sm"
                  : `top-[8px] -translate-y-[8px] transform pt-2`
              }
              bg-transparent px-2 text-slate-400
            `}
          onClick={() => {
            document.getElementById(id)?.focus();
          }}
        >
          <span>{placeholder}</span>
        </label>
        <textarea
          id={id}
          rows={rows}
          className={`z-[2] w-full
          rounded-2xl p-2 pl-6 pr-4
          resize-none
          before:transition-all focus:outline-none focus:ring-2 focus:ring-sky-400/10
          bg-slate-600 text-slate-400
          ${error && error !== "" ? "border border-solid border-red-600" : ""}
          disabled:cursor-not-allowed disabled:bg-slate-200
        `}
          readOnly={disabled}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      {error && error !== "" && (
        <span className="text-red-600 pl-4">{error}</span>
      )}
    </div>
  );
}
