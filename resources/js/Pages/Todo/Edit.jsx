import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { Container } from "../../Components/Container";
import CreateOrEdit from "./CreateOrEdit";

export default function Edit(props) {
    const values = props.todo;
    return (
        <Authenticated auth={props.auth} errors={props.errors} header={null}>
            <Head title="Todo - Edit" />
            <Container>
                <CreateOrEdit type="Edit" values={values} buttonLabel="Edit" />
            </Container>
        </Authenticated>
    );
}
