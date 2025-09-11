import Map from "../components/Map";
import Sidebar from "../components/sidebar";
import styles from "./AppLayout.module.css";

function AppLayout() {
    return (
        <div className={styles.app}>
            <Sidebar />
            <Map />
        </div>
    );
}

export default AppLayout;
