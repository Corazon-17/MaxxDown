import { createRef, useEffect, useState } from "react";
import { Tools, Other } from "./components/header/";
import { Input, Output, LineNumber } from "./components/content/";
import { TextArea } from "./components/inputs";
import { marked } from "marked";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const initVal = `# Welcome To Markdown Editor`
  const [mdInput, setMdInput] = useLocalStorage("mdInput", initVal);
  const [lineNumber, setLineNumber] = useState(0);
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
          h-20vh sm:h-[5vh]
          px-2 bg-gray-600"
      >
        <Other mdInput={mdInput} />
        <Tools setMdInput={setMdInput} textAreaRef={textAreaRef} />
      </header>

      <main
        className="
            grid grid-cols-1 h-[90vh]
            sm:grid-cols-2 sm:h-[95vh]"
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
      </main>
    </div>
  );
}

export default App;
