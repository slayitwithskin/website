import React from 'react'
import styles from '../styles/Home.module.css'

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

import Navbar from '../hocs/Navbar'
import Footer from '../hocs/Footer'
import Reviews from '../hocs/Reviews'
import services from './api/services'

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
            <Text fontSize={["42", "56", "64"]} className={styles.cursive} textAlign={['center', 'left']} lineHeight={[1.5, 1, 1]}>Give your skin</Text>
            <Text mb={8} fontSize={["36", "48", "56"]} className={styles.cursive} textAlign={['center', 'left']} color={'gray.600'}>the treatment it deserves</Text>
            <Link href={'/appointment'}>
              <Button
                w={['full', 'fit-content']}
                border={'2px'} p={6}
                letterSpacing={2}
                borderColor={'transparent'}
                rounded={0} bg={'black'}
                color={'white'} _hover={{ bg: 'rgba(0,0,0,0.6)' }}
                className={styles.monts}
              >
                BOOK APPOINTMENT
              </Button>
            </Link>
          </Flex>
          <Flex w={['100%', '40%']} direction={"column"} justifySelf={'center'} px={'8'} justifyContent={'flex-end'}>
            <Image src={'heroimg.png'} />
          </Flex>
        </Flex>

      </header>

      <Flex px={[8, 12, 16]} py={8} justifyContent={'space-between'} wrap={'wrap'}>
        <Box w={['xs', 'md']} h={'md'}>
          <Image src='about.jpeg' w={'inherit'} h={'inherit'} objectFit={'cover'} objectPosition={'top'} />
        </Box>
        <Flex direction={'column'} alignItems={'flex-start'} justifyContent={'center'} w={['100%', '65%', '50%']} px={[0, 6]}>
          <Text className={styles.monts}>FOUNDER, SLAYITWITHSKIN</Text>
          <Text className={styles.cursive} fontSize={['40', '56']}>Vandana Khilare</Text>
          <Box mt={6} mb={4} w={20} h={.5} bg={'blackAlpha.800'}></Box>
          <Text fontWeight={400}>
            Vandana Khilare is the cosmetologist and founder of slayitwithskin. Because of her tremendous service, she has achieved commendable milestones. An award-winning cosmetologist, Vandana has an experienced team of dermatologists at various online consultations for slayitwithskin across India.
            <br /><br />
            After practicing medicine for more than 10 years, Vandana found slayitwithskin. The idea behind slayitwithskin is to provide a wide range of services and products, including but not limited to routine skin & hair exams, beauty & cosmetic procedures, and the treatment of skin disorders. slayitwithskin is a comfortable and contemporary place for patients to get procedures done.
            <br /><br />
            Vandana Khilare has completed her studies at a government Medical College situated in Mumbai. She went to Abroad University in Canada to pursue higher education in practical Dermatology  & Cosmetology she went to  University UK. Hereafter, she completed her diploma in Aesthetic Medicine from the American Academy of Aesthetic Medicine.
            <br /><br />
            Given her advanced knowledge of cosmetology and Dermatology, she has attended various workshops and conferences globally.
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

      <Box
        position={"relative"}
        backgroundImage={"bannercover.jpg"}
        backgroundPosition={["top", "50% 0%"]}
        backgroundSize={"cover"}
        backgroundAttachment={"fixed"}
        backgroundRepeat={"no-repeat"}
        w={"full"}
        h={"80vh"}
      >
        <Box position={"absolute"} top={0} right={0} bottom={0} left={0} bg={"rgba(0,0,0,0.6)"}>
          <Flex h={'full'} direction={"column"} alignItems={'center'} justifyContent={'center'} zIndex={10}>
            <Text className={styles.monts} color={'white'} letterSpacing={4}>STAY BEAUTIFUL & CONFIDENT</Text>
            <Text className={styles.cursive} fontSize={['36', '52', '64']} textAlign={'center'} color={'white'}>Beauty That's Uniquely You</Text>
            <Link href={'/appointment'}>
              <Button
                my={4} p={6}
                bg={'transparent'}
                border={'2px'}
                borderColor={'white'}
                color={'white'}
                rounded={0}
                className={styles.monts}
                _hover={{ bg: 'white', color: 'black' }}
              >
                BOOK APPOINTMENT
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>

      <Box p={16} h={'auto'}>
        <Text className={styles.monts} textAlign={'center'} letterSpacing={4} color={'blackAlpha.700'}>ALL ABOUT YOU</Text>
        <Text className={styles.cursive} textAlign={'center'} fontSize={['40', '56']} color={'black'}>Our Services</Text>
        <Box width={24} h={.5} m={'0 auto'} bg={'black'}></Box>
        <Flex wrap={'wrap'} mt={16} alignItems={'center'} justifyContent={['center', 'space-around']}>

          {services.map((service) =>
            <Link href="/services" key={service.id}>
              <Box
                position={'relative'}
                m={2}
                my={6}
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
                  backgroundImage={service.img}
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
                    {service.title}
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
          )}

        </Flex>
      </Box>

      <Flex
        pos={'relative'}
        h={['auto', '100vh']}
        mt={[0, 16]}
        alignItems={['flex-start', 'center']}
        justifyContent={'flex-start'}

      >
        <Box
          pos={'absolute'}
          t={0}
          l={0}
          w={['full', 64]}
          h={['36', 'full']}
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
          <Box
            boxSize={['xs', 'xl']}
            alignSelf={['center', 'unset']}
            display={'flex'}
            flexDir={'column'}
            alignItems={'center'}
            justifyContent={'flex-end'}
            bg={'white'} boxShadow={'lg'}
          >
            <Image
              src={'blogs.png'}
              w={['full', 'sm']}
              objectFit={'cover'}
            />
          </Box>

          <Flex direction={'column'} alignItems={'flex-start'} justifyContent={'center'} w={['100%', '60%']} pl={[0, 16]} pt={[8, 0]}>
            <Text className={styles.monts}>WORDS OF WISDOM</Text>
            <Text className={styles.cursive} fontSize={['40', '56']}>Read Our Blogs</Text>
            <Box mt={6} mb={4} w={20} h={.5} bg={'blackAlpha.800'}></Box>
            <Text fontWeight={400}>
              Our motto is to make everyone beleive and have that glow in their skin that they
              always dreamt of. And to make this motto come true, we're spreading our knowledge
              through these blogs. You'll find Do's and Dont's, tips, home remedies and much more here!
            </Text>
            <Link href={'/blogs'} >
              <Flex mt={'12'} alignItems={"center"} justifyContent={"flex-start"}>
                <Text className={styles.monts} position={'relative'} top={1} fontWeight={600} mr={4} transition={'ease'} transitionDuration={'.5s'} borderBottom={'1px'} borderBottomColor={'transparent'} _hover={{ mr: 6, borderBottomColor: 'black' }}>
                  CHECK OUT LATEST BLOGS
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