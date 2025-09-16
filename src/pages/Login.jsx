import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Login() {
    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    // PRE-FILL FOR DEV PURPOSES
    const [email, setEmail] = useState("jack@example.com");
    const [password, setPassword] = useState("qwerty");

    useEffect(
        function () {
            // Replace the login from the history stack with the app so when we hit back button we go to the home page
            if (isAuthenticated === true) navigate("/app", { replace: true });
        },
        [isAuthenticated, navigate]
    );

    function handleSubmit(e) {
        e.preventDefault();
        if (email && password) login(email, password);
    }

    return (
        <main className={styles.login}>
            <PageNav />

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className={styles.row}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <div>
                    <Button type="primary">Login</Button>
                </div>
            </form>
        </main>
    );
}
