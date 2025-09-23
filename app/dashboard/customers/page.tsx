import Sidebar from "@/app/profile/Sidebar"
import Table from "../Table"

export default function Page(){

        const sidebarProperties = [
            {
                title: "Overview",
                icon: (
                    <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                    </svg>
                ),
                href: "../dashboard"
            },
            {
                title: "Updates",
            },
            {
                title: "Payment",
            },
            {
                title: "My Order",
            },
            {
                title: "Customers",
                href: "customers"
            },
        ]

        const sidebarElement = sidebarProperties.map(function(item, index){
            return(
                <Sidebar 
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    href={item.href ?? "#"}
                />
            )
        })

        const customerInfo = [
        {name: "joe"},
        {name: "joe"},
        {name: "joe"},
        {name: "joe"},
        ]

        const customerElement = customerInfo.map(function(item, index){
            return(
                <Table key={index}
                    name={item.name}/>
            )
        })

    return(
        <>
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="pt-4 mt-4 space-y-2 font-medium">
                    {sidebarElement}
                </ul>
            </div>
        </aside>
        <div className=" p-4 pt-20 mx-2 md:ml-64 bg-gray-100">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {customerElement}
                </tbody>
            </table>
        </div>
        </div>
        </>
    )
}