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
          <Image src={'/onlineacademy.jpg'} w={['full', 'sm']} h={60} objectFit={'cover'} />
          <Text fontSize={'2xl'} fontWeight={'600'}>Online Academy</Text>
          <br />
          <Text>
            <b>May Month Launch</b> <br />
            <b>Five days Course</b><br />
            Course Topics Such as : <br />
            • Anatomy <br />
            • Theory of face <br />
            • Facial massages <br />
            • Micro Derma <br />
            • Hydra facial <br />
            • Galbinac <br />
            • High Frequency <br />
            • Skin Consultation <br />
            • Chemical peel <br />
            • Product Knowledge <br />
          </Text>
          <br />
          <Link href={'https://buy.stripe.com/aEU7vVbZ8dFx6iseUV'}>
          <Button rounded={0} bg={'#BA90C6'} colorScheme='pink' w={'full'}>Enrol Now (Rs. 20000)</Button>
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
            • Micro Needling <br />
            • Chemical peel <br />
            • laser <br />
            • Carbon laser <br />
            • HIFU <br />
            • Anatomy <br />
            • Theory of face <br />
            • Facial massages <br />
            • Micro Derma <br />
            • Hydra facial <br />
            • Galbinac <br />
            • High Frequency <br />
            • Skin Consultation <br />
            • Chemical peel <br />
            • Product Knowledge <br />
            • Government Certification <br />
          </Text>
          <br />
          <Link href={'https://buy.stripe.com/6oE5nNaV49phcGQ9AC'} target='_blank'>
          <Button rounded={0} bg={'#BA90C6'} colorScheme='pink' w={'full'}>Enrol Now (Rs. 75000)</Button>
          </Link>
        </Box>
      </Stack>
      <Footer />
    </>
  )
}

export default Academy