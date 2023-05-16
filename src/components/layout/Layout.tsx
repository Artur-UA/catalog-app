import { FC, PropsWithChildren } from "react";
import Meta from "../seo/Meta";
import { Imeta } from "../seo/meta.interface";
import Header from "./header/Header";
import Footer from "./Footer";
import dynamic from 'next/dynamic'
import CarServices from "@/services/carServices";

const DynamicFooter = dynamic( () => import('./Footer'),{
    ssr:false
})

const Layout: FC <PropsWithChildren<Imeta>> = ({children, title, description}) => {
    
    return (
        <Meta title= {title} description={description}>
            <Header/>
            {children}
            <DynamicFooter/>
        </Meta>
    )
}

export default Layout;