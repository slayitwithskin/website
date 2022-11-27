import React from 'react'
import {
    Flex,
    Text,
    Box,
    Spacer,
    Image,
    HStack
} from '@chakra-ui/react'

import {BsInstagram, BsFacebook, BsTwitter, BsWhatsapp, BsEnvelopeFill, BsTelephoneFill} from 'react-icons/bs'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

const Footer = () => {
  return (
    <>
        <Flex id='footer' pt={[8,16]} 
        pb={[4,8]} px={[0,8]} 
        direction={'column'} 
        alignItems={'center'} justifyContent={'flex-start'} 
        backgroundImage={'linear-gradient(90deg, #C5D8A4 10%, #E3CAA5 90%)'}>
        <Flex 
        gap={[0,0,36]}
        direction={['column', 'column', 'row']}
        >

            <Flex direction={'column'} alignItems={'flex-start'} justifyContent={'flex-start'} my={[8,8,0]}>
            <Text className={styles.cursive} fontSize={28}>Slay it with Skin</Text>
            <Text my={4} fontSize={14}>25, L T Road, Opp Goyal Shopping Centre,
                <br />Borivli (w), Mumbai, Maharashtra
                <br />PIN: 400091
            </Text>
            <Link href={'mailto: info@slayitwithskin.com'} target={'_blank'}>
                <Flex alignItems={'center'}><Text fontSize={16} mr={4}><BsEnvelopeFill /></Text><Text fontSize={16}>info@slayitwithskin.com</Text></Flex>
            </Link>
            <Box w={4} h={2}></Box>
            <Link href={'tel: +911234567890'} target={'_blank'}>
                <Flex alignItems={'center'}><Text fontSize={16} mr={4}><BsTelephoneFill /></Text><Text fontSize={16}>+91 123 456 7890</Text></Flex>
            </Link>
            </Flex>

            <Flex w={'full'} direction={'column'} alignItems={'flex-start'} justifyContent={'flex-start'} my={[4,4,0]}>
            <Text className={styles.monts} fontSize={18}>Company</Text>
            <Box w={'full'} h={.5} bg={'blackAlpha.400'} mb={4}></Box>
            <Link href={'#'}>
                <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>Skin Treatments</Text>
            </Link>
            <Link href={'#'}>
                <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>Hair Treatments</Text>
            </Link>
            <Link href={'#'}>
                <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>Bridal Makeup</Text>
            </Link>
            <Link href={'about'}>
                <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>About Us</Text>
            </Link>
            </Flex>

            <Flex w={'full'} direction={'column'} alignItems={'flex-start'} justifyContent={'flex-start'} my={[4,4,0]}>
            <Text className={styles.monts} fontSize={18}>Important Links</Text>
            <Box w={'full'} h={.5} bg={'blackAlpha.400'} mb={4}></Box>
            <Link href={'#'}>
                <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>The Beauty Shop</Text>
            </Link>
            <Link href={'blogs'}>
                <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>Our Blogs</Text>
            </Link>
            <Link href={'appointment'}>
                <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>Book Appointment</Text>
            </Link>
            <Link href={'#'}>
                <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>Track Your Order</Text>
            </Link>
            </Flex>

            <Flex w={'full'} direction={'column'} alignItems={'flex-start'} justifyContent={'flex-start'} my={[4,4,0]}>
            <Text className={styles.monts} fontSize={18}>Policies</Text>
            <Box w={'full'} h={.5} bg={'blackAlpha.400'} mb={4}></Box>
            <Link href={'#'}>
                <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>Terms & Conditions</Text>
            </Link>
            <Link href={'/policies/privacy-policy'}>
                <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>Privacy Policy</Text>
            </Link>
            <Link href={'#'}>
                <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>Refund Policy</Text>
            </Link>
            <Link href={'#'}>
                <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>Shipping Policy</Text>
            </Link>
            </Flex>
        </Flex>

        <Box w={'70%'} h={.5} bg={'blackAlpha.400'} my={8}></Box>

        <HStack justifyContent={'center'} spacing={6}>
            <Link href={'#'}>
            <Box p={4} fontSize={24} color={'green.600'} transition={'all .3s ease'} _hover={{ bg: 'green.600', color: 'white' }} borderRadius={'8px 0 8px 0'}><BsInstagram /></Box>
            </Link>

            <Link href={'#'}>
            <Box p={4} fontSize={24} color={'green.600'} transition={'all .3s ease'} _hover={{ bg: 'green.600', color: 'white' }} borderRadius={'8px 0 8px 0'}><BsFacebook /></Box>
            </Link>

            <Link href={'#'}>
            <Box p={4} fontSize={24} color={'green.600'} transition={'all .3s ease'} _hover={{ bg: 'green.600', color: 'white' }} borderRadius={'8px 0 8px 0'}><BsTwitter /></Box>
            </Link>

            <Link href={'#'}>
            <Box p={4} fontSize={24} color={'green.600'} transition={'all .3s ease'} _hover={{ bg: 'green.600', color: 'white' }} borderRadius={'8px 0 8px 0'}><BsWhatsapp /></Box>
            </Link>

        </HStack>
        </Flex>
        <Link href={'https://wa.me/918237644190'} target={'_blank'}>
            <Image 
            src={'/whatsapp.png'}
            pos={'fixed'}
            bottom={8}
            right={8}
            w={'12'}
            />
        </Link>
        {/* <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script> */}
    </>
  )
}

export default Footer