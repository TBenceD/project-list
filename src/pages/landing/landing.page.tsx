import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../common/query-keys";
import { getAllProjects } from "../../api";
import { Card, LoadingCard } from "../../components/card";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";

export function LandingPage() {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);

  const getProjects = useQuery({
    queryKey: [QueryKeys.GET_ALL_PROJECTS],
    queryFn: getAllProjects,
  });

  const handleClickOnProject = (id: number) => {
    setOpenModal(true);
    console.log(id);
  };

  return (
    <main className="w-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-base sm:text-xl font-bold text-gray-900 dark:text-slate-400">
          {t("landing-page-title")}
        </h1>

        <Button
          name={t("landing-page-create-new-project-button-name")}
          onClick={() => console.log("create new project")}
          onHover="dark:hover:bg-slate-700"
          background="dark:bg-slate-600"
          type="button"
          textColor="text-slate-400"
        />
      </div>

      <p className="text-sm sm:text-base text-gray-700 dark:text-slate-400">
        {t("landing-page-subtitle")}
      </p>
      <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {getProjects.isLoading ? (
          <LoadingCard />
        ) : (
          getProjects.data?.map((project) => (
            <Card
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              onClick={handleClickOnProject}
            />
          ))
        )}
      </div>
      {openModal && (
        <section>
          <Modal onClose={() => setOpenModal(false)} title="Mi a fasz van">
            <>
              <div>Header</div>
              <div className="flex flex-col justify-center items-center">
                asd
              </div>
            </>
          </Modal>
        </section>
      )}
    </main>
  );
}
