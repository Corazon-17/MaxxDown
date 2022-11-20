

export default function Input({ children }) {
    return (
        <div className="
            grid bg-gray-400
            grid-cols-[10%_90%] 
            md:grid-cols-[8%_92%] 
            lg:grid-cols-[6%_94%]"
        >
            {children}
        </div>
    )
}