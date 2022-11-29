import { Flex, Image, Text, Box, HStack } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

import Navbar from '../../hocs/Navbar'
import Footer from '../../hocs/Footer'
import Banner from '../../hocs/Banner'
import styles from '../../styles/Home.module.css'

import {BsCalendar2} from 'react-icons/bs'

const blogId = () => {
    const posts = [10,11,12]
  return (
    <>
        <Navbar />
        <Text
        className={styles.cursive}
        mt={20}
        px={[4,16]}
        fontSize={[36,56]}
        >
            Which facewash is best for your skin?
        </Text>
        <Text color={'darkslategray'} px={[4,16]}>
            By Robert Downey Jr. &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 23 November, 2022
        </Text>

        <Flex
        p={[4,16]}
        pb={4}
        direction={['column-reverse', 'row']}
        alignItems={'center'}
        justifyContent={'center'}
        >
            <Text mr={[0,12]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae provident a. 
                Cumque rem soluta saepe qui labore. Officia voluptatum ipsam, iste rem asperiores magnam 
                consectetur sapiente est tempora facilis qui id architecto laudantium repellat pariatur 
                quo dolores quasi maxime 
                corrupti velit provident animi, voluptate facere voluptatibus. Ratione, amet saepe.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae provident a. 
                Cumque rem soluta saepe qui labore. Officia voluptatum ipsam, iste rem asperiores magnam 
                consectetur sapiente est tempora facilis qui id architecto laudantium repellat pariatur 
                quo dolores quasi maxime Cumque rem soluta saepe qui labore. Officia voluptatum ipsam, iste rem asperiores magnam 
                consectetur sapiente est tempora facilis qui id architecto laudantium repellat pariatur 
                quo dolores quasi maxime 
                corrupti velit provident animi, voluptate facere voluptatibus. Ratione, amet saepe.
            </Text>
            <Image 
            src={'https://goodmockups.com/wp-content/uploads/2019/11/Free-Natural-Face-Wash-Pump-Spray-Scrub-Jar-Mockup-PSD-File-1.jpg'}
            w={['sm','md','lg']}
            h={[48,56,72]}
            mb={[4,0]}
            objectFit={'cover'}
            objectPosition={'center'}
            />
        </Flex>
        <Text
        p={[4,16]}
        >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, in vero. Deserunt 
            facere magnam repudiandae laborum debitis officiis harum impedit. Inventore eveniet 
            molestiae veritatis ratione dolores unde voluptatum voluptatibus modi suscipit 
            dolorum tempore aut quia pariatur earum, voluptates laudantium, doloremque nemo 
            exercitationem cupiditate ullam perspiciatis quae id repudiandae! Quod id porro 
            aliquam iure, illum, deleniti facere mollitia cupiditate quam nobis dolorem architecto
            adipisci, repudiandae sed a nostrum exercitationem commodi ducimus odit! Nisi 
            reprehenderit ratione dolor reiciendis placeat porro facilis? Mollitia, quo autem 
            eos odit dignissimos optio perspiciatis praesentium aperiam numquam laudantium inventore 
            enim minus illum ab exercitationem id vero iure voluptatem, alias nulla est, officiis 
            qui sapiente? Aliquam qui ipsam laborum earum esse quibusdam debitis eius quae, eum 
            adipisci nemo. adipisci, repudiandae sed a nostrum exercitationem commodi ducimus odit! Nisi 
            reprehenderit ratione dolor reiciendis placeat porro facilis? Mollitia, quo autem 
            eos odit dignissimos optio perspiciatis praesentium aperiam numquam laudantium inventore 
            enim minus illum ab exercitationem id vero iure voluptatem, alias nulla est, officiis 
            qui sapiente? Aliquam qui ipsam laborum earum esse quibusdam debitis eius quae, eum 
            adipisci nemo.
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, in vero. Deserunt 
            facere magnam repudiandae laborum debitis officiis harum impedit. Inventore eveniet 
            molestiae veritatis ratione dolores unde voluptatum voluptatibus modi suscipit 
            dolorum tempore aut quia pariatur earum, voluptates laudantium, doloremque nemo 
            exercitationem cupiditate ullam perspiciatis quae id repudiandae! Quod id porro 
            aliquam iure, illum, deleniti facere mollitia cupiditate quam nobis dolorem architecto
            adipisci, repudiandae sed a nostrum exercitationem commodi ducimus odit! Nisi 
            reprehenderit ratione dolor reiciendis placeat porro facilis? Mollitia, quo autem 
            eos odit dignissimos optio perspiciatis praesentium aperiam numquam laudantium inventore 
            enim minus illum ab exercitationem id vero iure voluptatem, alias nulla est, officiis 
            qui sapiente? Aliquam qui ipsam laborum earum esse quibusdam debitis eius quae, eum 
            adipisci nemo. adipisci, repudiandae sed a nostrum exercitationem commodi ducimus odit! Nisi 
            reprehenderit ratione dolor reiciendis placeat porro facilis? Mollitia, quo autem 
            eos odit dignissimos optio perspiciatis praesentium aperiam numquam laudantium inventore 
            enim minus illum ab exercitationem id vero iure voluptatem, alias nulla est, officiis 
            qui sapiente? Aliquam qui ipsam laborum earum esse quibusdam debitis eius quae, eum 
            adipisci nemo.
        </Text>
        <Box mt={0} mx={'auto'} w={28} h={.5} bg={'blackAlpha.800'}></Box>

        <Text p={[4,16]} fontSize={24}>
            Recent Blogs
        </Text>

        <Flex 
        px={[4,16]}
        pb={8}
        alignItems={'center'}
        justifyContent={['center', 'space-between']}
        wrap={'wrap'}>
            {posts.map((postDate)=>
            <Link key={postDate} href={'blog/'}>
                <Box
                my={4}
                w={['auto','xs']}
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
        <Banner />
        <Footer />
    </>
  )
}

export default blogId