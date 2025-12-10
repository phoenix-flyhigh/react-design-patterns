import { useReducer } from "react";

type TFormValue<T> = { value: T, error: string | null };

type TFormState = {
    name: TFormValue<string>;
    email: TFormValue<string>;
    age: TFormValue<number>;
}

type TAction =
    | { type: 'UPDATE_FIELD'; field: keyof TFormState; value: string }
    | { type: 'INVALIDATE_FIELD'; field: keyof TFormState; error: string }
    | { type: 'RESET_FORM' };

const initialFormState: TFormState = {
    name: { value: "", error: null },
    email: { value: "", error: null },
    age: { value: 0, error: null },
};

const formReducer = (state: TFormState, action: TAction) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.field]: {value: action.value, error: null}
            };
        case 'INVALIDATE_FIELD':
            return {
                ...state,
                [action.field]: {...state[action.field], error: action.error}
            };
        case 'RESET_FORM':
            return initialFormState;
        default:
            return state;
    }
}
export const useForm = () => {
    const [formState, dispatch] = useReducer(formReducer, initialFormState);

    const updateField = (field: keyof TFormState, value: string) => {
        dispatch({ type: 'UPDATE_FIELD', field, value });
    };

    const setErrorInField = (field: keyof TFormState, error: string) => {
        dispatch({ type: 'INVALIDATE_FIELD', field, error });
    };

    const resetForm = () => {
        dispatch({ type: 'RESET_FORM' });
    };

    return {
        formState,
        updateField,
        setErrorInField,
        resetForm,
    };
}