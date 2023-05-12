import { FC, PropsWithChildren } from "react";
import Meta from "../seo/Meta";
import { Imeta } from "../seo/meta.interface";
import Header from "./header/Header";

const Layout: FC <PropsWithChildren<Imeta>> = ({children, title, description}) => {
    
    return (
        <Meta title= {title} description={description}>
            <Header/>
            {children}
        </Meta>
    )
}

export default Layout;