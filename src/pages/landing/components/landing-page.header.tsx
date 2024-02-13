import { useTranslation } from "react-i18next";
import { TextInput } from "../../../components/input";
import { Button } from "../../../components/button";
import { useNavigate } from "react-router-dom";

type LandingPageHeaderProps = {
  searchText: string;
  handleSearchTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export function LandingPageHeader(props: LandingPageHeaderProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { searchText, handleSearchTextChange } = props;

  return (
    <div className="w-full">
      <h1 className="text-base sm:text-xl font-bold text-gray-900 dark:text-slate-400">
        {t("landing-page-title")}
      </h1>
      <div className="grid gap-6 grid-cols-9 items-center mt-4">
        <div className="col-span-7 md:col-span-8">
          <TextInput
            id="landing-page-search"
            value={searchText}
            onChange={handleSearchTextChange}
            maxLength={255}
            placeholder={t("landing-page-search-placeholder")}
            type="search"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Button
            name={t("landing-page-create-new-project-button-name")}
            onClick={() => navigate("/new-project")}
            onHover="dark:hover:bg-slate-700"
            background="dark:bg-slate-600"
            type="button"
            textColor="text-slate-400"
          />
        </div>
      </div>
    </div>
  );
}
