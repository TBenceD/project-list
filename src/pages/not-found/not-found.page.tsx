import { useTranslation } from "react-i18next";

export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="flex h-screen flex-col items-center justify-center text-center bg-slate-900">
      <div className="mb-4 font-title text-3xl font-semibold sm:text-8xl text-slate-400">
        404
      </div>
      <div className="mb-2 font-title text-xl font-medium sm:text-4xl text-slate-400">
        {t("page-not-found-title")}
      </div>
      <div className="font-title text-base sm:text-xl text-slate-400">
        {t("page-not-found-subtitle")}
      </div>
    </div>
  );
}
