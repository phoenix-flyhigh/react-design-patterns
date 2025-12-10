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
    return <div style={{ width: "70%" , display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h2>
            Profile Form
        </h2>
        <form onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "16px", width: "400px", justifyContent: "center" }}>
            <label style={{ display: "flex", gap: "4px", justifyContent: "space-between" }}>
                Name:
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <input style={{ display: "flex", flexGrow: 0 }} type="text" name="name" value={formState.name.value} onChange={(e) => updateField("name", e.target.value)} />
                    {formState.name.error && <p style={{ color: "red" }}>{formState.name.error}</p>}
                </div>
            </label>
            <label style={{ display: "flex", gap: "4px", justifyContent: "space-between" }}>
                Email:
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <input style={{ display: "flex", flexGrow: 0 }} type="email" name="email" value={formState.email.value} onChange={(e) => updateField("email", e.target.value)} />
                    {formState.email.error && <p style={{ color: "red" }}>{formState.email.error}</p>}
                </div>
            </label>
            <label style={{ display: "flex", gap: "4px", justifyContent: "space-between" }}>
                Age:
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <input style={{ display: "flex", flexGrow: 0 }} type="number" name="age" value={formState.age.value || ""} onChange={(e) => updateField("age", e.target.value)} />
                    {formState.age.error && <p style={{ color: "red" }}>{formState.age.error}</p>}
                </div>
            </label>
            <button type="submit" style={{ border: "2px solid white", borderRadius: "8px" }}>Submit</button>
        </form>
    </div>;
}