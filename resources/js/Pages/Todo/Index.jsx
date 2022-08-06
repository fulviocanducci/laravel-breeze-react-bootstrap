import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { Container } from "../../Components/Container";
import { Paginate } from "@/Components/Paginate";

export default function Index(props) {
    const data = props.todos.data;
    const todos = props.todos;
    return (
        <Authenticated auth={props.auth} errors={props.errors} header={null}>
            <Head title="Todo List" />
            <Container>
                <table className="min-w-full">
                    <thead className="border-b bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Id
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                Title
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                                ...
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map((todo, index) => (
                                <tr
                                    className="border-b"
                                    key={todo.id + "" + index}
                                >
                                    <td className="w-10 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {todo.id}
                                    </td>
                                    <td className="w-70 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {todo.title}
                                    </td>
                                    <td className="w-20 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                        1961
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={2}>
                                <Paginate model={todos} />
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </Container>
        </Authenticated>
    );
}
