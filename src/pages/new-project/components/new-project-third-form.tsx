import { ChangeEvent, useState } from "react";
import { TextInput } from "../../../components/input";
import { useTranslation } from "react-i18next";
import { Button } from "../../../components/button";
import { LinksType } from "../../../entity";

type NewProjectThirdFormProps = {
  links: LinksType[];
  setLinks: (value: LinksType[]) => void;
  handleSetLinkError: (isError: boolean) => void;
};

export function NewProjectThirdForm(props: NewProjectThirdFormProps) {
  const { t } = useTranslation();
  const { links, setLinks, handleSetLinkError } = props;

  const [newLink, setNewLink] = useState<{
    value: LinksType;
    error: { nameError: ""; urlError: "" };
  }>({
    value: { id: null!, name: "", url: "" },
    error: { nameError: "", urlError: "" },
  });

  const handleSetLinkName = (event: ChangeEvent<HTMLInputElement>) => {
    setNewLink((prevNewLink) => ({
      value: {
        id: null!,
        name: event.target.value,
        url: prevNewLink.value.url,
      },
      error: {
        nameError: "",
        urlError: "",
      },
    }));
    handleSetLinkError(false);
  };

  const handleSetUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setNewLink((prevNewLink) => ({
      value: {
        id: null!,
        name: prevNewLink.value.name,
        url: event.target.value,
      },
      error: {
        nameError: "",
        urlError: "",
      },
    }));
    handleSetLinkError(false);
  };

  const handleRemoveLink = (id: number) => {
    const filteredLinks = links.filter((link) => link.id !== id);
    setLinks(filteredLinks);
  };

  const handleCheckInputs = () => {
    if (
      newLink.value.url !== "" &&
      (newLink.value.name === "" || newLink.value.name.trim() === "")
    ) {
      setNewLink((prevNewLink) => ({
        ...prevNewLink,
        error: {
          nameError: t("field-is-mandatory-if-link-url-is-not-empty"),
          urlError: prevNewLink.error.urlError,
        },
      }));
      handleSetLinkError(true);

      return true;
    }
    if (
      newLink.value.name !== "" &&
      (newLink.value.url === "" || newLink.value.url.trim() === "")
    ) {
      setNewLink((prevNewLink) => ({
        ...prevNewLink,
        error: {
          nameError: prevNewLink.error.nameError,
          urlError: t("field-is-mandatory-if-url-name-is-not-empty"),
        },
      }));

      return true;
    }
    const regex =
      /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g;
    if (!regex.test(newLink.value.url)) {
      setNewLink((prevNewLink) => ({
        ...prevNewLink,
        error: {
          nameError: prevNewLink.error.nameError,
          urlError: t("valid-link-url-required-error"),
        },
      }));

      return true;
    }
  };

  const handleAddNewLink = () => {
    if (handleCheckInputs()) return;

    if (newLink.value.name === "" && newLink.value.url === "") {
      return;
    }

    const addNewLink: LinksType = {
      ...newLink.value,
      id: new Date().getTime(),
    };

    const newLinksArray = [...links, addNewLink];

    setLinks(newLinksArray);
    setNewLink({
      value: { id: null!, name: "", url: "" },
      error: { nameError: "", urlError: "" },
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="grid sm:grid-cols-12 gap-4">
        <div className="sm:col-span-5">
          <TextInput
            value={newLink.value.name}
            placeholder={t("new-project-third-form-link-name-placeholder")}
            id="third-form-link-name"
            onChange={handleSetLinkName}
            error={newLink.error.nameError}
            maxLength={255}
            type="text"
          />
        </div>
        <div className="sm:col-span-5">
          <TextInput
            value={newLink.value.url}
            placeholder={t("new-project-third-form-link-url-placeholder")}
            id="third-form-link-url"
            onChange={handleSetUrl}
            error={newLink.error.urlError}
            maxLength={255}
            type="text"
          />
        </div>
        <div className="sm:col-span-2 sm:col-start-11 sm:text-end text-center">
          <Button
            type="button"
            name={t("add-button-title")}
            onClick={handleAddNewLink}
          />
        </div>
      </div>
      <div className="w-full h-48 rounded-2xl bg-slate-600 overflow-y-auto">
        <div className="flex flex-row flex-shrink-0 justify-start flex-wrap p-4">
          {links?.map((link) => (
            <span
              key={link.id}
              className="bg-slate-500 text-slate-400 shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] rounded-lg p-1 mr-2 mb-2 cursor-pointer"
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
