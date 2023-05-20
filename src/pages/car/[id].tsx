import CarDetail from "@/components/seo/CarDetail";
import { ICarsSingle, ICar } from "@/interface/carInterface";
import {CarServices} from "@/services/carServices";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
//import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";


const CarDetailPage: NextPage<ICarsSingle> = ({car}) => {
    
    //const {asPath, pathname, query, locale} = useRouter();
    //console.log(asPath, pathname, query, locale);
    //console.log(car, query);

    return <CarDetail car={car}/>
}

interface Params extends ParsedUrlQuery {
    id: string;
}
export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const cars = await CarServices.getAll();

    return {
        paths: cars.map ( car => ({
            params: {
                id: car.id.toString(),
            },
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<ICarsSingle> = async ({params}) => {

    console.log(params);
        
    const car = await CarServices.getByID(String(params?.id));
    //const car = await CarServices.getAll();

    return {
      props: {car},
      revalidate: 60,
    }
}

export default CarDetailPage