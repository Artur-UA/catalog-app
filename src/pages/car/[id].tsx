import CarDetail from "@/components/seo/CarDetail";
import { ICarsSingle } from "@/interface/carInterface";
import { NextPage } from "next";
import { useRouter } from "next/router";

const CarPage: NextPage<ICarsSingle> =  ({car}) => {

    const {asPath, pathname, query, locale} = useRouter();
    //console.log(asPath, pathname, query, locale);
    //console.log(car, asPath);

    
    return (
        <>
            <div>New cars </div>
            <CarDetail car={car}/>
        </>
    )
}

export default CarPage