import addText from "./addText";

const addTab = (ref, setValue) => {
  addText(ref, setValue, "tab")
}

const addHeading = (ref, setValue) => {
  addText(ref, setValue, "start", "#");
};

const addHeadingNum = (ref, setValue, h) => {
  addText(ref, setValue, "start", "#".repeat(h));
};

const addBold = (ref, setValue) => {
  addText(ref, setValue, "between", "**");
};

const addItalic = (ref, setValue) => {
  addText(ref, setValue, "between", "*");
};

const addStrikethrough = (ref, setValue) => {
  addText(ref, setValue, "between", "~~");
};

const addBlockquote = (ref, setValue) => {
  addText(ref, setValue, "start", ">");
};

const addOrderedList = (ref, setValue) => {
  addText(ref, setValue, "start", "1.");
};

const addUnorderedList = (ref, setValue) => {
  addText(ref, setValue, "start", "-");
};

const addTaskList = (ref, setValue) => {
  const taskList = `- [x] Task 1
- [ ] Task 2
- [ ] Task 3`
  addText(ref, setValue, "block", taskList)
}

const addTable = (ref, setValue) => {
  const table = `| Col1Header | Col2Header | Col3Header |       
| :--- | :----: | ---: |       
| Col1Value | Col2Value | Col3Value |       
| Col1Value | Col2Value | Col3Value |`;
  addText(ref, setValue, "block", table);
};

const addCode = (ref, setValue) => {
  const code = `\`\`\`language
type code here...
\`\`\`
`;
  addText(ref, setValue, "block", code);
};

const addImage = (ref, setValue) => {
  addText(ref, setValue, "image");
};

const addLink = (ref, setValue) => {
  addText(ref, setValue, "link");
};

const addHorizontalRule = (ref, setValue) => {
  addText(ref, setValue, "block", "---");
};

const addKeyboard = (ref, setValue) => {
  addText(ref, setValue, "keyboard")
}

export {
  addTab,
  addHeading,
  addHeadingNum,
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
};
