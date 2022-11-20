import { ToolbarGroup, ToolbarItem } from "./Toolbar";
import { Button, TextInput } from "../inputs/";
import { FaDownload } from "react-icons/fa";
import { useState } from "react";

export default function Other({ mdInput }) {
  const [filename, setFilename] = useState("");
  const fileDownload = require("js-file-download");
  const downloadFile = () =>
    fileDownload(mdInput, filename ? filename + ".md" : "readme.md");

  return (
    <ToolbarGroup>
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
