

export default function TextInput({ value, setValue, placeholder, disabled }) {
    let className = "bg-white text-gray-400 h-full px-1.5"

    return (
        <input
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={placeholder}
            className={
                disabled 
                ? className + " w-12 border-l-2"
                : className + " w-full"
            }
            disabled={disabled}
        >
        </input>
    )
};
