import { NextPage } from "next";
import { useRouter } from "next/router";

const CarPage: NextPage =  () => {

    const {asPath, pathname, query, locale} = useRouter();
    console.log(asPath, pathname, query, locale);
    
    return (
        <div>New cars </div>
    )
}

export default CarPage