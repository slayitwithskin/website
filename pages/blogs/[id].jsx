import { Flex, Image, Text, Box, HStack, Spinner } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
const parse = require('html-react-parser')

import Navbar from '../../hocs/Navbar'
import Footer from '../../hocs/Footer'
import Banner from '../../hocs/Banner'
import styles from '../../styles/Home.module.css'
import { BsCalendar2 } from 'react-icons/bs'


import Head from 'next/head'
import { useRouter } from 'next/router'

import blogs from '../api/blogs'

export function getStaticPaths() {
    
    const allPosts = blogs.map(blog =>(blog.id))

    return {
        paths: allPosts.map(post => ({params: {id: `${post}`}})),
        fallback: false, 
    }
}

export const getStaticProps = (context) => {
    const postId = context.params.id
    const data = blogs[postId - 1]

    return {
        props: {
            data
        }
    }
}


const Post = ({ data }) => {
    const router = useRouter()
    const { title } = router.query

    return (
        <>
            <Head><title>{data.title}</title></Head>
            <Navbar />
            <Text
                className={styles.cursive}
                mt={20}
                px={[4, 16]}
                fontSize={[36, 56]}
                textTransform={'capitalize'}
            >
                {data.title}
            </Text>
            <Text color={'darkslategray'} px={[4, 16]}>
                By Robert Downey Jr. &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 23 November, 2022
            </Text>

            <Flex
                p={[4, 16]}
                pb={4}
                direction={['column-reverse', 'row']}
                alignItems={'flex-start'}
                justifyContent={'center'}
            >
                <Text mr={[0, 12]} w={'full'} fontSize={20} color={'darkslategray'}>
                    {parse(data.intro)}
                </Text>
                <Image
                    src={'https://goodmockups.com/wp-content/uploads/2019/11/Free-Natural-Face-Wash-Pump-Spray-Scrub-Jar-Mockup-PSD-File-1.jpg'}
                    w={['sm', 'md', 'lg']}
                    h={[48, 56, 72]}
                    mb={[4, 0]}
                    objectFit={'cover'}
                    objectPosition={'center'}
                />
            </Flex>
            <Box
                p={[4, 16]}
            >
                {parse(data.content)}
            </Box>
            <Box mt={0} mx={'auto'} w={28} h={.5} bg={'blackAlpha.800'}></Box>

            <Text p={[4, 16]} fontSize={24}>
                Recent Blogs
            </Text>

            <Flex
                px={[4, 16]}
                pb={8}
                alignItems={'center'}
                justifyContent={['center', 'space-between']}
                wrap={'wrap'}>
                {blogs.slice(blogs.length - 3, blogs.length).map((post) =>
                    <Link key={post} href={`blogs/${post.id}`} as={`/blogs/${post.id}?title=${post.slug}`}>
                        <Box
                            my={4}
                            w={['auto', 'xs']}
                            boxShadow={'lg'}
                            transition={'all .3s ease'}

                            _hover={{
                                transform: 'translateY(-8px)',
                                boxShadow: 'xl'
                            }}
                        >
                            <Image
                                src={'https://goodmockups.com/wp-content/uploads/2019/11/Free-Natural-Face-Wash-Pump-Spray-Scrub-Jar-Mockup-PSD-File-1.jpg'}
                                w={'full'}
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
                                    <Text color={'darkslategray'} fontSize={10} fontWeight={600}>{post.id} Nov 2022</Text>
                                </HStack>
                                <Text
                                    my={2}
                                    fontSize={18}
                                    fontWeight={600}
                                    textTransform={'capitalize'}
                                >
                                    {post.title.slice(0, 26) || "No title"}...
                                </Text>
                                <Text
                                    fontSize={14}
                                    color={'darkslategray'}
                                >
                                    {post.intro.slice(0, 80) || "Please add description to this post"}...
                                </Text>
                            </Box>
                        </Box>
                    </Link>
                )}
            </Flex>
            <Banner />
            <Footer />
        </>
    )

}

export default Post
