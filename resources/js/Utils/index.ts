import Swal, { SweetAlertIcon } from "sweetalert2";

function htmlDecode(input: string) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}

function useToastSweetAlert(): typeof Swal {
    return Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        showCloseButton: true,
        timer: 3000,
        timerProgressBar: true,
        allowEscapeKey: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });
}

const useToastSweetAlertDefault = (
    icon: string | SweetAlertIcon | any = "success",
    message: string | any = "Success"
) => {
    const source = useToastSweetAlert();
    source.fire({
        icon: icon,
        title: message,
    });
};

function useToastSweetAlertSuccess(message: string) {
    useToastSweetAlertDefault("success", message);
}

function useToastSweetAlertError(message: string) {
    useToastSweetAlertDefault("error", message);
}

function useToastSweetAlertInfo(message: string) {
    useToastSweetAlertDefault("info", message);
}

function useToastSweetAlertWarning(message: string) {
    useToastSweetAlertDefault("warning", message);
}

function useToastSweetAlertQuestion(message: string) {
    useToastSweetAlertDefault("question", message);
}

const toast = {
    success: useToastSweetAlertSuccess,
    error: useToastSweetAlertError,
    info: useToastSweetAlertInfo,
    warning: useToastSweetAlertWarning,
    question: useToastSweetAlertQuestion,
};

const useToast = () => {
    return toast;
};

export { htmlDecode, useToast };
