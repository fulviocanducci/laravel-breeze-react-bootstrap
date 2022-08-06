import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Edit = ({ href, label = "Edit" }) => {
    return (
        <Link
            class="inline-block px-10 py-2 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
            href={href}
        >
            {label}
        </Link>
    );
};

export { Edit };
