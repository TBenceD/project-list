type FormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: JSX.Element | JSX.Element[];
};

export function Form(props: FormProps) {
  const { onSubmit, children } = props;
  return (
    <form
      className="flex justify-center flex-col min-w-full"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
