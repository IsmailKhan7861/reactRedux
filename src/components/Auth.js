import classes from "./Auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { UseSelector } from "react-redux";
import { authActions } from "../store";
const Auth = () => {
  const checkAuth = useSelector((state) => state.auth.isAuthenticated);
  console.log(checkAuth);
  const dispatch = useDispatch();

  const formSubmitHandler = () => [dispatch(authActions.login())];

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
