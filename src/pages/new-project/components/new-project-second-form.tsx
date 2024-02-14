import { ChangeEvent, useState } from "react";
import { TextInput } from "../../../components/input";
import { useTranslation } from "react-i18next";
import { Button } from "../../../components/button";
import { WorkersType } from "../../../entity";

type NewProjectSecondFormProps = {
  coWorkers: WorkersType[];
  setCoWorkers: (value: WorkersType[]) => void;
  handleSetWorkerError: (isError: boolean) => void;
};

export function NewProjectSecondForm(props: NewProjectSecondFormProps) {
  const { t } = useTranslation();
  const { coWorkers, setCoWorkers, handleSetWorkerError } = props;

  const [newCoworker, setNewCoworker] = useState<{
    value: WorkersType;
    error: { nameError: string; positionError: string };
  }>({
    value: { id: null!, name: "", position: "" },
    error: { nameError: "", positionError: "" },
  });

  const handleSetCoworkerName = (event: ChangeEvent<HTMLInputElement>) => {
    setNewCoworker((prevNewCoworker) => ({
      value: {
        id: null!,
        name: event.target.value,
        position: prevNewCoworker.value.position,
      },
      error: {
        nameError: "",
        positionError: "",
      },
    }));
    handleSetWorkerError(false);
  };

  const handleSetCoworkerPosition = (event: ChangeEvent<HTMLInputElement>) => {
    setNewCoworker((prevNewCoworker) => ({
      value: {
        id: null!,
        name: prevNewCoworker.value.name,
        position: event.target.value,
      },
      error: {
        nameError: "",
        positionError: "",
      },
    }));
    handleSetWorkerError(false);
  };

  const handleRemoveCoworker = (id: number) => {
    const filteredCoworkers = coWorkers.filter(
      (coworker) => coworker.id !== id
    );
    setCoWorkers(filteredCoworkers);
  };

  const handleCheckInputs = () => {
    if (
      newCoworker?.value.position !== "" &&
      (newCoworker?.value.name === "" || newCoworker?.value.name.trim() === "")
    ) {
      setNewCoworker((prevNewCoworker) => ({
        ...prevNewCoworker,
        error: {
          nameError: t("field-is-mandatory-if-coworker-position-is-not-empty"),
          positionError: prevNewCoworker.error.positionError,
        },
      }));
      handleSetWorkerError(true);

      return true;
    }
    if (
      newCoworker?.value.name !== "" &&
      (newCoworker?.value.position === "" ||
        newCoworker?.value.position.trim() === "")
    ) {
      setNewCoworker((prevNewCoworker) => ({
        ...prevNewCoworker,
        error: {
          nameError: prevNewCoworker.error.nameError,
          positionError: t("field-is-mandatory-if-coworker-name-is-not-empty"),
        },
      }));
      handleSetWorkerError(true);

      return true;
    }
  };

  const handleAddNewCoworker = () => {
    if (handleCheckInputs()) return;

    if (newCoworker?.value.name === "" && newCoworker?.value.position === "") {
      return;
    }

    const newAddNewCoworker: WorkersType = {
      ...newCoworker.value,
      id: new Date().getTime(),
    };
    const newWorkersArray = [...coWorkers, newAddNewCoworker];

    setCoWorkers(newWorkersArray);
    setNewCoworker(() => ({
      value: {
        id: null!,
        name: "",
        position: "",
      },
      error: {
        nameError: "",
        positionError: "",
      },
    }));
  };

  return (
    <div className="flex w-full flex-col space-y-4">
      <div className="grid sm:grid-cols-12 gap-4">
        <div className="sm:col-span-5">
          <TextInput
            value={newCoworker.value.name}
            placeholder={t("new-project-second-form-coworker-name-placeholder")}
            id="second-form-coworker-name"
            onChange={handleSetCoworkerName}
            error={newCoworker?.error.nameError}
            maxLength={255}
            type="text"
          />
        </div>
        <div className="sm:col-span-5">
          <TextInput
            value={newCoworker.value.position}
            placeholder={t(
              "new-project-second-form-coworker-position-placeholder"
            )}
            id="second-form-coworker-position"
            onChange={handleSetCoworkerPosition}
            error={newCoworker.error.positionError}
            maxLength={255}
            type="text"
          />
        </div>

        <div className="sm:col-span-2 sm:col-start-11 sm:text-end text-center">
          <Button
            type="button"
            name={t("add-button-title")}
            onClick={handleAddNewCoworker}
          />
        </div>
      </div>
      <div className="w-full h-48 rounded-2xl bg-slate-600 overflow-y-auto">
        <div className="flex flex-row flex-shrink-0 justify-start flex-wrap p-4">
          {coWorkers?.map((coWorker) => (
            <span
              key={coWorker.id}
              className="bg-slate-500 text-slate-400 shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] rounded-lg p-1 mr-2 mb-2 cursor-pointer"
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
