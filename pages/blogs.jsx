import { Text, Flex, Box, Image, HStack } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

import Navbar from '../hocs/Navbar'
import Footer from '../hocs/Footer'

import styles from '../styles/Home.module.css'
import { BsCalendar2 } from 'react-icons/bs'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Link from 'next/link'

const blogs = () => {
  const posts = [10,11,12,13,14,15,16,17,18]
  return (
    <>
        <Head>
            <title>Blogs</title>
        </Head>
        <Navbar />
        <Text 
        mt={24}
        textAlign={'center'}
        className={styles.monts}
        >
            TALKS OF WISDOM
        </Text>
        <Text 
        fontSize={[40,56]}
        textAlign={'center'}
        className={styles.cursive}
        >
            Read Our Blogs
        </Text>

        <Flex 
        p={[4,16]}
        alignItems={'center'}
        justifyContent={['center', 'space-between']}
        wrap={'wrap'}>
            {posts.map((postDate)=>
            <Link key={postDate} href={'blog/'}>
                <Box
                my={4}
                w={['sm','xs']}
                boxShadow={'lg'}
                transition={'all .3s ease'}

                _hover={{
                    transform: 'translateY(-8px)',
                    boxShadow: 'xl'
                }}
                >
                    <Image 
                    src={'https://goodmockups.com/wp-content/uploads/2019/11/Free-Natural-Face-Wash-Pump-Spray-Scrub-Jar-Mockup-PSD-File-1.jpg'}
                    w={'inherit'}
                    h={48}
                    objectFit={'cover'}
                    objectPosition={'center'}
                    />
                    <Box
                    p={4}
                    bg={'white'}
                    >
                    <HStack spacing={2}>
                        <BsCalendar2 fontSize={10} fontWeight={600} />
                        <Text color={'darkslategray'} fontSize={10} fontWeight={600}>{postDate} Nov 2022</Text>
                    </HStack>
                    <Text
                    my={2}
                    fontSize={18}
                    fontWeight={600}
                    textTransform={'capitalize'}
                    >
                    Which facewash is best for your skin?
                    </Text>
                    <Text
                    fontSize={14}
                    color={'darkslategray'}
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis consectetur...
                    </Text>
                    </Box>
                </Box>
            </Link>
            )}
        </Flex>
        <Flex
        p={[4,16]}
        justifyContent={'center'}
        >
            <HStack spacing={4}>
                <Link href={'#'}>
                    <Box boxSize={8} 
                    borderRadius={'50%'} 
                    bg={'burlywood'}
                    display={'grid'}
                    placeContent={'center'}
                    >
                        <AiOutlineLeft />
                    </Box>
                </Link>
                <Link href={'#'}>
                    <Box boxSize={8} 
                    borderRadius={'50%'} 
                    bg={'burlywood'}
                    display={'grid'}
                    placeContent={'center'}
                    >
                        1
                    </Box>
                </Link>
                <Link href={'#'}>
                    <Box boxSize={8} 
                    borderRadius={'50%'} 
                    bg={'transparent'}
                    display={'grid'}
                    placeContent={'center'}
                    >
                        2
                    </Box>
                </Link>
                <Link href={'#'}>
                    <Box boxSize={8} 
                    borderRadius={'50%'} 
                    bg={'transparent'}
                    display={'grid'}
                    placeContent={'center'}
                    >
                        3
                    </Box>
                </Link>
                <Link href={'#'}>
                    <Box boxSize={8} 
                    borderRadius={'50%'} 
                    bg={'burlywood'}
                    display={'grid'}
                    placeContent={'center'}
                    >
                        <AiOutlineRight />
                    </Box>
                </Link>
            </HStack>
        </Flex>
        <Footer />
    </>
  )
}

export default blogs