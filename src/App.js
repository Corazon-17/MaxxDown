import { createRef, useEffect, useState } from "react";
import { Tools, Other } from "./components/header/";
import { Input, Output, LineNumber, Help } from "./components/content/";
import { TextArea } from "./components/inputs";
import { marked } from "marked";
import useLocalStorage from "./hooks/useLocalStorage";
import initVal from "./utils/initVal";

export default function App() {
  const init = initVal()

  const [mdInput, setMdInput] = useLocalStorage("mdInput", init);
  const [lineNumber, setLineNumber] = useState(0);
  const [showHelp, setShowHelp] = useState(false)
  const textAreaRef = createRef()

  useEffect(() => {
    setLineNumber(mdInput.split("\n").length);
  }, [mdInput]);

  return (
    <div className="App">
      <header
        className="
          sticky top-0 
          flex flex-col sm:flex-row-reverse
          justify-center sm:justify-between 
          px-2 bg-gray-600
          pt-2 sm:pt-0
        ">
        <Other mdInput={mdInput} showHelp={showHelp} setShowHelp={setShowHelp} />
        <Tools setMdInput={setMdInput} textAreaRef={textAreaRef} />
      </header>

      <main
        className="
            grid grid-cols-1
            sm:grid-cols-2 
            min-h-screen
        "
      >
        <Input>
          <LineNumber num={lineNumber} />
          <TextArea 
            id="md-input" 
            value={mdInput} 
            setValue={setMdInput} 
            ref={textAreaRef} 
          />
        </Input>
        <Output>{marked.parse(mdInput)}</Output>
        {showHelp && <Help setShowHelp={setShowHelp} />}
      </main>
    </div>
  );
}