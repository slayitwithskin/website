import React from 'react'
import Head from 'next/head'

import Navbar from '../hocs/Navbar'
import Footer from '../hocs/Footer'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

import styles from '../styles/Home.module.css'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/sea-green';

const About = () => {
  return (
    <>
    <Head>
        <title>About Us</title>
    </Head>
    <Navbar />
    <Flex direction={'column'} px={[8,16]} py={[8,16]} mt={16} w={'full'}>
        <Text className={styles.monts} textAlign={'center'}>
            WHY WE STARTED
        </Text>
        <Text className={styles.cursive} fontSize={[40,56]} textAlign={'center'}>Slay it with Skin</Text>
    </Flex>
    <Flex direction={['column', 'row']} px={[4,8,16]} py={[6,8]}>
        <Box pb={[8,0]} w={['100%', '40%']} bg={'transparent'} borderRadius={'0'}>
            <Image 
            src={'/vandana.jpg'}
            w={'full'}
            objectFit={'cover'}
            objectPosition={'top'}
            borderRadius={'inherit'}
            boxShadow={'lg'}
            transform={'rotate(-2deg)'}
            />
        </Box>
        <Box px={[0,16]} w={['100%']}>
            <Text fontSize={20}>
                We are a cosmetology and trichology aesthetic center located in Mumbai. We aim at helping our clients understand their concerns and provide a personalised treatment as we believe that everyone has different requirements.
                <br /><br />
                Treatments followed by southness can help acheive skin goals, as it helps building confidence.
                <br /><br />
                We are a team of Aestheticians certified in Canada, Korea and India bringing the best of services, treatments and consultations under one roof.
                
            </Text>
        </Box>
    </Flex>


    <Footer />
    </>
  )
}

export default About