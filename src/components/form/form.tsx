type FormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: JSX.Element | JSX.Element[];
};

export function Form(props: FormProps) {
  return (
    <form
      className="flex justify-center flex-col min-w-full"
      onSubmit={props.onSubmit}
    >
      {props.children}
    </form>
  );
}
