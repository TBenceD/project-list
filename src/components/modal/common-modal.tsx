import { useEffect, useState } from "react";

interface ModalProps {
  onClose: () => void;
  title: string;
  children: JSX.Element;
  handleSubmit?: () => void;
  submitText?: string;
  cancelText?: string;
}

export function Modal(props: ModalProps) {
  const [modalClose, setModalClose] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    // Clean-up: Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setModalClose((modalClose) => !modalClose);
  };

  const handleCloseButtonClicked = () => {
    handleClose();
    setTimeout(() => {
      props.onClose();
    }, 200);
  };

  return (
    <dialog className="fixed w-full h-full inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
      <section className="relative">
        <div
          className={`min-w-96 ${
            modalClose ? "animate-commonModalClose" : "animate-commonModalOpen"
          } flex h-screen w-screen flex-col overflow-auto bg-white p-5 shadow-2xl sm:h-fit sm:w-fit sm:max-w-screen-md sm:rounded-3xl dark:bg-slate-700`}
        >
          <div className="mb-8 flex justify-between text-base font-bold subpixel-antialiased sm:text-xl dark:text-slate-400 space-x-10">
            {props.title}
            <span
              className="max-h-5 sm:mr-4 cursor-pointer"
              onClick={handleCloseButtonClicked}
            >
              &times;
            </span>
          </div>
          <div className="flex flex-grow justify-center text-left sm:items-center">
            {props.children}
          </div>
        </div>
      </section>
    </dialog>
  );
}
