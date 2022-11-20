import React from 'react'
import Head from 'next/head'
import {Button, Container, Flex, HStack, Image, Text} from '@chakra-ui/react'

import Navbar from '../hocs/Navbar'

import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { BsEnvelopeFill } from 'react-icons/bs'

const NotFound = () => {
  return (
    <>
        <Head>
            <title>Not Found</title>
        </Head>
        <Navbar />
        <Flex
        pt={[16,0]}
        px={[4,0]}
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        >
            <Image 
            src={'404.png'}
            w={['80%', '70%', '50%']}
            />
            <Flex direction={'column'} alignItems={'center'} justifyContent={'center'} mb={[24,0]} position={'relative'} top={[0,'-32']}>
              <Text fontSize={[40,64]} fontWeight={800} color={'darkslategray'} textAlign={'center'}>404<br />Are You Lost?</Text>
              <Text textAlign={'center'}>We could not find the page you were looking for.</Text>
              <Link href={'/'}>
              <Button rounded={0} bg={'burlywood'} className={styles.monts} color={'white'} _hover={{bg: 'brown'}} my={8} alignSelf={'center'}>GET BACK TO HOME PAGE</Button>
              </Link>
            </Flex>
            <Text textAlign={'center'}>Contact our technical support team if you're facing any issues with the website.</Text>
            <Link href={'mailto: support@prakydo.com'} target={'_blank'}>
              <HStack spacing={4} mt={2} mb={16}>
                <Text textAlign={'center'}><BsEnvelopeFill /></Text>
                <Text>support@prakydo.com</Text>
              </HStack>
            </Link>
        </Flex>
    </>
  )
}

export default NotFound