import { useTranslation } from "react-i18next";
import { Modal } from "../../../components/modal";
import { ProjectEntity } from "../../../entity";

type CardDetailModalProps = {
  handleCloseModal: () => void;
  project: ProjectEntity;
};
export function CardDetailModal(props: CardDetailModalProps) {
  const { t } = useTranslation();
  const { handleCloseModal, project } = props;

  return (
    <Modal onClose={handleCloseModal} title={project.title}>
      <div className="w-full space-y-4">
        <div>
          <label
            htmlFor="desc"
            className="text-base text-slate-300 font-semibold"
          >
            {t("card-detail-modal-description-title")}
          </label>
          <p id="desc" className="text-slate-400">
            {project.description}
          </p>
        </div>

        <div>
          <label
            htmlFor="workers"
            className="text-base text-slate-300 font-semibold"
          >
            {t("card-detail-modal-workers-title")}
          </label>
          <div id="workers" className="text-slate-400">
            {project.workers?.length > 0
              ? project.workers.map((worker) => (
                  <ul key={worker.id} className="text-slate-400">
                    <li>
                      {worker.name} - {worker.position}
                    </li>
                  </ul>
                ))
              : t("card-detail-modal-no-workers-message")}
          </div>
        </div>

        <div>
          <label
            htmlFor="links"
            className="text-base text-slate-300 font-semibold"
          >
            {t("card-detail-modal-links-title")}
          </label>
          <div id="links" className="text-slate-400">
            {project.links?.length > 0
              ? project.links.map((link) => (
                  <ul key={link.id} className="text-slate-400">
                    <li>
                      {link.name} -{" "}
                      <a href={link.url} target="_blank">
                        {link.url}
                      </a>
                    </li>
                  </ul>
                ))
              : t("card-detail-modal-no-links-message")}
          </div>
        </div>
      </div>
    </Modal>
  );
}
