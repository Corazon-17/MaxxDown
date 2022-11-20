import { forwardRef } from "react";
import keyEvent from "../../utils/keyEvent";

const TextArea = forwardRef(({ id, value, setValue }, ref) => {
  const handleKeyDown = (e) => {
    keyEvent(e, ref, setValue)
  };

  return (
    <textarea 
        id={id}
        className="p-2 bg-inherit outline-0 resize-none" 
        value={value}
        ref={ref}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
    />
  )
})

export default TextArea;