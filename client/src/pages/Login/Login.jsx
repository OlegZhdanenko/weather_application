import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./Login.module.css";

export default function Login() {
  return (
    <div className={css.containerLogin}>
      <LoginForm />
    </div>
  );
}
