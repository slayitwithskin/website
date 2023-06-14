import React from 'react'
import styles from '../../../styles/Home.module.css'

import {
  Flex,
  Box,
  Text,
  Button,
  Image,
} from '@chakra-ui/react'
import { BsArrowRight } from 'react-icons/bs'

import Link from 'next/link'
import Head from 'next/head'

import '@splidejs/react-splide/css/sea-green';

import Navbar from '../../../hocs/Navbar'
import Footer from '../../../hocs/Footer'
import Reviews from '../../../hocs/Reviews'
import Faqs from '../../../hocs/Faqs'

const Index = () => {
  return (
    <>
      <Head>
        <title>Home | Slay it with Skin</title>
      </Head>
      <header>

        <Navbar />

        <Flex direction={['column', 'row']} alignItems={"center"} justifyContent={"space-between"} h={'auto'} bg={'#D9B3C4'}>
          <Flex w={['100%', '60%']} direction={"column"} justifySelf={'center'} px={['8', '16', '24']} pt={24} justifyContent={'center'}>
            <Text fontSize={["42", "56", "64"]} className={styles.cursive} textAlign={['center', 'left']} lineHeight={[1, 1, 1]}>Welcome to </Text>
            <Text mb={0} fontSize={["36", "48", "56"]} className={styles.cursive} textAlign={['center', 'left']} color={'gray.600'}>Slay It With Skin</Text>
            <Text mb={5} fontSize={['16','18']} textAlign={['center','left']}>Give your skin the treatment it deserves.</Text>
            <Link href={'/courses'}>
              <Button
                w={['full', 'fit-content']}
                border={'2px'} p={6}
                letterSpacing={2}
                borderColor={'transparent'}
                rounded={0} bg={'black'}
                color={'white'} _hover={{ bg: 'rgba(0,0,0,0.6)' }}
                className={styles.monts}
                textTransform={'uppercase'}
              >
                Checkout Our Courses
              </Button>
            </Link>
          </Flex>
          <Flex w={['100%', '40%']} direction={"column"} justifySelf={'center'} px={'8'} justifyContent={'flex-end'}>
            <Image src={'../../heroimg.png'} />
          </Flex>
        </Flex>

      </header>

      <Flex px={[8, 12, 16]} py={8} justifyContent={'center'} gap={[16,48]} wrap={'wrap'}>
        <Box w={['xs', 'md']} >
          <Image src='../../vandana.jpg' w={'inherit'} objectFit={'cover'} objectPosition={'top'} />
        </Box>
        <Flex direction={'column'} alignItems={'flex-start'} justifyContent={'center'} w={['100%', '65%', '50%']} px={[0, 6]}>
          <Text className={styles.monts}>FOUNDER, SLAYITWITHSKIN</Text>
          <Text className={styles.cursive} fontSize={['40', '56']}>Vandana Khilare</Text>
          <Box mt={6} mb={4} w={20} h={.5} bg={'blackAlpha.800'}></Box>
          <Text fontWeight={400}>
            Vandana Khilare is a COSMETOLOGIST and FOUNDER of slay it with skin. 
            She is a practicing cosmetologist and a educator in her field. 
            She has been practicing skin care for years and founded slay it 
            with skin with a vision to bring awareness about skin care issues 
            and bring medically backed solutions to it.
            <br />
            We at slay it with skin don’t only provide routines & services, 
            we also are highly motivated with the vision to create employment 
            and bring more awareness on how this field can create a well-practiced 
            professional providing professional services & be employed.
            We are also focused on providing our services online for the comfort of our clients.
            <br /><br />
            She is certified at DJPIMAC & licensed at CIDESCO.

          </Text>
          <Link href={'https://www.instagram.com/slayitwithskin/'} >
            <Flex mt={'12'} alignItems={"center"} justifyContent={"flex-start"}>
              <Text className={styles.monts} position={'relative'} top={1} fontWeight={600} mr={4} transition={'ease'} transitionDuration={'.5s'} borderBottom={'1px'} borderBottomColor={'transparent'} _hover={{ mr: 6, borderBottomColor: 'black' }}>
                READ MORE ABOUT US
              </Text>
              <Text className={styles.monts} fontSize={24}>
                <BsArrowRight />
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>

      <Reviews />

      <Faqs/>

      <Footer />
    </>
  )
}

export default Index