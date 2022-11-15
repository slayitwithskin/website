import React from 'react'
import styles from '../styles/Home.module.css'
import leaves from '../public/floral-leaves-corner.jpg'
import herobg from '../public/hero.jpg'
import herogirl from '../public/woman.png'

import { Flex, Box, Spacer, Menu, MenuButton, MenuList, MenuIcon, MenuItem, Text, MenuDivider, Button, Image, Container, AspectRatio } from '@chakra-ui/react'

import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { BsChevronDown, BsArrowRight } from 'react-icons/bs'

import Link from 'next/link'
import Head from 'next/head'

const index = () => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Slay it with Skin</title>
      </Head>
      <header>
        <nav className={styles.nav}>
          <Flex p={4} alignItems={'center'}>
            <h1 className="brand-title">Slay it with Skin</h1>
            <Spacer />

            <Menu>
              <MenuButton mx={6} borderBottom={"2px"} borderColor={"transparent"} _hover={{ borderColor: "black" }}>
                <Flex alignItems={'center'} justifyContent={'center'}>
                  <Text>Services</Text> &nbsp;&nbsp;
                  <Text><BsChevronDown /></Text>
                </Flex>
              </MenuButton>
              <MenuList rounded={0} backgroundImage={"url('/floral-leaves-corner.jpg')"} backgroundPosition={"50% 80%"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"}>
                <Flex>

                  <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                    <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>skin</Text>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Text>Service Title 1</Text>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Text>Service Title 2</Text>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Text>Service Title 3</Text>
                    </MenuItem>
                  </Flex>

                  <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                    <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>hair</Text>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Text>Service Title 1</Text>
                    </MenuItem>
                  </Flex>

                  <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                    <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>misc.</Text>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Text>Service Title 1</Text>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Text>Service Title 2</Text>
                    </MenuItem>
                  </Flex>
                </Flex>
              </MenuList>
            </Menu>
            <Link href={"#"}><Text mx={6} borderBottom={"2px"} borderColor={"transparent"} transition={"ease"} transitionDuration={".3s"} _hover={{ borderColor: "black" }}>Blogs</Text></Link>
            <Link href={"#"}><Text mx={6} borderBottom={"2px"} borderColor={"transparent"} transition={"ease"} transitionDuration={".3s"} _hover={{ borderColor: "black" }}>Shop</Text></Link>
            <Spacer />
            <Button rounded={'xl'} bg={"transparent"} border={"1px"} borderColor={"black"} borderTopRightRadius={"0"} _hover={{ bg: "black", color: "white" }} className={styles.cursive}>Book Appointment</Button>
          </Flex>
        </nav>

        <Flex alignItems={"center"} justifyContent={"space-between"} h={'100vh'} backgroundImage={"url(background2.png)"} backgroundSize={'cover'} backgroundPosition={"center"} backgroundRepeat={"no-repeat"}>
          <Flex direction={"column"} justifySelf={'center'} p={'24'} justifyContent={'center'}>
            <Text fontSize={"64"} className={styles.cursive} lineHeight={1}>Give your hair</Text>
            <Text mb={8} fontSize={"52"} className={styles.cursive} color={'gray.600'}>the treatment they deserve</Text>
            <Button w={'fit-content'} border={'2px'} p={6} letterSpacing={2} borderColor={'transparent'} rounded={0} bg={'black'} color={'white'} _hover={{ bg: 'rgba(0,0,0,0.6)' }} className={styles.monts}>BOOK APPOINTMENT</Button>
            <Link href={'#'}>
              <Flex mt={'12'} alignItems={"center"} justifyContent={"flex-start"}><Text className={styles.monts} position={'relative'} top={1} fontWeight={600} mr={4} transition={'ease'} transitionDuration={'.5s'} borderBottom={'2px'} borderBottomColor={'transparent'} _hover={{ mr: 6, borderBottomColor: 'black' }}>VISIT OUR ONLINE STORE</Text> <Text className={styles.monts} fontSize={24}><HiOutlineShoppingBag /></Text></Flex>
            </Link>
          </Flex>
          <Flex w={'40%'} direction={"column"} justifySelf={'center'} p={'8'} justifyContent={'center'}>
            <Image src={'woman.png'} />
          </Flex>
        </Flex>

      </header>

      <Text className={styles.monts} letterSpacing={4} color={'blackAlpha.700'} textAlign={'center'}>OUR PARTNERS</Text>
      <Flex px={24} py={0}>
        <Image src={'https://1000logos.net/wp-content/uploads/2017/03/LOreal-Symbol.jpg'} boxSize={'160px'} objectFit={'contain'} />
        <Spacer />
        <Image src={'https://1000logos.net/wp-content/uploads/2021/04/MAC-Cosmetics-logo.png'} boxSize={'160px'} objectFit={'contain'} />
        <Spacer />
        <Image src={'https://www.elcompanies.com/~/media/Images/E/Estee-Lauder-Companies/Universal/our-brands/bobbi-brown/BobbiBrown-logo-about_resized.png'} boxSize={'160px'} objectFit={'contain'} />
        <Spacer />
        <Image src={'https://logosdownload.com/logo/nars-logo-512.png'} boxSize={'160px'} objectFit={'contain'} />
      </Flex>

      <Flex px={16} py={8} justifyContent={'center'}>
        <Box w={'50%'}>
          <Image src='woman2.png' w={'xl'}/>
        </Box>
        <Flex direction={'column'} alignItems={'flex-start'} justifyContent={'center'} w={'50%'} px={6}>
          <Text className={styles.monts}>FEEL THE CONFIDENCE</Text>
          <Text className={styles.cursive} fontSize={'56'}>Beauty Forever</Text>
          <Box mt={6} mb={4} w={20} h={.5} bg={'blackAlpha.800'}></Box>
          <Text fontWeight={400}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis debitis iste quam repellendus quos, sapiente facilis! Consectetur voluptates deserunt sequi? Repudiandae recusandae, voluptas nesciunt non accusamus unde temporibus dolorum.</Text>
          <Link href={'#'} >
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

      <Flex p={16} backgroundImage={"url('videobg.jpg')"} backgroundPosition={"0% 0%"} backgroundSize={"cover"} backgroundRepeat={"no-repeat"} justifyContent={'space-between'}>
        <Flex direction={'column'} alignItems={'flex-start'} justifyContent={'center'} w={'40%'}>
          <Text className={styles.monts}>EXPERT BEAUTICIANS</Text>
          <Text className={styles.cursive} fontSize={'56'} lineHeight={'short'}>10+ Years of Experience</Text>
          <Box mt={6} mb={4} w={20} h={.5} bg={'blackAlpha.800'}></Box>
          <Text fontWeight={400}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis debitis iste quam repellendus quos, sapiente facilis! Consectetur voluptates deserunt sequi? Repudiandae recusandae, voluptas nesciunt non accusamus unde temporibus dolorum.</Text>
        </Flex>
        <Flex>
          <iframe className={styles.homevideo} width="560" height="315" src="https://www.youtube.com/embed/q0BVR5jRXxE" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <Image position={'absolute'} bottom={0} right={0} src={'roses.png'} w={64} />
        </Flex>
      </Flex>

    </>
  )
}

export default index