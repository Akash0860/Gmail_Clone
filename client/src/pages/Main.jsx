import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";



const Main = ()=>{
    const [openDrawer,setOpenDrawer]=useState(true);

    const toggleDrawer = () =>{
        setOpenDrawer(prevState => !prevState)
    }
    return(
        <div>
            <Header toggleDrawer={toggleDrawer}setOpenDrawer={setOpenDrawer}/>
            <Sidebar openDrawer={openDrawer}/>
            <div>MAIN</div>
        </div>
    )
}

export default Main;