import { useState } from "react";
import Link from "./Links/Link";
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Nav = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Blog Post', path: '/blog/:id' }
    ];
    const [open, setOpen] = useState(false);
    const [click, setClick] = useState(false);
    return (
        <nav className="flex gap-6">
            <div className="md:hidden flex gap-4" onClick={() => {
                setOpen(!open);
            }}>
                {open ? <IoCloseSharp className="text-2xl cursor-pointer"/>
                   :<RiMenu2Line  className="text-2xl cursor-pointer" />}
                {
                    open === true ? <ul className="absolute duration-75 ml-10 md:flex justify-center gap-4 mb-12 md:mt-2">
                        {
                            routes.map(route =>
                                <Link key={route.id} route={route} />
                            )
                        }
                    </ul> : 'CLose'
                }
            </div>
             <div className="md:hidden flex gap-4" onClick={() => {
                setClick(!click);
            }}>
                {
                    click === true? 
                    <IoCloseSharp className="text-2xl cursor-pointer"/>:
                    <RiMenu2Line  className="text-2xl cursor-pointer" />
                }
            </div>
            <ul className={`md:flex md:p-4 mx-auto absolute md:static left-38 duration-1000 ${click? 'top-2':'-top-60'}`}>
                {
                    routes.map(route => 
                    <Link 
                    key={route.id}
                    route={route}
                    click={click}
                    />)
                }
            </ul>

        </nav>
    );
};

export default Nav;