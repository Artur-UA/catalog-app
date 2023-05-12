import {FC, PropsWithChildren} from 'react'
import {Imeta} from './meta.interface'
import  Head from 'next/head'

const getTitle = (title: string) => `${title} | My site on Next`

const Meta : FC <PropsWithChildren<Imeta>> = ({title, description, children}) => {
  return (
    <>
        <Head>
            <title>{getTitle(title)}</title>
            {description ? 
            <>
                <meta name='description' content={description} />
                <meta name='og:title' content={getTitle(title)} />
                <meta name='og:description' content={description} />
            </> :
            <meta name='robots' content='noindex, nofollow'/>
            }
        </Head>
        {children}
    </>
  )
}

export default Meta