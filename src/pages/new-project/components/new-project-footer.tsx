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
          onHover="dark:hover:bg-slate-700"
          background="dark:bg-slate-600"
          type="button"
          textColor="text-slate-400"
          disabled={step === 1}
        />
      </div>
      <div className="flex flex-row space-x-4">
        <div
          className={`h-8 w-8 rounded-full flex ${
            step === 1 ? "bg-slate-500" : "bg-slate-200"
          }  justify-center items-center`}
        >
          1
        </div>
        <div
          className={`h-8 w-8 rounded-full flex ${
            step === 2 ? "bg-slate-500" : "bg-slate-200"
          }  justify-center items-center`}
        >
          2
        </div>
        <div
          className={`h-8 w-8 rounded-full flex ${
            step === 3 ? "bg-slate-500" : "bg-slate-200"
          }  justify-center items-center`}
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
        onHover="dark:hover:bg-slate-700"
        background="dark:bg-slate-600"
        type={step < 3 ? "button" : "submit"}
        textColor="text-slate-400"
        disabled={error}
      />
    </div>
  );
}
