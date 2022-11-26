import React from 'react'
import styles from '../styles/Home.module.css'

import { 
  Flex, 
  Box, 
  Spacer, 
  Text,
  Button, 
  Image, 
  HStack,
} from '@chakra-ui/react'


import { BsArrowRight, BsEnvelopeFill, BsTelephoneFill, BsInstagram, BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs'

import Link from 'next/link'
import Head from 'next/head'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/sea-green';

import Navbar from '../hocs/Navbar'
import Footer from '../hocs/Footer'
import Reviews from '../hocs/Reviews'

const Index = () => {
  return (
    <>
      <Head>
        <title>Home | Slay it with Skin</title>
      </Head>
      <header>

        <Navbar />

        <Flex direction={['column', 'row']} alignItems={"center"} justifyContent={"space-between"} h={'auto'} bg={'red.100'}>
          <Flex w={['100%','60%']} direction={"column"} justifySelf={'center'} px={['8','16','24']} pt={24} justifyContent={'center'}>
            <Text fontSize={["42", "56", "64"]} className={styles.cursive} textAlign={['center', 'left']} lineHeight={[1.5,1,1]}>Give your skin</Text>
            <Text mb={8} fontSize={["36", "48", "56"]} className={styles.cursive} textAlign={['center', 'left']} color={'gray.600'}>the treatment it deserves</Text>
            <Button 
            w={['full','fit-content']} 
            border={'2px'} p={6} 
            letterSpacing={2} 
            borderColor={'transparent'} 
            rounded={0} bg={'black'} 
            color={'white'} _hover={{ bg: 'rgba(0,0,0,0.6)' }} 
            className={styles.monts}
            onClick={()=>{Calendly.initPopupWidget({url: 'https://calendly.com/slayitwithskin/appointment'});return false;}}>
              BOOK APPOINTMENT
            </Button>

          </Flex>
          <Flex w={['100%','40%']} direction={"column"} justifySelf={'center'} px={'8'} justifyContent={'flex-end'}>
            <Image src={'woman.png'} />
          </Flex>
        </Flex>

      </header>

      <Flex px={[8,12,16]} py={8} justifyContent={'center'} wrap={'wrap-reverse'}>
        <Box w={['100%','35%','50%']}>
          <Image src='woman2.png' w={'xl'} />
        </Box>
        <Flex direction={'column'} alignItems={'flex-start'} justifyContent={'center'} w={['100%','65%','50%']} px={[0,6]}>
          <Text className={styles.monts}>FEEL THE CONFIDENCE</Text>
          <Text className={styles.cursive} fontSize={['40','56']}>Beauty Forever</Text>
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

      <Box
        position={"relative"}
        backgroundImage={"bride.jpg"}
        backgroundPosition={["top","50% 0%"]}
        backgroundSize={"cover"}
        backgroundAttachment={"fixed"}
        backgroundRepeat={"no-repeat"}
        w={"full"}
        h={"80vh"}
      >
        <Box position={"absolute"} top={0} right={0} bottom={0} left={0} bg={"rgba(0,0,0,0.6)"}>
          <Flex h={'full'} direction={"column"} alignItems={'center'} justifyContent={'center'} zIndex={10}>
            <Text className={styles.monts} color={'white'} letterSpacing={4}>BEAUTIFUL & CONFIDENT</Text>
            <Text className={styles.cursive} fontSize={['36','52', '64']} color={'white'}>Need a Fresh Look?</Text>
            <Button 
            my={4} p={6} 
            bg={'transparent'} 
            border={'2px'} 
            borderColor={'white'} 
            color={'white'} 
            rounded={0} 
            className={styles.monts} 
            _hover={{ bg: 'white', color: 'black' }}
            onClick={()=>{Calendly.initPopupWidget({url: 'https://calendly.com/slayitwithskin/appointment'});return false;}}
            >
              BOOK APPOINTMENT
            </Button>
          </Flex>
        </Box>
      </Box>

      <Box p={16} h={'auto'}>
        <Text className={styles.monts} textAlign={'center'} letterSpacing={4} color={'blackAlpha.700'}>JUST FOR QUEENS</Text>
        <Text className={styles.cursive} textAlign={'center'} fontSize={['40','56']} color={'black'}>Our Services</Text>
        <Box width={24} h={.5} m={'0 auto'} bg={'black'}></Box>
        <Flex wrap={'wrap'} mt={16} alignItems={'center'} justifyContent={['center','space-around']}>

          <Link href={'#'}>
            <Box
              position={'relative'}
              m={2}
              my={[6,4,2]}
              w={'xs'}
              h={'2xs'}
              rounded={'0'}
              bg={'#B85C38'}

              display={'flex'}
              flexDir={'column'}
              alignItems={'center'}
              justifyContent={'flex-end'}
            >
              <Box
                className={styles.cardGradient}
                position={'absolute'}
                w={'inherit'} h={'inherit'}
                rounded={'inherit'}
                backgroundImage={'bride.jpg'}
                backgroundSize={'cover'}
                backgroundPosition={'top'}

                transition={'all .3s ease'}
                _hover={{ transform: 'translateY(-3.25em)' }}
              >
                <Text
                  fontSize={24}
                  color={'white'}
                  className={styles.monts}
                  position={'absolute'}
                  p={4}
                  w={'inherit'} h={'inherit'}
                  rounded={'inherit'}

                  display={'flex'}
                  flexDir={'column'}
                  alignItems={'flex-start'}
                  justifyContent={'flex-end'}

                  backgroundImage='linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.9) 90%)'
                >
                  Magical Skin Treatment by Magicians
                </Text>
              </Box>
              <Text
                p={4}
                display={'flex'}
                flexDir={'row'}
                alignItems={'center'}
                justifyContent={'center'}
                color={'white'}
              >
                Read More &nbsp;&nbsp;<BsArrowRight />
              </Text>
            </Box>
          </Link>

          <Link href={'#'}>
            <Box
              position={'relative'}
              m={2}
              my={[6,4,2]}
              w={'xs'}
              h={'2xs'}
              rounded={'0'}
              bg={'#B85C38'}

              display={'flex'}
              flexDir={'column'}
              alignItems={'center'}
              justifyContent={'flex-end'}
            >
              <Box
                className={styles.cardGradient}
                position={'absolute'}
                w={'inherit'} h={'inherit'}
                rounded={'inherit'}
                backgroundImage={'bride.jpg'}
                backgroundSize={'cover'}
                backgroundPosition={'top'}

                transition={'all .3s ease'}
                _hover={{ transform: 'translateY(-3.25em)' }}
              >
                <Text
                  fontSize={24}
                  color={'white'}
                  className={styles.monts}
                  position={'absolute'}
                  p={4}
                  w={'inherit'} h={'inherit'}
                  rounded={'inherit'}

                  display={'flex'}
                  flexDir={'column'}
                  alignItems={'flex-start'}
                  justifyContent={'flex-end'}

                  backgroundImage='linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.9) 90%)'
                >
                  Magical Skin Treatment by Magicians
                </Text>
              </Box>
              <Text
                p={4}
                display={'flex'}
                flexDir={'row'}
                alignItems={'center'}
                justifyContent={'center'}
                color={'white'}
              >
                Read More &nbsp;&nbsp;<BsArrowRight />
              </Text>
            </Box>
          </Link>

          <Link href={'#'}>
            <Box
              position={'relative'}
              m={2}
              my={[6,4,2]}
              w={'xs'}
              h={'2xs'}
              rounded={'0'}
              bg={'#B85C38'}

              display={'flex'}
              flexDir={'column'}
              alignItems={'center'}
              justifyContent={'flex-end'}
            >
              <Box
                className={styles.cardGradient}
                position={'absolute'}
                w={'inherit'} h={'inherit'}
                rounded={'inherit'}
                backgroundImage={'bride.jpg'}
                backgroundSize={'cover'}
                backgroundPosition={'top'}

                transition={'all .3s ease'}
                _hover={{ transform: 'translateY(-3.25em)' }}
              >
                <Text
                  fontSize={24}
                  color={'white'}
                  className={styles.monts}
                  position={'absolute'}
                  p={4}
                  w={'inherit'} h={'inherit'}
                  rounded={'inherit'}

                  display={'flex'}
                  flexDir={'column'}
                  alignItems={'flex-start'}
                  justifyContent={'flex-end'}

                  backgroundImage='linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.9) 90%)'
                >
                  Magical Skin Treatment by Magicians
                </Text>
              </Box>
              <Text
                p={4}
                display={'flex'}
                flexDir={'row'}
                alignItems={'center'}
                justifyContent={'center'}
                color={'white'}
              >
                Read More &nbsp;&nbsp;<BsArrowRight />
              </Text>
            </Box>
          </Link>

        </Flex>
      </Box>

      <Flex position={'relative'} p={[8, 16]} bg={"#C5D8A4"} justifyContent={'space-between'} wrap={'wrap'}>
        <Flex direction={'column'} alignItems={'flex-start'} justifyContent={'center'} w={['100%','40%']}>
          <Text className={styles.monts}>EXPERT BEAUTICIANS</Text>
          <Text className={styles.cursive} fontSize={['40','56']} lineHeight={'short'}>10+ Years of Experience</Text>
          <Box mt={6} mb={4} w={20} h={.5} bg={'blackAlpha.800'}></Box>
          <Text fontWeight={400}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis debitis iste quam repellendus quos, sapiente facilis! Consectetur voluptates deserunt sequi? Repudiandae recusandae, voluptas nesciunt non accusamus unde temporibus dolorum.</Text>
        </Flex>
        <Flex w={['100%', '45%']} mt={[8,0,0]}>
          <iframe className={styles.homevideo} src="https://www.youtube.com/embed/q0BVR5jRXxE" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Flex>
      </Flex>

      <Flex 
      pos={'relative'} 
      h={['auto','100vh']} 
      mt={[0,16]} 
      alignItems={['flex-start','center']} 
      justifyContent={'flex-start'}

      >
        <Box
          pos={'absolute'}
          t={0}
          l={0}
          w={['full',64]}
          h={['36','full']}
          bg={'#C5D8A4'}

          display={'flex'}
          flexDir={'column'}
          alignItems={'center'}
          justifyContent={'center'}
        ></Box>
        <Flex
          pos={'relative'}
          p={8}
          direction={['column', 'row']}
        >
          <Image
            src={'facial.jpg'}
            w={['full','xl']}
            h={['180px','lg']}
            objectFit={'cover'}
          />

          <Flex direction={'column'} alignItems={'flex-start'} justifyContent={'center'} w={['100%','60%']} pl={[0,16]} pt={[8,0]}>
            <Text className={styles.monts}>TALKS OF WISDOM</Text>
            <Text className={styles.cursive} fontSize={['40','56']}>Read Our Blogs</Text>
            <Box mt={6} mb={4} w={20} h={.5} bg={'blackAlpha.800'}></Box>
            <Text fontWeight={400}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis debitis iste quam repellendus quos, sapiente facilis! Consectetur voluptates deserunt sequi? Repudiandae recusandae, voluptas nesciunt non accusamus unde temporibus dolorum.</Text>
            <Link href={'#'} >
              <Flex mt={'12'} alignItems={"center"} justifyContent={"flex-start"}>
                <Text className={styles.monts} position={'relative'} top={1} fontWeight={600} mr={4} transition={'ease'} transitionDuration={'.5s'} borderBottom={'1px'} borderBottomColor={'transparent'} _hover={{ mr: 6, borderBottomColor: 'black' }}>
                  CHECK LATEST BLOGS
                </Text>
                <Text className={styles.monts} fontSize={24}>
                  <BsArrowRight />
                </Text>
              </Flex>
            </Link>
          </Flex>
        </Flex>
      </Flex>

      <Reviews />

      <Footer />
    </>
  )
}

export default Index