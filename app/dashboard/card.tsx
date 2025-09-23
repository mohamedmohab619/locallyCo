type CardProps = {
    cardTitle: string;
};

export default function Card(props: CardProps){
    return(
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.cardTitle}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">$0</p>
            </div>
        </div>
    )
}