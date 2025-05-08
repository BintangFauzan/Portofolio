import ImageProject from './PartComponents/ImageProject'

export default function MyProject({children, src, href, h2, p}) {
    return (
        <div className="basis-1/3 flex-1">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
                <ImageProject src={src} href={href} />
                <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">{h2}</h2>
                    <p className="text-gray-700 dark:text-gray-300">{p}</p>
                    {children}
                </div>
            </div>
        </div>
    )
}