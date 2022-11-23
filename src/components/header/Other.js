import { ToolbarGroup, ToolbarItem } from "./Toolbar";
import { Button, TextInput } from "../inputs/";
import { FaDownload, FaInfoCircle } from "react-icons/fa";
import { useState } from "react";

export default function Other({ mdInput, showHelp, setShowHelp }) {
  const [filename, setFilename] = useState("");
  const fileDownload = require("js-file-download");
  const downloadFile = () => {
    fileDownload(mdInput, filename ? filename + ".md" : "readme.md");
  }

  return (
    <ToolbarGroup>
      <ToolbarItem>
        <Button title="Help" icon={<FaInfoCircle />} onClick={() => setShowHelp(!showHelp)} />
      </ToolbarItem>
      
      <ToolbarItem>
        <TextInput
          value={filename}
          setValue={setFilename}
          placeholder="readme"
        />
        <TextInput placeholder=".md" disabled={true} />
      </ToolbarItem>

      <ToolbarItem>
        <Button title="Download" icon={<FaDownload />} onClick={downloadFile} />
      </ToolbarItem>
    </ToolbarGroup>
  );
}
