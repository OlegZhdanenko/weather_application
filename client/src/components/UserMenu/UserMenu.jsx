import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/slice";
import css from "../UserMenu/UserMenu.module.css";
import toast from "react-hot-toast";
import ThemeBtn from "../ThemeBtn/ThemeBtn";

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logOutHandler = () => {
    localStorage.removeItem("currentCity");
    dispatch(logOut());
    toast.success("Logout succees!");
  };

  return (
    <div className={css.wrapper}>
      <ThemeBtn />
      <p className={css.username}>Welcome, {user.email}</p>
      <button type="submit" onClick={logOutHandler} className={css.btn}>
        Logout
      </button>
    </div>
  );
}
