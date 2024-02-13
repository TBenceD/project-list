import { useTranslation } from "react-i18next";
import { SearchInput } from "../../../components/input";
import { Button } from "../../../components/button";

type LandingPageHeaderProps = {
  searchText: string;
  handleSearchTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export function LandingPageHeader(props: LandingPageHeaderProps) {
  const { t } = useTranslation();
  const { searchText, handleSearchTextChange } = props;

  return (
    <div className="w-full">
      <h1 className="text-base sm:text-xl font-bold text-gray-900 dark:text-slate-400">
        {t("landing-page-title")}
      </h1>
      <div className="grid gap-6 grid-cols-9 items-center mt-4">
        <div className="col-span-7 md:col-span-8">
          <SearchInput
            id="landing-page-search"
            value={searchText}
            onChange={handleSearchTextChange}
            error={false}
            maxLength={255}
            placeholder={t("landing-page-search-placeholder")}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Button
            name={t("landing-page-create-new-project-button-name")}
            onClick={() => console.log("create new project")}
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
