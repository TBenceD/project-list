import { useState } from "react";

type TextAreaProps = {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error: string;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  rows: number;
};

export function TextArea(props: TextAreaProps) {
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
            document.getElementById(props.id)?.focus();
          }}
        >
          <span>{props.placeholder}</span>
        </label>
        <textarea
          id={props.id}
          rows={props.rows}
          className={`before: z-[2] w-full resize-none
              rounded-2xl p-2 pl-6
              pr-4 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400/10
              dark:bg-slate-600 dark:text-slate-400
              ${props.error !== "" ? "border border-solid border-red-600" : ""}
              disabled:cursor-not-allowed disabled:bg-slate-200
            `}
          readOnly={props.disabled}
          value={props.value}
          onChange={props.onChange}
          maxLength={props.maxLength}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      {props.error !== "" && (
        <span className="text-red-600 pl-4">{props.error}</span>
      )}
    </div>
  );
}
