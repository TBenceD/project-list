import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Form } from "../../components/form";
import {
  NewProjectFirstForm,
  NewProjectFooter,
  NewProjectSecondForm,
  NewProjectThirdForm,
} from "./components";
import { LinksType, WorkersType } from "../../entity";
import { placeholderImage } from "../../common/helper";

export function NewProjectPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState({ value: "", error: "" });
  const [description, setDescription] = useState({ value: "", error: "" });
  const [workers, setWorkers] = useState<WorkersType[]>([]);
  const [links, setLinks] = useState<LinksType[]>([]);

  const handleCheckInputs = () => {
    if (step === 1) {
      if (title.value.trim() === "") {
        setTitle((prevTitle) => ({
          ...prevTitle,
          error: t("field-is-mandatory"),
        }));
        return true;
      }

      if (description.value !== "" && description.value.trim().length < 50) {
        setDescription((prevDescription) => ({
          ...prevDescription,
          error: t("new-project-page-new-project-description-error"),
        }));
        return true;
      }
    }
  };

  const handleSave = () => {
    const newProject = {
      id: new Date().getTime(),
      title: title.value,
      description: description.value,
      workers: workers,
      links: links,
      image: placeholderImage(title.value),
    };
    const prevItems = localStorage.getItem("projects");
    const parsedItems =
      JSON.parse(prevItems!) === null ? [] : JSON.parse(prevItems!);
    localStorage.setItem(
      "projects",
      JSON.stringify([...parsedItems, newProject])
    );
  };

  const handleManageStepper = (mode: string) => {
    if (handleCheckInputs()) return;

    if (step === 3 && mode === "next") {
      handleSave();
      navigate("/");
    }
    if (mode === "next") {
      setStep((step) => step + 1);
      return;
    }
    setStep((step) => step - 1);
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(() => ({ value: event.target.value, error: "" }));
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(() => ({
      value: event.target.value,
      error: "",
    }));
  };

  return (
    <div className="space-y-4">
      <h1 className="text-base sm:text-xl font-bold text-gray-900 dark:text-slate-400">
        {t("new-project-page-title")}
      </h1>
      <div className="flex justify-center">
        <Form onSubmit={handleSave}>
          {step === 1 ? (
            <NewProjectFirstForm
              onTextChange={handleTitleChange}
              textValue={title.value}
              textError={title.error}
              textAreaChange={handleDescriptionChange}
              textAreaValue={description.value}
              textAreaError={description.error}
            />
          ) : step === 2 ? (
            <NewProjectSecondForm
              coWorkers={workers}
              setCoWorkers={setWorkers}
            />
          ) : (
            <NewProjectThirdForm links={links} setLinks={setLinks} />
          )}
        </Form>
      </div>
      <NewProjectFooter
        step={step}
        handleManageStepper={handleManageStepper}
        error={title.error !== "" || description.error !== ""}
      />
    </div>
  );
}
