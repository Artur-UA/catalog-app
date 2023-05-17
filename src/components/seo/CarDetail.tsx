import { ICarsData, ICarsSingle } from "@/interface/carInterface";
import CarServices from "@/services/carServices";
import { GetStaticProps, NextPage } from "next";
import { FC } from "react";
import Layout from "../layout/Layout";
import CarItem from "../ui/CarItem";

const CarDetailPage: NextPage<ICarsSingle> = ({car}) => {
    return <CarDetail car={car}/>
}

export const getStaticProps: GetStaticProps<ICarsSingle> = async ({params}) => {
    const car = await CarServices.getByID(String(params?.id));

    return {
      props: {car},
      revalidate: 45,
    }
}

const CarDetail: FC<ICarsSingle> = ({car}) => {

    const {asPath, pathname, query, locale} = useRouter();
    console.log(asPath, pathname, query, locale);


    return (
        <Layout title={car.name} description='Very good and cheap car'>
            <CarItem car={car} />
        </Layout>
    )
}

export default CarDetail;