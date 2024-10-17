import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/slice";
import css from "../UserMenu/UserMenu.module.css";
import toast from "react-hot-toast";

export default function UserMenu() {
  const user = useSelector(selectUser);
  console.log({ user });

  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logOut());
    toast.success("Logout succees!");
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.email}</p>
      <button type="submit" onClick={logOutHandler}>
        Logout
      </button>
    </div>
  );
}
