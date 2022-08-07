import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Submit from "@/Components/Submit";
import TextArea from "@/Components/TextArea";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function CreateOrEdit({
    values = {},
    type = "Create",
    buttonLabel = "...",
}) {
    const { data, setData, post, processing, errors } = useForm({ ...values });
    function submit(e) {
        e.preventDefault();
        post(route("todo.store"));
    }
    return (
        <form onSubmit={submit}>
            <Label forInput="title" className="mt-3" value="Title"></Label>
            <Input
                type="text"
                name="title"
                id="title"
                value={data?.title || ""}
                className="w-full"
                required={true}
                handleChange={(e) => setData("title", e.target.value)}
                isFocused={true}
            />
            {errors.title && <div>{errors.title}</div>}
            <Label
                forInput="description"
                className="mt-3"
                value="Description"
            ></Label>
            <TextArea
                name="description"
                id="description"
                value={data?.description || ""}
                className="w-full"
                autoComplete={false}
                required={true}
                handleChange={(e) => setData("description", e.target.value)}
            />
            {errors.description && <div>{errors.description}</div>}
            <div className="mt-3">
                <Submit processing={processing}>{buttonLabel}</Submit>
                <Button
                    className="m-2"
                    type="button"
                    handleClick={(e) => Inertia.visit(route("todo.index"))}
                >
                    Back
                </Button>
            </div>
        </form>
    );
}
