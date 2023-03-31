import React from 'react'
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

const Failed = () => {
    return (
        <>
        <Head><title>Transaction Failed!</title></Head>
            <Navbar />
            <VStack h={'100vh'} justifyContent={'center'}>
                <Image src='https://icon-library.com/images/failed-icon/failed-icon-7.jpg' />
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