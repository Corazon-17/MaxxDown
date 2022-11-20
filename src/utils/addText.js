

export default function addText(ref, setValue, type, text) {
    const value = ref.current.value;
    const [start, end] = [ref.current.selectionStart, ref.current.selectionEnd];

    let newVal, newStart, newEnd
    switch (type){
        case "block":
            newVal = value.substring(0, start) 
                + "\n"
                + text
                + "\n"
                + value.substring(end, value.length)

            newStart = start + 1
            newEnd = end + 1
            break;
        
        case "between":
            newVal = value.substring(0, start) 
                + text 
                + value.substring(start, end)
                + text
                + value.substring(end, value.length)

            newStart = start + text.length
            newEnd = end + text.length
            break;

        case "start":
            const substr = value.substring(0, start).split("\n")
            const target = substr[substr.length - 1]

            if (target.charAt(0) === text) {
                substr[substr.length - 1] = `${text}${substr[substr.length - 1]}`
                newStart = start + 1
                newEnd = end + 1
            } else {
                substr[substr.length - 1] = `${text} ${substr[substr.length - 1]}`
                newStart = start + text.length + 1
                newEnd = end + text.length + 1
            }
            
            newVal = substr.join("\n") + value.substring(start, value.length)
            break;

        case "tab":
            newVal = value.substring(0, start) 
                + "    " 
                + value.substring(end, value.length)

            newStart = start + 4
            newEnd = end + 4
            break;
            

        case "link":
            newVal = value.substring(0, start) 
                + "["
                + value.substring(start, end)
                + "](url)"
                + value.substring(end, value.length)

            newStart = start + 1
            newEnd = end + 1
            break;

        case "image":
            newVal = value.substring(0, start) 
                + "!["
                + value.substring(start, end)
                + "](url)"
                + value.substring(end, value.length)

            newStart = start + 2
            newEnd = end + 2
            break;

        case "keyboard":
            newVal = value.substring(0, start) 
                + "<kbd>"
                + value.substring(start, end)
                + "</kbd>"
                + value.substring(end, value.length)

            newStart = start + 5
            newEnd = end + 5
            break;

        default: 
            break; 
    }

    setValue(newVal);

    ref.current.focus()
    ref.current.value = newVal 
    ref.current.setSelectionRange(newStart, newEnd)
};

// // execCommand is deprecated
// const element = document.getElementById("md-input")
// document.execCommand('insertText', false, "text")
// element.addEventListener("change", element.focus())
// element.value += "text"
// element.removeEventListener("change", element.focus())