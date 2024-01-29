import { Outlet } from "react-router"
import Menu from "../../Components/Menu";

const LayoutPage = () => {
    return(
        <div>
            <Menu/>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default LayoutPage;