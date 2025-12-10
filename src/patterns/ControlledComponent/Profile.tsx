import { useForm } from "./useForm";

export const ProfileForm = () => {
    const { formState, updateField, setErrorInField, resetForm } = useForm();
    const validateForm = () => {
        let isValid = true;

        if (!formState.name.value) {
            setErrorInField("name", "Name is required");
            isValid = false;
        }

        if (!formState.email.value || !formState.email.value.includes("@")) {
            setErrorInField("email", "Invalid email address");
            isValid = false;
        }

        const ageNumber = Number((formState.age as any).value);
        if (!formState.age.value || Number.isNaN(ageNumber) || ageNumber <= 0) {
            setErrorInField("age", "Age must be a positive number");
            isValid = false;
        }

        return isValid;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form Submitted:", formState);
            resetForm();
        }
        else {
            alert("Form has errors. Please fix them before submitting.");
        }
    }
    return <div>
        <h2>
            Profile Form
        </h2>
        <form onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "300px" }}>
            <label>
                Name:
                <input type="text" name="name" value={formState.name.value} onChange={(e) => updateField("name", e.target.value)} />
                {formState.name.error && <span style={{ color: "red" }}>{formState.name.error}</span>}
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formState.email.value} onChange={(e) => updateField("email", e.target.value)} />
                {formState.email.error && <span style={{ color: "red" }}>{formState.email.error}</span>}
            </label>
            <label>
                Age:
                <input type="number" name="age" value={formState.age.value || ""} onChange={(e) => updateField("age", e.target.value)} />
                {formState.age.error && <span style={{ color: "red" }}>{formState.age.error}</span>}
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>;
}