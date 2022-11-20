

export default function LineNumber({ num }) {
    return (
        <div className="text-center py-2 bg-gray-500">
            {[...Array(num)].map((_, i) => <span key={i} className="block" dangerouslySetInnerHTML={{__html: i+1}} />)}
        </div>
    )
}