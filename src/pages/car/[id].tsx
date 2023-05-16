import { NextPage } from "next";
import { useRouter } from "next/router";

const CarPage: NextPage =  (props) => {

    //const {asPath, pathname, query, locale} = useRouter();
    //console.log(asPath, pathname, query, locale);
    console.log(props);
    
    return (
        <div>New cars </div>
    )
}

export default CarPage