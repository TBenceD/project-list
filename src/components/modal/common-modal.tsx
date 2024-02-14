import { useEffect, useState } from "react";

type ModalProps = {
  onClose: () => void;
  title: string;
  children: JSX.Element;
};

export function Modal(props: ModalProps) {
  const { onClose, title, children } = props;
  const [modalClose, setModalClose] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

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
      onClose();
    }, 200);
  };

  return (
    <div className="fixed w-full h-full inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
      <section className="relative">
        <div
          className={`min-w-[500px] sm:max-h-screen sm:h-[600px] ${
            modalClose ? "animate-commonModalClose" : "animate-commonModalOpen"
          } flex h-screen w-screen flex-col overflow-auto p-5 shadow-[0_4px_16px_-4px_rgba(59,113,202,0.5)] sm:h-fit sm:w-fit sm:max-w-screen-md sm:rounded-3xl bg-slate-700`}
        >
          <div className="mb-8 flex justify-between text-base font-bold subpixel-antialiased sm:text-xl text-slate-400 space-x-10">
            {title}
            <div
              className="cursor-pointer text-black text-2xl"
              onClick={handleCloseButtonClicked}
            >
              &times;
            </div>
          </div>
          <div className="flex flex-grow text-left">{children}</div>
        </div>
      </section>
    </div>
  );
}
