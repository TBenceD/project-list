import { useTranslation } from "react-i18next";
import { ArrowBackIcon } from "../../../components/icon";
import { useNavigate } from "react-router-dom";

export function NewProjectHeader() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-row space-x-4">
      <ArrowBackIcon onClick={() => navigate("/")} />
      <h1 className="text-base sm:text-xl font-bold text-slate-400">
        {t("new-project-page-title")}
      </h1>
    </div>
  );
}
