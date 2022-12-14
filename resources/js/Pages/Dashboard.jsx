import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { Container } from "../Components/Container";
export default function Dashboard(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors} header={null}>
            <Head title="Dashboard" />
            <Container>
                <div>You're logged in!</div>
            </Container>
        </Authenticated>
    );
}
