import Layout from "@/components/layout/Layout"
import Image from 'next/image'
import Head from "next/head"


const NotFound = () => {
    return(
        <Layout title="Not found">
            {/* <Head>
                <title>Not found</title>
            </Head> */}
            <div className="flex py-8 text-5xl items-center justify-center">404</div>
            <Image className='mx-auto' src='/404_ua.png' alt='' width={400} height={269}/>
        </Layout>
    )
}
export default NotFound; 