import React from 'react'
import styles from '/styles/Home.module.css'

import {
  Flex,
  Box,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Button
} from '@chakra-ui/react'
import { BsArrowRight, BsEnvelopeFill, BsTelephoneFill } from 'react-icons/bs'

import Link from 'next/link'
import Head from 'next/head'

import '@splidejs/react-splide/css/sea-green';

import Reviews from '../../hocs/Reviews'
import Faqs from '../../hocs/Faqs'
import LPForm from '../../hocs/LPForm'

const Index = () => {
  return (
    <>
      <Head>
        <title>Best Skin consultation online | Slay it with Skin</title>
        <meta name="robots" content="noindex"></meta>
      </Head>

      <nav>
        <Flex py={2} px={['8', '24']} justifyContent={['center', 'flex-start']}>
          <Image src='/logo.png' alt='Logo' w={'auto'} h={'10'} />
        </Flex>
      </nav>

      <Flex id='contact-us' px={['6', '16', '24']} py={['8', '16']} bg={'#D9B3C4'} flexDirection={['column', 'row']} gap={['10', '4']} alignItems={'center'}>
        <Box width={['100%', '50%']}>
          <Text fontSize={["42", "56", "64"]} className={styles.cursive} textAlign={['center', 'left']} lineHeight={1}>Welcome to </Text>
          <Text mb={4} fontSize={["36", "48", "56"]} className={styles.cursive} textAlign={['center', 'left']} lineHeight={1} color={'gray.600'}>Slay It With Skin</Text>
          <Text fontSize={['16', '18']} textAlign={['center', 'left']}>Give your skin the treatment it deserves.</Text>
        </Box>
        <Box width={['100%', '50%']}>
          <LPForm />
        </Box>
      </Flex>

      {/* Our services */}
      <Flex direction={'column'} alignItems={'center'} py={[16, 20]} px={[4, 20]}>
        <Text className={styles.cursive} fontSize={['40', '56']}>Our Services</Text>
        <Box width={24} h={.5} bg={'black'} mb={10}></Box>
        <Flex maxWidth={'1080px'} gap={[10, 20]} direction={['column', 'row']}>
          <Box boxShadow={'0 0 10px rgba(0,0,0,0.2)'} pb={8} borderRadius={4} overflow={'hidden'} flex={1}>
            <Image src='/updated-academy.jpg' height={['auto', '320px']} width={'100%'} mb={4} objectFit={'cover'} />
            <Box px={[4, 6]}>
              <Text className={styles.cursive} fontSize={24}>Online Academy</Text>
              <Text fontWeight={'800'} color={'blackAlpha.700'} mb={2}>May Month Launch | Five days Course</Text>

              <UnorderedList fontSize={[14, 16]} display={'grid'} m={0} gridTemplateColumns={'repeat(2,1fr)'} textAlign={'left'} listStylePosition={'inside'} gap={2} flexWrap={'wrap'} justifyContent={'center'}>
                <ListItem>Anatomy</ListItem>
                <ListItem>Theory</ListItem>
                <ListItem>Facial massage</ListItem>
                <ListItem>High frequency</ListItem>
                <ListItem>Galvanic</ListItem>
                <ListItem>Micro derma brasion</ListItem>
                <ListItem>Hydrafacial</ListItem>
                <ListItem>Chemical peel</ListItem>
                <ListItem>Product knowledge</ListItem>
                <ListItem>Client consultation</ListItem>
                <ListItem>Exam</ListItem>
                <ListItem>Certification</ListItem>
              </UnorderedList>
            </Box>
          </Box>

          <Box boxShadow={'0 0 10px rgba(0,0,0,0.2)'} pb={8} borderRadius={4} overflow={'hidden'} flex={1}>
            <Image src='/offlineacademy.jpg' height={['auto', '320px']} width={'100%'} mb={4} objectFit={'cover'} />
            <Box px={[4, 6]}>
              <Text className={styles.cursive} fontSize={24}>Offline Academy</Text>
              <Text fontWeight={'800'} color={'blackAlpha.700'} mb={2}>Nashik April Batch | Seven days Course</Text>

              <UnorderedList fontSize={[14, 16]} display={'grid'} m={0} gridTemplateColumns={'repeat(2,1fr)'} textAlign={'left'} listStylePosition={'inside'} gap={2} flexWrap={'wrap'} justifyContent={'center'}>
                <ListItem> Anatomy</ListItem>
                <ListItem> Theory</ListItem>
                <ListItem> Facial massage</ListItem>
                <ListItem> High frequency</ListItem>
                <ListItem> Galvanic</ListItem>
                <ListItem> Micro derma brasion</ListItem>
                <ListItem> Hydra facial</ListItem>
                <ListItem> Chemical peel</ListItem>
                <ListItem> Carbon facial</ListItem>
                <ListItem> Micro needling</ListItem>
                <ListItem> Bb glow</ListItem>
                <ListItem> Hifu</ListItem>
                <ListItem> Light therapy</ListItem>
                <ListItem> Korean facials</ListItem>
                <ListItem> Facelift</ListItem>
                <ListItem> Laser</ListItem>
                <ListItem> Exam</ListItem>
                <ListItem> Certification</ListItem>
              </UnorderedList>
            </Box>
          </Box>

        </Flex>

        <Link href='#contact-us'>
          <Button mt={[8, 16]} bg={'brown'} color={'white'} p={6} _hover={{ bg: 'black' }} textTransform={'uppercase'}>Contact Us</Button>
        </Link>
      </Flex>

      {/* Why SIWS */}
      <Flex direction={'column'} mb={10} alignItems={'center'} py={[10, 10]} px={[4, 20]} bg={'gray.100'}>
        <Text className={styles.cursive} fontSize={['40', '56']}>Why Us</Text>
        <Box width={24} h={.5} bg={'black'} mb={10}></Box>
        <Flex gap={[4, 16]} flexWrap={'wrap'} whiteSpace={['normal', 'nowrap']}>
          <Box textAlign={'center'} flex={['auto', 1]} width={['calc(50% - .5rem)', 'auto']}>
            <Image width={[16, 20]} mx={'auto'} mb={4} src='/profile.png' />
            <Text fontSize={[16, 18]}>Personalized Consultation</Text>
          </Box>
          <Box textAlign={'center'} flex={['auto', 1]} width={['calc(50% - .5rem)', 'auto']}>
            <Image width={[16, 20]} mx={'auto'} mb={4} src='/online-education.png' />
            <Text fontSize={[16, 18]}>Online & Offline Academy</Text>
          </Box>
          <Box textAlign={'center'} flex={['auto', 1]} width={['calc(50% - .5rem)', 'auto']}>
            <Image width={[16, 20]} mx={'auto'} mb={4} src='/costumer.png' />
            <Text fontSize={[16, 18]}>Highly Trained Professionals</Text>
          </Box>
          <Box textAlign={'center'} flex={['auto', 1]} width={['calc(50% - .5rem)', 'auto']}>
            <Image width={[16, 20]} mx={'auto'} mb={4} src='/laser.png' />
            <Text fontSize={[16, 18]}>Cutting-edge technology</Text>
          </Box>
        </Flex>
      </Flex>

      <Flex px={[8, 12, 16]} py={8} justifyContent={'center'} gap={[16, 48]} wrap={'wrap'}>
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
        </Flex>
      </Flex>

      <Reviews />

      <Faqs />
      <Box textAlign={'center'} mt={['-14',"-20"]} mb={[16, 24]}>
        <Link href='#contact-us'>
          <Button mt={[8, 16]} bg={'brown'} color={'white'} p={6} _hover={{ bg: 'black' }} textTransform={'uppercase'}>Contact Us</Button>
        </Link>
      </Box>

      {/* Footer */}
      <Flex py={6} gap={4} alignItems={'center'} justifyContent={'space-between'} px={[6, 16]} direction={['column', 'row']} borderTop={'1px solid'} borderColor={'blackAlpha.500'}>
        <Image src='/logo.png' h={10} />
        <Flex alignItems={'center'} gap={2}>
          <BsTelephoneFill />
          <Link href={'tel:919004574190'}>+91 90045 74190</Link>
        </Flex>
        <Flex alignItems={'center'} gap={2}>
          <BsEnvelopeFill />
          <Link href={'mailto:info@slayitwithskin.com'}>info@slayitwithskin.com</Link>
        </Flex>
      </Flex>


    </>
  )
}

export default Index