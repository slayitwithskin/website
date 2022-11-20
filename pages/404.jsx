import React from 'react'
import Head from 'next/head'
import {Flex, Image, Text} from '@chakra-ui/react'

import Navbar from '../hocs/Navbar'

const NotFound = () => {
  return (
    <>
        <Head>
            <title>Not Found</title>
        </Head>
        <Navbar />
        <Flex
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        >
            <Image 
            src={'404.jpg'}
            w={['80%', '70%', '50%']}
            />
            <Text fontSize={64} fontFamily={'revert'} color={'darkslategray'}>Are You Lost?</Text>
        </Flex>
    </>
  )
}

export default NotFound