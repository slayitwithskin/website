import { Text, Flex, Box, Image, HStack } from '@chakra-ui/react'
import Head from 'next/head'
import { React, useState } from 'react'

import Navbar from '../../hocs/Navbar'
import Footer from '../../hocs/Footer'

import styles from '../../styles/Home.module.css'
import { BsCalendar2 } from 'react-icons/bs'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Link from 'next/link'

import blogs from '../api/blogs'
import Pagination from '../../hocs/Pagination'

const Blogs = () => {
    const [posts, setPosts] = useState(blogs);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

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
                fontSize={[40, 56]}
                textAlign={'center'}
                className={styles.cursive}
            >
                Read Our Blogs
            </Text>

            <Flex
                p={[4, 16]}
                alignItems={'center'}
                justifyContent={['center', 'space-between']}
                wrap={'wrap'}>
                {posts.slice(indexOfFirstPost, indexOfLastPost).map((post) =>
                    <Link key={post.id} as={`/blogs/${post.id}?title=${post.slug}`} href={`blogs/${post.id}`}>
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
                                src={post.image}
                                w={'full'}
                                h={48}
                                objectFit={'cover'}
                                objectPosition={'center'}
                            />
                            <Box
                                p={4}
                                bg={'white'}
                            >
                                {/* <HStack spacing={2}>
                                    <BsCalendar2 fontSize={10} fontWeight={600} />
                                    <Text color={'darkslategray'} fontSize={10} fontWeight={600}>{post.id || "NA"} Nov 2022</Text>
                                </HStack> */}
                                <Text
                                    my={2}
                                    fontSize={18}
                                    fontWeight={600}
                                    textTransform={'capitalize'}
                                >
                                    {post.title.slice(0, 40) || "No title"}...
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

            <Flex
                p={[4, 8]}
                justifyContent={'center'}
            >
                <HStack spacing={4}>
                    <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                    />
                </HStack>
            </Flex>
            <Footer />
        </>
    )
}

export default Blogs