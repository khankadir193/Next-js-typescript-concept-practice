import Link from "next/link";
import navItems from "../types/NavItems";

const Navbar = () => {

    return (
        <nav>
            {
                navItems?.map((item)=>{
                    return (
                        <Link key={item.href} href={item.href} style={{display:'block'}}>{item.label+ '\n'}</Link>
                    )
                })
            }
        </nav>
    )
};

export default Navbar;