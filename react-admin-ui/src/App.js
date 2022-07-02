import {RouteList} from "./router";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <div className="container">
            <RouteList/>
            <Outlet/>
        </div>
    );
}

export default App;
