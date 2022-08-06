import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { htmlDecode } from "../Utils";
const Paginate = ({ model }) => {
    console.log(model);
    const cssChange = (item, page) => {
        if (!isNaN(+item)) {
            if (+item === page) {
                return "py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
            }
            return "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
        }
        if (item.includes("Prev") || item.includes("Anterior")) {
            return "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
        }
        return "py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
    };
    return (
        <div className="mt-6 flex flex-col items-center">
            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px">
                    {model &&
                        model.links &&
                        model.links.map((link, index) => (
                            <li key={"li" + index}>
                                <Link
                                    key={index}
                                    href={link.url}
                                    disabled={link.url === null}
                                    className={cssChange(
                                        link.label,
                                        model.current_page,
                                        model.last_page
                                    )}
                                >
                                    {htmlDecode(link.label)}
                                </Link>
                            </li>
                        ))}
                </ul>
            </nav>
        </div>
    );
};

export { Paginate };
