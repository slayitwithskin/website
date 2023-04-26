import React, { useEffect } from 'react'
import {
    VStack,
    Text,
    Image,
    Button,
} from '@chakra-ui/react'
import Link from 'next/link'
import Navbar from '../../hocs/Navbar'
import Footer from '../../hocs/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Failed = () => {
    const Router = useRouter()
    const {status} = Router.query
    function clearAndRedirect(){
        localStorage.clear()
    }
    useEffect(()=>{
        if(!status){
            clearAndRedirect()
        }else{
            setTimeout(() => {
                clearAndRedirect()
            }, 3000);
        }
    },[])
    return (
        <>
        <Head><title>Transaction Failed!</title></Head>
            <Navbar />
            <VStack paddingY={16} justifyContent={'center'}>
                <Image src='https://icon-library.com/images/failed-icon/failed-icon-7.jpg' w={'xs'} />
                <Text fontSize={'4xl'} fontWeight={600} textAlign={'center'} pt={8}>
                    We could not capture your payment!
                </Text>
                <Text textAlign={'center'}>If your amount was deducted, it will be refunded back automatically.</Text>
                <br /><br />
                <Link href={'/'}>
                    <Button>Return To Homepage</Button>
                </Link>
            </VStack>
            <Footer />
        </>
    )
}

export default Failed