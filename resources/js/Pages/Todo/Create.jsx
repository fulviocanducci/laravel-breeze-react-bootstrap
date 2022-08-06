import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { Container } from "../../Components/Container";
import CreateOrEdit from "./CreateOrEdit";

export default function Create(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors} header={null}>
            <Head title="Todo - Create" />
            <Container>
                <CreateOrEdit
                    values={{ id: 0, title: "", description: "" }}
                    type={"Create"}
                />
            </Container>
        </Authenticated>
    );
}
