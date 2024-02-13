import { useTranslation } from "react-i18next";
import { TextArea, TextInput } from "../../../components/input";
import { ChangeEvent } from "react";

interface NewProjectSecondFormProps {
  onTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
  textValue: string;
  textError: string;
  textAreaChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  textAreaValue: string;
  textAreaError: string;
}
export function NewProjectFirstForm(props: NewProjectSecondFormProps) {
  const {
    onTextChange,
    textValue,
    textError,
    textAreaChange,
    textAreaValue,
    textAreaError,
  } = props;
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col justify-center space-y-4">
      <TextInput
        placeholder={t("new-project-first-form-project-title-placeholder")}
        id="first-form-project-title"
        value={textValue}
        onChange={onTextChange}
        error={textError}
        maxLength={255}
        type="text"
      />
      <TextArea
        placeholder={t(
          "new-project-first-form-project-description-placeholder"
        )}
        id="first-form-project-description"
        value={textAreaValue}
        onChange={textAreaChange}
        error={textAreaError}
        maxLength={500}
        rows={10}
      />
    </div>
  );
}
