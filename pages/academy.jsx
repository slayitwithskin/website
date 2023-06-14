import React from 'react'
import {
  Stack,
  Button,
  Box,
  Text,
  Image,
} from '@chakra-ui/react'
import Navbar from '../hocs/Navbar'
import Footer from '../hocs/Footer'
import Head from 'next/head'
import Link from 'next/link'

const Academy = () => {
  return (
    <>
      <Head><title>Academy</title></Head>

      <Navbar />
      <br /><br />
      <Box p={[4, 16]}>
        <Text
          fontSize={'4xl'}
          fontWeight={'600'}
          textTransform={'capitalize'}
          textAlign={'center'}
        >Learn The Secret Science of Beauty from the Experts</Text>
      </Box>
      <Stack
        direction={['column', 'row']}
        justifyContent={'center'}
        w={['full']}
        minH={'100vh'}
        p={[4, 16]} spacing={16}
        alignItems={'flex-start'}
      >
        <Box
          p={4}
          bg={'white'}
          boxShadow={'lg'}
          w={['full', 'sm']}
        >
          <Image src={'/updated-academy.jpg'} w={['full', 'sm']} h={60} objectFit={'cover'} />
          <Text fontSize={'2xl'} fontWeight={'600'}>Online Academy</Text>
          <br />
          <Text>
            <b>May Month Launch</b> <br />
            <b>Five days Course</b><br />
            • Anatomy <br />
            • Theory <br />
            • Facial massage <br />
            • High frequency <br />
            • Galvanic <br />
            • Micro derma brasion <br />
            • Hydrafacial <br />
            • Chemical peel <br />
            • Product knowledge <br />
            • Client consultation <br />
            • Exam <br />
            • Certification <br />

          </Text>
          <br />
          <Link href={'https://wa.me/919004574190'} target='_blank'>
            <Button rounded={0} bg={'#BA90C6'} colorScheme='pink' w={'full'}>Enquire On WhatsApp</Button>
          </Link>
        </Box>
        <Box
          p={4}
          bg={'white'}
          boxShadow={'lg'}
          w={['full', 'sm']}
        >
          <Image src={'/offlineacademy.jpg'} w={['full', 'sm']} h={60} objectFit={'cover'} />
          <Text fontSize={'2xl'} fontWeight={'600'}>Offline Academy</Text>
          <br />
          <Text>
            <b>Nashik April Batch</b> <br />
            <b>Seven days Course</b><br />
            • Anatomy <br />
            • Theory <br />
            • Facial massage <br />
            • High frequency <br />
            • Galvanic <br />
            • Micro derma brasion <br />
            • Hydra facial <br />
            • Chemical peel <br />
            • Carbon facial <br />
            • Micro needling <br />
            • Bb glow <br />
            • Hifu <br />
            • Light therapy <br />
            • Korean facials <br />
            • Facelift <br />
            • Laser <br />
            • Exam <br />
            • Certification <br />

          </Text>
          <br />
          <Link href={'https://wa.me/919004574190'} target='_blank'>
            <Button rounded={0} bg={'#BA90C6'} colorScheme='pink' w={'full'}>Enquire On WhatsApp</Button>
          </Link>
        </Box>
      </Stack>
      <Footer />
    </>
  )
}

export default Academy