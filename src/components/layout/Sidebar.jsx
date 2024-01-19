import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className=" flex flex-col gap-3 items-start   ">
                                {/* Navbar menu content here */}
                                <NavLink to="/about" className={({ isActive }) => isActive ? 'btn btn-primary  w-full ' : 'btn btn-ghost  w-full'}>About</NavLink>
                                <NavLink to="/contact" className={({ isActive }) => isActive ? 'btn btn-primary  w-full'  : 'btn btn-ghost  w-full'}>Contact</NavLink>
                                <NavLink to="/login" className={({ isActive }) => isActive ? 'btn btn-primary  w-full' : 'btn btn-ghost  w-full'}>Login</NavLink>
                            </div>
    );
};

export default Sidebar;