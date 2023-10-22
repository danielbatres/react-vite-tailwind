import { XMarkIcon } from "@heroicons/react/24/solid";

const Aside = (props) => {
  const { 
    isOpen, 
    title, 
    children, 
    onClose 
  } = props;

  return (
    <aside
      className={`${
        isOpen ? "flex" : "hidden"
      } w-[360px] h-[calc(100vh-80px)] flex flex-col fixed right-0 border border-black rounded-lg bg-white p-6 overflow-y-auto`}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">{title}</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => onClose()}
          />
        </div>
      </div>
      {children}
    </aside>
  );
}

export { Aside }