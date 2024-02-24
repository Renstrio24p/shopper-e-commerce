import { ChangeEvent } from "react";

export type LoginState = 'Login' | 'SignUp'

export type UserState = {
    username: string,
    password: string,
    email: string,
}

interface CustomEventTarget extends HTMLInputElement {
    value: string;
    name: string;
}

export interface ExtendEvent extends ChangeEvent<HTMLInputElement> {
    target: CustomEventTarget;
}