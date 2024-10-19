import { useSelector, useDispatch } from "react-redux";
import { BiAdjust } from "react-icons/bi";

import { toggleTheme } from "../../redux/Theme/themeSlice";
import css from "./ThemeBtn.module.css";
export default function ThemeBtn() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button onClick={handleThemeToggle} className={css.btn}>
      <BiAdjust className={css.icon} />
    </button>
  );
}
