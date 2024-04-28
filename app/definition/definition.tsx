
export interface loginFormData {
    username: string;
    password: string;
}

export interface signUpFormData {
    username: string;
    password: string;
}

export type emptyProps = {
    placeholder: string;
    onPointerEnterCapture: () => void;
    onPointerLeaveCapture: () => void;
}