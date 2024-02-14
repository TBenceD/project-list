import { useTranslation } from "react-i18next";
import { Button } from "../../../components/button";

type NewProjectFooterProps = {
  step: number;
  handleManageStepper: (mode: "previous" | "next") => void;
  error: boolean;
};

export function NewProjectFooter(props: NewProjectFooterProps) {
  const { t } = useTranslation();
  const { step, handleManageStepper, error } = props;

  return (
    <div className="flex justify-between">
      <div className={`${step > 1 ? "" : "opacity-0 -z-10"}`}>
        <Button
          name={t("new-project-page-previous-button-title")}
          onClick={() => handleManageStepper("previous")}
          type="button"
          disabled={step === 1}
        />
      </div>
      <div className="flex flex-row space-x-4">
        <div
          className={`text-xs sm:text-base h-4 w-4 sm:h-8 sm:w-8 rounded-full flex ${
            step === 1 ? "bg-slate-500" : "bg-green-800"
          }  justify-center items-center shadow-[0_4px_12px_-4px_rgba(59,113,202,0.5)]`}
        >
          1
        </div>
        <div
          className={`text-xs sm:text-base h-4 w-4 sm:h-8 sm:w-8 rounded-full flex ${
            step === 2
              ? "bg-slate-500"
              : step === 3
              ? "bg-green-800"
              : "bg-slate-200"
          }  justify-center items-center shadow-[0_4px_12px_-4px_rgba(59,113,202,0.5)]`}
        >
          2
        </div>
        <div
          className={`text-xs sm:text-base h-4 w-4 sm:h-8 sm:w-8 rounded-full flex ${
            step === 3 ? "bg-slate-500" : "bg-slate-200"
          }  justify-center items-center shadow-[0_4px_12px_-4px_rgba(59,113,202,0.5)]`}
        >
          3
        </div>
      </div>
      <Button
        name={
          step < 3
            ? t("new-project-page-next-button-title")
            : t("new-project-page-finish-button-title")
        }
        onClick={() => handleManageStepper("next")}
        type={step < 3 ? "button" : "submit"}
        disabled={error}
      />
    </div>
  );
}
