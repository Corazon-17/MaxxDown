import { ToolbarGroup, ToolbarDropdown, ToolbarItem, DropdownItem } from "./Toolbar";
import { Button } from "../inputs/";
import {
  FaHeading,
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaListOl,
  FaListUl,
  FaTasks,
  FaImage,
  FaLink,
  FaCode,
  FaTable,
  FaList,
  FaKeyboard,
} from "react-icons/fa";
import { TbBlockquote } from "react-icons/tb";
import { GoHorizontalRule } from "react-icons/go";
import {
  addHeading,
  addBold,
  addItalic,
  addStrikethrough,
  addBlockquote,
  addOrderedList,
  addUnorderedList,
  addTaskList,
  addTable,
  addCode,
  addImage,
  addLink,
  addHorizontalRule,
  addKeyboard
} from "../../utils/eventHandler";

export default function Tools({ setMdInput, textAreaRef }) {
  const tools = [
    { label: "Heading", Icon: FaHeading, handler: addHeading },
    { label: "Bold", Icon: FaBold, handler: addBold },
    { label: "Italic", Icon: FaItalic, handler: addItalic },
    {
      label: "Strikethrough",
      Icon: FaStrikethrough,
      handler: addStrikethrough,
    },
    { label: "Table", Icon: FaTable, handler: addTable },
    { label: "Blockquote", Icon: TbBlockquote, handler: addBlockquote },
    {
      label: "Horizontal Rule",
      Icon: GoHorizontalRule,
      handler: addHorizontalRule,
    },
    { label: "Image", Icon: FaImage, handler: addImage },
    { label: "Link", Icon: FaLink, handler: addLink },
    { label: "Code", Icon: FaCode, handler: addCode },
    { label: "Keyboard Input", Icon: FaKeyboard, handler: addKeyboard },
  ];

  const list = [
    { label: "Ordered List", Icon: FaListOl, handler: addOrderedList },
    { label: "Unordered List", Icon: FaListUl, handler: addUnorderedList },
    { label: "Task List", Icon: FaTasks, handler: addTaskList },
  ]

  return (
    <ToolbarGroup>
      {tools.map(({ label, Icon, handler }) => (
        <ToolbarItem key={label}>
          <Button
            title={label}
            icon={<Icon />}
            onClick={() => handler(textAreaRef, setMdInput)}
          />
        </ToolbarItem>
      ))}

      <div className="hidden md:flex">
          {list.map(({label, Icon, handler}) => (
            <ToolbarItem key={label}>
              <Button
                title={label}
                icon={<Icon />}
                onClick={() => handler(textAreaRef, setMdInput)}
              />
            </ToolbarItem>
          ))}
      </div>

      <div className="flex md:hidden">
        <ToolbarDropdown icon={<FaList />}>
          {list.map(({label, Icon, handler}) => (
            <DropdownItem key={label}>
              <Button
                title={label}
                icon={<Icon />}
                onClick={() => handler(textAreaRef, setMdInput)}
              />
            </DropdownItem>
          ))}
        </ToolbarDropdown>
      </div>
    </ToolbarGroup>
  );
}
