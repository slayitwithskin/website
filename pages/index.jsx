import React from 'react'
import styles from '../styles/Home.module.css'
import leaves from '../public/floral-leaves-corner.jpg'
import herobg from '../public/hero.jpg'
import herogirl from '../public/img1.png'

import { Flex, Box, Spacer, Menu, MenuButton, MenuList, MenuIcon, MenuItem, Text, MenuDivider, Button, Image, Container } from '@chakra-ui/react'
import {MdOutlineFaceRetouchingNatural} from 'react-icons/md'
import {BsHeartFill} from 'react-icons/bs'
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
      <Flex p={4} alignItems={'center'}>
        <h1 className="brand-title">Slay it with Skin</h1>
        <Spacer />

        <Menu>
          <MenuButton mx={6} borderBottom={"2px"} borderColor={"transparent"} _hover={{ borderColor: "black" }}>
            <Text>
              Services
            </Text>
          </MenuButton>
          <MenuList rounded={0} backgroundImage={"url('/floral-leaves-corner.jpg')"} backgroundPosition={"50% 80%"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"}>
            <Flex>

              <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>skin</Text>
                <MenuItem mb={3} bg={"transparent"} _hover={{bg: "azure"}}>
                  <Text>Service Title 1</Text>
                </MenuItem>
                <MenuItem mb={3} bg={"transparent"} _hover={{bg: "azure"}}>
                  <Text>Service Title 2</Text>
                </MenuItem>
                <MenuItem mb={3} bg={"transparent"} _hover={{bg: "azure"}}>
                  <Text>Service Title 3</Text>
                </MenuItem>
              </Flex>

              <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>hair</Text>
                <MenuItem mb={3} bg={"transparent"} _hover={{bg: "azure"}}>
                  <Text>Service Title 1</Text>
                </MenuItem>
              </Flex>

              <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>misc.</Text>
                <MenuItem mb={3} bg={"transparent"} _hover={{bg: "azure"}}>
                  <Text>Service Title 1</Text>
                </MenuItem>
                <MenuItem mb={3} bg={"transparent"} _hover={{bg: "azure"}}>
                  <Text>Service Title 2</Text>
                </MenuItem>
              </Flex>
            </Flex>
          </MenuList>
        </Menu>
        <Link href={"#"}><Text mx={6} borderBottom={"2px"} borderColor={"transparent"} transition={"ease"} transitionDuration={".3s"} _hover={{ borderColor: "black" }}>Blogs</Text></Link>
        <Link href={"#"}><Text mx={6} borderBottom={"2px"} borderColor={"transparent"} transition={"ease"} transitionDuration={".3s"} _hover={{ borderColor: "black" }}>Shop</Text></Link>
        <Spacer />
        <Button rounded={'xl'} bg={"transparent"} border={"1px"} borderColor={"black"} borderTopRightRadius={"0"} _hover={{bg: "black", color: "white"}} className={styles.cursive}>Book a Demo</Button>
      </Flex>

      <Flex alignItems={"center"} justifyContent={"space-between"} h={'80vh'} backgroundImage={"url(background2.png)"} backgroundSize={'cover'} backgroundPosition={"center"} backgroundRepeat={"no-repeat"}>
        <Flex direction={"column"} justifySelf={'center'} p={'24'} justifyContent={'center'}>
          <Text fontSize={"64"} className={styles.cursive} lineHeight={1}>Give your hair</Text>
          <Text mb={8} fontSize={"52"} className={styles.cursive} color={'gray.600'}>the treatment they deserve</Text>
          <Button w={'fit-content'} border={'2px'} borderColor={'transparent'} rounded={0} bg={'black'} color={'white'} _hover={{bg: 'transparent', color: 'black', borderColor: 'black'}} className={styles.monts}>BOOK A DEMO</Button>
        </Flex>
        <Flex w={'40%'} direction={"column"} justifySelf={'center'} p={'8'} justifyContent={'center'}>
          <Image src={'img1.png'} />
        </Flex>
      </Flex>

      <Flex px={24} py={8}>
        <Image src={'https://1000logos.net/wp-content/uploads/2017/03/LOreal-Symbol.jpg'} boxSize={'160px'} objectFit={'contain'}/>
        <Spacer />
        <Image src={'https://1000logos.net/wp-content/uploads/2021/04/MAC-Cosmetics-logo.png'} boxSize={'160px'} objectFit={'contain'}/>
        <Spacer />
        <Image src={'https://www.elcompanies.com/~/media/Images/E/Estee-Lauder-Companies/Universal/our-brands/bobbi-brown/BobbiBrown-logo-about_resized.png'} boxSize={'160px'} objectFit={'contain'}/>
        <Spacer />
        <Image src={'https://logosdownload.com/logo/nars-logo-512.png'} boxSize={'160px'} objectFit={'contain'}/>

      </Flex>

    </>
  )
}

export default index