import { ChangeEvent, useState } from "react";
import { TextInput } from "../../../components/input";
import { useTranslation } from "react-i18next";
import { Button } from "../../../components/button";
import { LinksType } from "../../../entity";

interface NewProjectThirdFormProps {
  links: LinksType[];
  setLinks: (value: LinksType[]) => void;
}

export function NewProjectThirdForm(props: NewProjectThirdFormProps) {
  const { t } = useTranslation();
  const { links, setLinks } = props;

  const [newLink, setNewLink] = useState<LinksType>({
    id: null as unknown as number,
    name: "",
    url: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    urlError: "",
  });

  const handleSetLinkName = (event: ChangeEvent<HTMLInputElement>) => {
    setNewLink((prevNewLink) => ({
      ...prevNewLink,
      name: event.target.value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      nameError: "",
    }));
  };

  const handleSetUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setNewLink((prevNewLink) => ({
      ...prevNewLink,
      url: event.target.value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      urlError: "",
    }));
  };

  const handleRemoveLink = (id: number) => {
    const filteredLinks = links.filter((link) => link.id !== id);
    setLinks(filteredLinks);
  };

  const handleCheckInputs = () => {
    if (
      newLink.url !== "" &&
      (newLink.name === "" || newLink.name.trim() === "")
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nameError: t("field-is-mandatory-if-link-url-is-not-empty"),
      }));
      return true;
    }
    if (
      newLink.name !== "" &&
      (newLink.url === "" || newLink.url.trim() === "")
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        urlError: t("field-is-mandatory-if-url-name-is-not-empty"),
      }));
      return true;
    }
  };

  const handleAddNewLink = () => {
    if (handleCheckInputs()) return;

    const addNewLink: LinksType = {
      ...newLink,
      id: new Date().getTime(),
    };

    setLinks((prevLinks: LinksType[]) => [...prevLinks, addNewLink]);
    setNewLink({
      id: null!,
      name: "",
      url: "",
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="grid sm:grid-cols-12 gap-4">
        <div className="sm:col-span-5">
          <TextInput
            value={newLink.name}
            placeholder={t("new-project-third-form-link-name-placeholder")}
            id="third-form-link-name"
            onChange={handleSetLinkName}
            error={errors.nameError}
            maxLength={255}
            type="text"
          />
        </div>
        <div className="sm:col-span-5">
          <TextInput
            value={newLink.url}
            placeholder={t("new-project-third-form-link-url-placeholder")}
            id="third-form-link-url"
            onChange={handleSetUrl}
            error={errors.urlError}
            maxLength={255}
            type="text"
          />
        </div>
        <div className="sm:col-span-2 sm:col-start-11 sm:text-end text-center">
          <Button
            type="button"
            name={t("add-button-title")}
            onClick={handleAddNewLink}
            onHover="dark:hover:bg-slate-700"
            background="dark:bg-slate-600"
            textColor="text-slate-400"
          />
        </div>
      </div>
      <div className="w-full h-48 rounded-2xl bg-slate-600 overflow-y-auto">
        <div className="flex flex-row flex-shrink-0 justify-start flex-wrap p-4">
          {links?.map((link) => (
            <span
              key={link.id}
              className="bg-slate-500 text-slate-400 shadow-md shadow-sky-800 rounded-lg p-1 mr-2 mb-2 cursor-pointer"
              onClick={() => handleRemoveLink(link.id)}
            >
              {`${link.name} - ${link.url}`} &times;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
