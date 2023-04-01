import React from 'react'
import {
    VStack,
    Text,
    HStack,
    Stack,
    Button,
    Box,
    Image,
} from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../../hocs/Navbar'
import Footer from '../../hocs/Footer'

const Courses = () => {
    return (
        <>
            <Head><title>Courses</title></Head>

            <Navbar />
            <br /><br />
            <Box p={[4, 16]}>
                <Text
                    fontSize={'4xl'}
                    fontWeight={'600'}
                    textTransform={'capitalize'}
                    textAlign={'center'}
                >Enrol In Our Courses</Text>
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
                    <Image src={'https://studyabroadnations.com/wp-content/uploads/2021/03/beauty.jpg'} w={['full', 'sm']} h={60} objectFit={'cover'} />
                    <Text fontSize={'2xl'} fontWeight={'600'}>Chemical Peel Course</Text>
                    <br />
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum nulla laborum iure temporibus id. Temporibus at odio in qui voluptatum dolores perferendis, magni repudiandae, reiciendis eius, quo reprehenderit nemo!</Text>
                    <br />
                    <Button rounded={0} colorScheme='whatsapp' w={'full'}>Enrol Now</Button>
                </Box>
                <Box
                    p={4}
                    bg={'white'}
                    boxShadow={'lg'}
                    w={['full', 'sm']}
                >
                    <Image src={'https://5.imimg.com/data5/SELLER/Default/2022/7/SV/LZ/CC/140980125/advance-beauty-courses-500x500.jpg'} w={['full', 'sm']} h={60} objectFit={'cover'} />
                    <Text fontSize={'2xl'} fontWeight={'600'}>Dermaplan Course</Text>
                    <br />
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum nulla laborum iure temporibus id. Temporibus at odio in qui voluptatum dolores perferendis, magni repudiandae, reiciendis eius, quo reprehenderit nemo!</Text>
                    <br />
                    <Button rounded={0} colorScheme='twitter' w={'full'}>Enrol Now</Button>
                </Box>
                <Box
                    p={4}
                    bg={'white'}
                    boxShadow={'lg'}
                    w={['full', 'sm']}
                >
                    <Image src={'https://5.imimg.com/data5/SELLER/Default/2022/7/SV/LZ/CC/140980125/advance-beauty-courses-500x500.jpg'} w={['full', 'sm']} h={60} objectFit={'cover'} />
                    <Text fontSize={'2xl'} fontWeight={'600'}>Aesthetic Course</Text>
                    <br />
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum nulla laborum iure temporibus id. Temporibus at odio in qui voluptatum dolores perferendis, magni repudiandae, reiciendis eius, quo reprehenderit nemo!</Text>
                    <br />
                    <Button rounded={0} colorScheme='pink' w={'full'}>Enrol Now</Button>
                </Box>
            </Stack>
            <Footer />
        </>
    )
}

export default Courses