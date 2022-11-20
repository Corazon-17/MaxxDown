import { 
  addTab,
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
} from "./eventHandler";

export default function keyEvent(e, ref, setValue) {
  if (e.key === "Tab") {
    e.preventDefault();
    addTab(ref, setValue)
  }
  else if (e.ctrlKey && e.key === "1") {
    e.preventDefault();
    addHeadingNum(ref, setValue, 1)
  }
  else if (e.ctrlKey && e.key === "2") {
    e.preventDefault();
    addHeadingNum(ref, setValue, 2)
  }
  else if (e.ctrlKey && e.key === "3") {
    e.preventDefault();
    addHeadingNum(ref, setValue, 3)
  }
  else if (e.ctrlKey && e.key === "4") {
    e.preventDefault();
    addHeadingNum(ref, setValue, 4)
  }
  else if (e.ctrlKey && e.key === "5") {
    e.preventDefault();
    addHeadingNum(ref, setValue, 5)
  }
  else if (e.ctrlKey && e.key === "6") {
    e.preventDefault();
    addHeadingNum(ref, setValue, 6)
  }
  else if (e.ctrlKey && e.keyCode === 66) { // b
    addBold(ref, setValue)
  }
  else if (e.ctrlKey && e.keyCode === 73) { // i
    addItalic(ref, setValue)
  }
  else if (e.ctrlKey && e.altKey && e.key === "-") {
    addStrikethrough(ref, setValue)
  }
  else if (e.ctrlKey && e.altKey && e.key === ".") {
    addBlockquote(ref, setValue)
  }
  else if (e.ctrlKey && e.altKey && e.keyCode === 79) { // o
    addOrderedList(ref, setValue)
  }
  else if (e.ctrlKey && e.altKey && e.keyCode === 85) { // u
    addUnorderedList(ref, setValue)
  }
  else if (e.ctrlKey && e.key === "[") {
    addTaskList(ref, setValue)
  }
  else if (e.ctrlKey && e.altKey && e.keyCode === 84) { // t
    addTable(ref, setValue)
  }
  else if (e.ctrlKey && e.altKey && e.key === ",") {
    addCode(ref, setValue)
  }
  else if (e.ctrlKey && e.altKey && e.key === "=") {
    addHorizontalRule(ref, setValue)
  }
  else if (e.ctrlKey && e.altKey && e.keyCode === 74) { // k
    addImage(ref, setValue)
  }
  else if (e.ctrlKey && e.altKey && e.keyCode === 76) { // l
    addLink(ref, setValue)
  }
  else if (e.ctrlKey && e.altKey && e.keyCode === 75) { // k
    addKeyboard(ref, setValue)
  }
};
