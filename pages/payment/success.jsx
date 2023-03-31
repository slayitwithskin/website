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

const Success = () => {
    return (
        <>
        <Head><title>Transaction Successful!</title></Head>
            <Navbar />
            <VStack h={'100vh'} justifyContent={'center'}>
                <Image src='https://icon-library.com/images/4631f6529c.png' />
                <Text fontSize={'4xl'} fontWeight={600} textAlign={'center'} pt={8}>
                    Your transaction was successful!
                </Text>
                <br /><br />
                <Link href={'/'}>
                    <Button>Return To Homepage</Button>
                </Link>
            </VStack>
            <Footer />
        </>
    )
}

export default Success