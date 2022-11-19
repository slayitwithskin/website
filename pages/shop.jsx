import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/sea-green';
import Head from 'next/head';
import Link from 'next/link'

import shop from '../styles/Shop.module.css'
import styles from '../styles/Home.module.css'

import {
    Badge,
    Box, Button, Flex, HStack, Image, Spacer, Text
} from '@chakra-ui/react'
import Navbar from '../hocs/Navbar';
import { BsBagCheckFill, BsFillCartCheckFill, BsHeartFill } from 'react-icons/bs';
import { HiShoppingBag } from 'react-icons/hi2';
import Footer from '../hocs/Footer';

const Shop = () => {
  return (
    <>
        <Head>
            <title>Shop | Slay it with Skin</title>
        </Head>
        <Navbar />
        
        <Splide
        options={{
            type: "fade",
            padding: "0",
            gap: 0,
            width: "100%",
            perPage: 1,
            perMove: 1,
            arrows: false,
            autoplay: true,
            interval: 3000,
            rewind: true
        }}
        className={shop.carousel}
        >
            <SplideSlide>
                <Box
                w={'full'}
                h={['auto','60vh','90vh']}
                bg={'blackAlpha.800'}
                >
                    <Flex w={'full'} h={'full'} alignItems={'center'} justifyContent={'center'}>
                        <Text fontSize={64} color={'white'}>Slide 1</Text>
                    </Flex>
                </Box>
            </SplideSlide>
            <SplideSlide>
                <Box
                w={'full'}
                h={['auto','60vh','90vh']}
                bg={'red.300'}
                >
                    <Flex w={'full'} h={'full'} alignItems={'center'} justifyContent={'center'}>
                        <Text fontSize={64} color={'white'}>Slide 2</Text>
                    </Flex>
                </Box>
            </SplideSlide>
            <SplideSlide>
                <Box
                w={'full'}
                h={['auto','60vh','90vh']}
                bg={'blue.300'}
                >
                    <Flex w={'full'} h={'full'} alignItems={'center'} justifyContent={'center'}>
                        <Text fontSize={64} color={'white'}>Slide 3</Text>
                    </Flex>
                </Box>
            </SplideSlide>
        </Splide>

        <Text className={styles.monts} textAlign={'center'} mt={16}>WE VALUE YOUR TRUST</Text>
        <Splide
        options={{
            width: "100%",
            padding: {
                top: 0,
            },
            perPage: 3,
            gap: 50,
            arrows: false
        }}
        >
            <SplideSlide>
                    <Image 
                    src='freedelivery.png'
                    w={160}
                    m={'0 auto'}
                    />
            </SplideSlide>
            <SplideSlide>
                    <Image 
                    src='freedelivery.png'
                    w={160}
                    m={'0 auto'}
                    />
            </SplideSlide>
            <SplideSlide>
                    <Image 
                    src='freedelivery.png'
                    w={160}
                    m={'0 auto'}
                    />
            </SplideSlide>
        </Splide>

        <Text className={styles.monts} textAlign={'center'} mt={16}>LOVED BY EVERYONE</Text>
        <Text className={styles.cursive} textAlign={'center'} fontSize={[40,56]}>Our Bestsellers</Text>
        
        <Splide
        options={{
            breakpoints: {
                576: {
                    perPage: 1,
                    gap: 10,
                },
                998: {
                    perPage: 2,
                }
            },
            perPage: 3,
            perMove: 1,
            arrows: false,
        }}
        className={shop.productsCarousel}
        >
            <SplideSlide>
                <Box pos={'relative'} mx={[0,8]} my={[4,4]} w={["unset",64,72]} transition={"all .3s ease"} border={'1px'} borderColor={'green.400'} _hover={{ boxShadow: 'xl', transform: 'translateY(-8px)' }}>
                    <Badge pos={'absolute'} top={2} right={2} px={2} py={2} bg={'yellow.600'} color={'white'}>50% OFF</Badge>
                    <Image
                    src='https://goodmockups.com/wp-content/uploads/2019/11/Free-Natural-Face-Wash-Pump-Spray-Scrub-Jar-Mockup-PSD-File-1.jpg'
                    alt='Face Wash'
                    />
                    <HStack spacing={4} p={4} pb={0}>
                        <Image 
                        boxSize={12}
                        objectFit={'cover'}
                        border={'1px solid rgba(220,220,220)'}
                        rounded={4}
                        src={'https://99effect.com/wp-content/uploads/2021/01/Dettol-Hand-Wash-Bottle-Label-Mockup-scaled-1.jpg'}
                        />
                        <Image 
                        boxSize={12}
                        objectFit={'cover'}
                        border={'1px solid rgba(220,220,220)'}
                        rounded={4}
                        src={'https://99effect.com/wp-content/uploads/2021/01/Dettol-Hand-Wash-Bottle-Label-Mockup-scaled-1.jpg'}
                        />
                        <Image 
                        boxSize={12}
                        objectFit={'cover'}
                        border={'1px solid rgba(220,220,220)'}
                        rounded={4}
                        src={'https://99effect.com/wp-content/uploads/2021/01/Dettol-Hand-Wash-Bottle-Label-Mockup-scaled-1.jpg'}
                        />
                        <Image 
                        boxSize={12}
                        objectFit={'cover'}
                        border={'1px solid rgba(220,220,220)'}
                        rounded={4}
                        src={'https://99effect.com/wp-content/uploads/2021/01/Dettol-Hand-Wash-Bottle-Label-Mockup-scaled-1.jpg'}
                        />
                    </HStack>
                    <Box p={"4"}>
                        <Text className={styles.monts} fontSize={20} fontWeight={600} color={'black'}>Super Clean Facewash</Text>
                        <Text fontSize={14} color={'darkslategray'}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</Text>

                        <Flex mt={4}>
                            <HStack><Text pos={'relative'} fontSize={16} color={'red.400'} bottom={.5}><BsHeartFill /></Text><Text className={styles.monts} fontSize={16} fontWeight={600} color={'red.400'}>48</Text></HStack>
                            <Spacer />
                            <HStack><Text pos={'relative'} fontSize={16} color={'green.600'} bottom={.5}><BsBagCheckFill /></Text><Text className={styles.monts} fontSize={16} fontWeight={600} color={'green.600'}>127</Text></HStack>
                        </Flex>
                        
                        <Flex pos={'relative'} w={'full'} p={0} mt={4} alignItems={'center'} justifyContent={'space-between'}>
                            <Box p={2}><Text className={styles.monts} color={'darkslategray'} fontWeight={600}>$ 14.99</Text></Box>
                            <Button 
                            // pos={'absolute'}
                            // bottom={-8}
                            left={0}
                            w={'60%'}
                            rounded={0}
                            bg={'green.400'}
                            color={'white'}
                            transition={"all .3s ease"}

                            _hover={{bg: 'green.600'}}
                            >
                                Add To Cart
                            </Button>
                        </Flex>
                    </Box>
                </Box>
            </SplideSlide>
            <SplideSlide>
                <Box pos={'relative'} mx={[0,8]} my={[4,4]} w={["unset",64,72]} transition={"all .3s ease"} border={'1px'} borderColor={'green.400'} _hover={{ boxShadow: 'xl', transform: 'translateY(-8px)' }}>
                    <Badge pos={'absolute'} top={2} right={2} px={2} py={2} bg={'yellow.600'} color={'white'}>50% OFF</Badge>
                    <Image
                    src='https://goodmockups.com/wp-content/uploads/2019/11/Free-Natural-Face-Wash-Pump-Spray-Scrub-Jar-Mockup-PSD-File-1.jpg'
                    alt='Face Wash'
                    />
                    <HStack spacing={4} p={4} pb={0}>
                        <Image 
                        boxSize={12}
                        objectFit={'cover'}
                        border={'1px solid rgba(220,220,220)'}
                        rounded={4}
                        src={'https://99effect.com/wp-content/uploads/2021/01/Dettol-Hand-Wash-Bottle-Label-Mockup-scaled-1.jpg'}
                        />
                        <Image 
                        boxSize={12}
                        objectFit={'cover'}
                        border={'1px solid rgba(220,220,220)'}
                        rounded={4}
                        src={'https://99effect.com/wp-content/uploads/2021/01/Dettol-Hand-Wash-Bottle-Label-Mockup-scaled-1.jpg'}
                        />
                        <Image 
                        boxSize={12}
                        objectFit={'cover'}
                        border={'1px solid rgba(220,220,220)'}
                        rounded={4}
                        src={'https://99effect.com/wp-content/uploads/2021/01/Dettol-Hand-Wash-Bottle-Label-Mockup-scaled-1.jpg'}
                        />
                        <Image 
                        boxSize={12}
                        objectFit={'cover'}
                        border={'1px solid rgba(220,220,220)'}
                        rounded={4}
                        src={'https://99effect.com/wp-content/uploads/2021/01/Dettol-Hand-Wash-Bottle-Label-Mockup-scaled-1.jpg'}
                        />
                    </HStack>
                    <Box p={"4"}>
                        <Text className={styles.monts} fontSize={20} fontWeight={600} color={'black'}>Super Clean Facewash</Text>
                        <Text fontSize={14} color={'darkslategray'}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</Text>

                        <Flex mt={4}>
                            <HStack><Text pos={'relative'} fontSize={16} color={'red.400'} bottom={.5}><BsHeartFill /></Text><Text className={styles.monts} fontSize={16} fontWeight={600} color={'red.400'}>48</Text></HStack>
                            <Spacer />
                            <HStack><Text pos={'relative'} fontSize={16} color={'green.600'} bottom={.5}><BsBagCheckFill /></Text><Text className={styles.monts} fontSize={16} fontWeight={600} color={'green.600'}>127</Text></HStack>
                        </Flex>
                        
                        <Flex pos={'relative'} w={'full'} p={0} mt={4} alignItems={'center'} justifyContent={'space-between'}>
                            <Box p={2}><Text className={styles.monts} color={'darkslategray'} fontWeight={600}>$ 14.99</Text></Box>
                            <Button 
                            // pos={'absolute'}
                            // bottom={-8}
                            left={0}
                            w={'60%'}
                            rounded={0}
                            bg={'green.400'}
                            color={'white'}
                            transition={"all .3s ease"}

                            _hover={{bg: 'green.600'}}
                            >
                                Add To Cart
                            </Button>
                        </Flex>
                    </Box>
                </Box>
            </SplideSlide>
            <SplideSlide>
                <Box pos={'relative'} mx={[0,8]} my={[4,4]} w={["unset",64,72]} transition={"all .3s ease"} border={'1px'} borderColor={'green.400'} _hover={{ boxShadow: 'xl', transform: 'translateY(-8px)' }}>
                    <Badge pos={'absolute'} top={2} right={2} px={2} py={2} bg={'yellow.600'} color={'white'}>50% OFF</Badge>
                    <Image
                    src='https://goodmockups.com/wp-content/uploads/2019/11/Free-Natural-Face-Wash-Pump-Spray-Scrub-Jar-Mockup-PSD-File-1.jpg'
                    alt='Face Wash'
                    />
                    <HStack spacing={4} p={4} pb={0}>
                        <Image 
                        boxSize={12}
                        objectFit={'cover'}
                        border={'1px solid rgba(220,220,220)'}
                        rounded={4}
                        src={'https://99effect.com/wp-content/uploads/2021/01/Dettol-Hand-Wash-Bottle-Label-Mockup-scaled-1.jpg'}
                        />
                        <Image 
                        boxSize={12}
                        objectFit={'cover'}
                        border={'1px solid rgba(220,220,220)'}
                        rounded={4}
                        src={'https://99effect.com/wp-content/uploads/2021/01/Dettol-Hand-Wash-Bottle-Label-Mockup-scaled-1.jpg'}
                        />
                        <Image 
                        boxSize={12}
                        objectFit={'cover'}
                        border={'1px solid rgba(220,220,220)'}
                        rounded={4}
                        src={'https://99effect.com/wp-content/uploads/2021/01/Dettol-Hand-Wash-Bottle-Label-Mockup-scaled-1.jpg'}
                        />
                        <Image 
                        boxSize={12}
                        objectFit={'cover'}
                        border={'1px solid rgba(220,220,220)'}
                        rounded={4}
                        src={'https://99effect.com/wp-content/uploads/2021/01/Dettol-Hand-Wash-Bottle-Label-Mockup-scaled-1.jpg'}
                        />
                    </HStack>
                    <Box p={"4"}>
                        <Text className={styles.monts} fontSize={20} fontWeight={600} color={'black'}>Super Clean Facewash</Text>
                        <Text fontSize={14} color={'darkslategray'}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</Text>

                        <Flex mt={4}>
                            <HStack><Text pos={'relative'} fontSize={16} color={'red.400'} bottom={.5}><BsHeartFill /></Text><Text className={styles.monts} fontSize={16} fontWeight={600} color={'red.400'}>48</Text></HStack>
                            <Spacer />
                            <HStack><Text pos={'relative'} fontSize={16} color={'green.600'} bottom={.5}><BsBagCheckFill /></Text><Text className={styles.monts} fontSize={16} fontWeight={600} color={'green.600'}>127</Text></HStack>
                        </Flex>
                        
                        <Flex pos={'relative'} w={'full'} p={0} mt={4} alignItems={'center'} justifyContent={'space-between'}>
                            <Box p={2}><Text className={styles.monts} color={'darkslategray'} fontWeight={600}>$ 14.99</Text></Box>
                            <Button 
                            // pos={'absolute'}
                            // bottom={-8}
                            left={0}
                            w={'60%'}
                            rounded={0}
                            bg={'green.400'}
                            color={'white'}
                            transition={"all .3s ease"}

                            _hover={{bg: 'green.600'}}
                            >
                                Add To Cart
                            </Button>
                        </Flex>
                    </Box>
                </Box>
            </SplideSlide>
        </Splide>

        <Flex direction={['column', 'row']} bg={'orange.200'} my={16}>
            <Image 
            src={'https://goodmockups.com/wp-content/uploads/2019/11/Free-Natural-Face-Wash-Pump-Spray-Scrub-Jar-Mockup-PSD-File-1.jpg'}
            w={['100%','45%']}
            objectFit={'cover'}
            />
            <Box p={[8,16]} w={'100%'}>
                <Text className={styles.monts}>AYURVEDIC FRESHNESS</Text>
                <Text className={styles.cursive} fontSize={[40,56]}>Abcd Face Wash</Text>
                <Box mt={6} mb={4} w={20} h={.5} bg={'blackAlpha.800'}></Box>
                <Text fontWeight={400} mb={8}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis debitis iste quam repellendus quos, sapiente facilis! Consectetur voluptates deserunt sequi? Repudiandae recusandae, voluptas nesciunt non accusamus unde temporibus dolorum.
                </Text>
                <Link href={'#'}>
                    <Button 
                    bg="transparent" 
                    border={'1px solid'} 
                    borderColor={'orange.700'} 
                    color={'orange.700'} 
                    p={4} rounded={0}
                    className={styles.monts}

                    _hover={{bg: 'orange.700', color: 'white'}}
                    >
                        SHOW ME
                    </Button>
                </Link>
            </Box>
        </Flex>

        <Box w={24} py={4}></Box>
        <Text textAlign={'center'} className={styles.monts}>OUR MAGICAL INVENTORY</Text>
        <Text textAlign={'center'} className={styles.cursive} fontSize={[40,56]}>Browse More Products</Text>
        <Flex
        p={[4,12]}
        alignItems={'center'}
        justifyContent={'center'}
        wrap={'wrap'}
        >
            
            <Box pos={'relative'} mx={[4,8]} my={[4,4]} w={72} transition={"all .3s ease"} border={'1px'} borderColor={'green.400'} _hover={{ boxShadow: 'xl', transform: 'translateY(-8px)' }}>
                <Badge pos={'absolute'} top={2} right={2} px={2} py={2} bg={'yellow.600'} color={'white'}>50% OFF</Badge>
                <Image
                src='https://goodmockups.com/wp-content/uploads/2019/11/Free-Natural-Face-Wash-Pump-Spray-Scrub-Jar-Mockup-PSD-File-1.jpg'
                alt='Face Wash'
                />
                <Box p={"4"}>
                    <Text className={styles.monts} fontSize={20} fontWeight={600} color={'black'}>Super Clean Facewash</Text>
                    <Text fontSize={14} color={'darkslategray'}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</Text>

                    <Flex pos={'relative'} w={'full'} p={0} mt={4} alignItems={'center'} justifyContent={'space-between'}>
                        <Box p={2}><Text className={styles.monts} color={'darkslategray'} fontWeight={600}>$ 14.99</Text></Box>
                        <Button 
                        // pos={'absolute'}
                        // bottom={-8}
                        left={0}
                        w={'60%'}
                        rounded={0}
                        bg={'green.400'}
                        color={'white'}
                        transition={"all .3s ease"}

                        _hover={{bg: 'green.600'}}
                        >
                            Add To Cart
                        </Button>
                    </Flex>
                </Box>
            </Box>
            <Box pos={'relative'} mx={[4,8]} my={[4,4]} w={72} transition={"all .3s ease"} border={'1px'} borderColor={'green.400'} _hover={{ boxShadow: 'xl', transform: 'translateY(-8px)' }}>
                <Badge pos={'absolute'} top={2} right={2} px={2} py={2} bg={'yellow.600'} color={'white'}>50% OFF</Badge>
                <Image
                src='https://goodmockups.com/wp-content/uploads/2019/11/Free-Natural-Face-Wash-Pump-Spray-Scrub-Jar-Mockup-PSD-File-1.jpg'
                alt='Face Wash'
                />
                <Box p={"4"}>
                    <Text className={styles.monts} fontSize={20} fontWeight={600} color={'black'}>Super Clean Facewash</Text>
                    <Text fontSize={14} color={'darkslategray'}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</Text>

                    <Flex pos={'relative'} w={'full'} p={0} mt={4} alignItems={'center'} justifyContent={'space-between'}>
                        <Box p={2}><Text className={styles.monts} color={'darkslategray'} fontWeight={600}>$ 14.99</Text></Box>
                        <Button 
                        // pos={'absolute'}
                        // bottom={-8}
                        left={0}
                        w={'60%'}
                        rounded={0}
                        bg={'green.400'}
                        color={'white'}
                        transition={"all .3s ease"}

                        _hover={{bg: 'green.600'}}
                        >
                            Add To Cart
                        </Button>
                    </Flex>
                </Box>
            </Box>
            <Box pos={'relative'} mx={[4,8]} my={[4,4]} w={72} transition={"all .3s ease"} border={'1px'} borderColor={'green.400'} _hover={{ boxShadow: 'xl', transform: 'translateY(-8px)' }}>
                <Badge pos={'absolute'} top={2} right={2} px={2} py={2} bg={'yellow.600'} color={'white'}>50% OFF</Badge>
                <Image
                src='https://goodmockups.com/wp-content/uploads/2019/11/Free-Natural-Face-Wash-Pump-Spray-Scrub-Jar-Mockup-PSD-File-1.jpg'
                alt='Face Wash'
                />
                <Box p={"4"}>
                    <Text className={styles.monts} fontSize={20} fontWeight={600} color={'black'}>Super Clean Facewash</Text>
                    <Text fontSize={14} color={'darkslategray'}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</Text>

                    <Flex pos={'relative'} w={'full'} p={0} mt={4} alignItems={'center'} justifyContent={'space-between'}>
                        <Box p={2}><Text className={styles.monts} color={'darkslategray'} fontWeight={600}>$ 14.99</Text></Box>
                        <Button 
                        // pos={'absolute'}
                        // bottom={-8}
                        left={0}
                        w={'60%'}
                        rounded={0}
                        bg={'green.400'}
                        color={'white'}
                        transition={"all .3s ease"}

                        _hover={{bg: 'green.600'}}
                        >
                            Add To Cart
                        </Button>
                    </Flex>
                </Box>
            </Box>
            <Box pos={'relative'} mx={[4,8]} my={[4,4]} w={72} transition={"all .3s ease"} border={'1px'} borderColor={'green.400'} _hover={{ boxShadow: 'xl', transform: 'translateY(-8px)' }}>
                <Badge pos={'absolute'} top={2} right={2} px={2} py={2} bg={'yellow.600'} color={'white'}>50% OFF</Badge>
                <Image
                src='https://goodmockups.com/wp-content/uploads/2019/11/Free-Natural-Face-Wash-Pump-Spray-Scrub-Jar-Mockup-PSD-File-1.jpg'
                alt='Face Wash'
                />
                <Box p={"4"}>
                    <Text className={styles.monts} fontSize={20} fontWeight={600} color={'black'}>Super Clean Facewash</Text>
                    <Text fontSize={14} color={'darkslategray'}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</Text>

                    <Flex pos={'relative'} w={'full'} p={0} mt={4} alignItems={'center'} justifyContent={'space-between'}>
                        <Box p={2}><Text className={styles.monts} color={'darkslategray'} fontWeight={600}>$ 14.99</Text></Box>
                        <Button 
                        // pos={'absolute'}
                        // bottom={-8}
                        left={0}
                        w={'60%'}
                        rounded={0}
                        bg={'green.400'}
                        color={'white'}
                        transition={"all .3s ease"}

                        _hover={{bg: 'green.600'}}
                        >
                            Add To Cart
                        </Button>
                    </Flex>
                </Box>
            </Box>
            <Box pos={'relative'} mx={[4,8]} my={[4,4]} w={72} transition={"all .3s ease"} border={'1px'} borderColor={'green.400'} _hover={{ boxShadow: 'xl', transform: 'translateY(-8px)' }}>
                <Badge pos={'absolute'} top={2} right={2} px={2} py={2} bg={'yellow.600'} color={'white'}>50% OFF</Badge>
                <Image
                src='https://goodmockups.com/wp-content/uploads/2019/11/Free-Natural-Face-Wash-Pump-Spray-Scrub-Jar-Mockup-PSD-File-1.jpg'
                alt='Face Wash'
                />
                <Box p={"4"}>
                    <Text className={styles.monts} fontSize={20} fontWeight={600} color={'black'}>Super Clean Facewash</Text>
                    <Text fontSize={14} color={'darkslategray'}>Lorem ipsum dolor sit amet consectetur adipisicing elit...</Text>

                    <Flex pos={'relative'} w={'full'} p={0} mt={4} alignItems={'center'} justifyContent={'space-between'}>
                        <Box p={2}><Text className={styles.monts} color={'darkslategray'} fontWeight={600}>$ 14.99</Text></Box>
                        <Button 
                        // pos={'absolute'}
                        // bottom={-8}
                        left={0}
                        w={'60%'}
                        rounded={0}
                        bg={'green.400'}
                        color={'white'}
                        transition={"all .3s ease"}

                        _hover={{bg: 'green.600'}}
                        >
                            Add To Cart
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Flex>

        <Footer />
    </>
  )
}

export default Shop