import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./Registration.module.css";

export default function Registration() {
  return (
    <div className={css.containerRegister}>
      <RegistrationForm />
    </div>
  );
}
