import { ChangeEvent, useState } from "react";
import { TextInput } from "../../../components/input";
import { useTranslation } from "react-i18next";
import { Button } from "../../../components/button";
import { WorkersType } from "../../../entity";

type NewProjectSecondFormProps = {
  coWorkers: WorkersType[];
  setCoWorkers: (value: WorkersType[]) => void;
};

export function NewProjectSecondForm(props: NewProjectSecondFormProps) {
  const { t } = useTranslation();
  const { coWorkers, setCoWorkers } = props;

  const [newCoworker, setNewCoworker] = useState<WorkersType>({
    id: null as unknown as number,
    name: "",
    position: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    positionError: "",
  });

  const handleSetCoworkerName = (event: ChangeEvent<HTMLInputElement>) => {
    setNewCoworker((prevNewCoworker) => ({
      ...prevNewCoworker,
      name: event.target.value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      nameError: "",
    }));
  };

  const handleSetCoworkerPosition = (event: ChangeEvent<HTMLInputElement>) => {
    setNewCoworker((prevNewCoworker) => ({
      ...prevNewCoworker,
      position: event.target.value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      positionError: "",
    }));
  };

  const handleRemoveCoworker = (id: number) => {
    const filteredCoworkers = coWorkers.filter(
      (coworker) => coworker.id !== id
    );
    setCoWorkers(filteredCoworkers);
  };

  const handleCheckInputs = () => {
    if (
      newCoworker.position !== "" &&
      (newCoworker.name === "" || newCoworker.name.trim() === "")
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nameError: t("field-is-mandatory-if-coworker-position-is-not-empty"),
      }));
      return true;
    }
    if (
      newCoworker.name !== "" &&
      (newCoworker.position === "" || newCoworker.position.trim() === "")
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        positionError: t("field-is-mandatory-if-coworker-name-is-not-empty"),
      }));
      return true;
    }
  };

  const handleAddNewCoworker = () => {
    if (handleCheckInputs()) return;

    if (newCoworker.name === "" && newCoworker.position === "") {
      return;
    }

    const newAddNewCoworker: WorkersType = {
      ...newCoworker,
      id: new Date().getTime(),
    };
    const newWorkersArray = [...coWorkers, newAddNewCoworker];

    setCoWorkers(newWorkersArray);
    setNewCoworker({
      id: null!,
      name: "",
      position: "",
    });
  };

  return (
    <div className="flex w-full flex-col space-y-4">
      <div className="grid sm:grid-cols-12 gap-4">
        <div className="sm:col-span-5">
          <TextInput
            value={newCoworker.name}
            placeholder={t("new-project-second-form-coworker-name-placeholder")}
            id="second-form-coworker-name"
            onChange={handleSetCoworkerName}
            error={errors.nameError}
            maxLength={255}
            type="text"
          />
        </div>
        <div className="sm:col-span-5">
          <TextInput
            value={newCoworker.position}
            placeholder={t(
              "new-project-second-form-coworker-position-placeholder"
            )}
            id="second-form-coworker-position"
            onChange={handleSetCoworkerPosition}
            error={errors.positionError}
            maxLength={255}
            type="text"
          />
        </div>

        <div className="sm:col-span-2 sm:col-start-11 sm:text-end text-center">
          <Button
            type="button"
            name={t("add-button-title")}
            onClick={handleAddNewCoworker}
            onHover="dark:hover:bg-slate-700"
            background="dark:bg-slate-600"
            textColor="text-slate-400"
          />
        </div>
      </div>
      <div className="w-full h-48 rounded-2xl bg-slate-600 overflow-y-auto">
        <div className="flex flex-row flex-shrink-0 justify-start flex-wrap p-4">
          {coWorkers?.map((coWorker) => (
            <span
              key={coWorker.id}
              className="bg-slate-500 text-slate-400 shadow-md shadow-sky-800 rounded-lg p-1 mr-2 mb-2 cursor-pointer"
              onClick={() => handleRemoveCoworker(coWorker.id)}
            >
              {`${coWorker.name} - ${coWorker.position}`} &times;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
