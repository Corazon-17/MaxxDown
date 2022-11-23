import { marked } from "marked";
import initVal from "../../utils/initVal";
import { GrClose } from "react-icons/gr"

export default function Help({ setShowHelp }) {
  const closeModal = () => setShowHelp(false);
  const help = initVal().split("Shortcut")[1];
  console.log(help);

  return (
    <div className="px-4 z-40 fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto">
      <div className="sm:h-[calc(100%-3rem)] max-w-lg my-6 mx-auto relative w-auto pointer-events-none">
        <div className="max-h-full overflow-hidden border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5 className="text-xl font-medium leading-normal text-gray-800">
              Toolbar and Shortcut
            </h5>
            <button
              type="button"
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              onClick={closeModal}
            ><GrClose /></button>
          </div>
          <div className="prose flex-auto overflow-y-auto relative px-4">
            <div dangerouslySetInnerHTML={{ __html: marked.parse(help) }} />
          </div>
        </div>
      </div>
    </div>
  );
}
