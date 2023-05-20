import { ICarsData, ICarsSingle } from "@/interface/carInterface";
import CarServices from "@/services/carServices";
import { GetStaticProps, NextPage } from "next";
import { FC } from "react";
import Layout from "../layout/Layout";
import CarItem from "../ui/CarItem";



const CarDetail: FC<ICarsSingle> = ({car}) => {

    return (
        <Layout title={car.name} description='Very good and cheap car'>
            <CarItem car={car} />
        </Layout>
    )
}

export default CarDetail;