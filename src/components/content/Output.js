

export default function Output({ children }) {
    return (
        <div 
        className="
            p-2
            prose 
            prose-invert
            max-w-none
            prose-headings:my-2            
            break-words
            bg-gray-800
        " 
        dangerouslySetInnerHTML={{__html: children}} ></div>
    )
}