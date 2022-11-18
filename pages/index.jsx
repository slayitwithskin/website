import React from 'react'
import styles from '../styles/Home.module.css'
import leaves from '../public/floral-leaves-corner.jpg'
import herobg from '../public/hero.jpg'
import herogirl from '../public/woman.png'

import { 
  Flex, 
  Box, 
  Spacer, 
  Menu, 
  MenuButton, 
  MenuList, 
  MenuItem, 
  Text,
  Button, 
  Image, 
  HStack,
  Drawer, 
  DrawerBody,
  DrawerHeader,
  DrawerContent, 
  DrawerCloseButton, 
  DrawerOverlay,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon
} from '@chakra-ui/react'


import { HiBars3BottomRight, HiOutlineShoppingBag } from 'react-icons/hi2'
import { BsChevronDown, BsArrowRight, BsEnvelopeFill, BsTelephoneFill, BsInstagram, BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs'

import Link from 'next/link'
import Head from 'next/head'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/sea-green';

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const menuRef = React.useRef()
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Slay it with Skin</title>
      </Head>
      <header>
        <nav className={styles.nav}>
          <Flex p={4} alignItems={'center'}>
            <h1 className="brand-title">Slay it with Skin</h1>
            <Spacer />

            <Flex display={['none', 'none', 'flex']}>
              <Menu>
                <MenuButton mx={6} borderBottom={"2px"} borderColor={"transparent"} _hover={{ borderColor: "black" }}>
                  <Flex alignItems={'center'} justifyContent={'center'}>
                    <Text>Services</Text> &nbsp;&nbsp;
                    <Text><BsChevronDown /></Text>
                  </Flex>
                </MenuButton>
                <MenuList rounded={0} backgroundImage={"url('/floral-leaves-corner.jpg')"} backgroundPosition={"50% 80%"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"}>
                  <Flex>

                    <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                      <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>skin</Text>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Text>Service Title 1</Text>
                      </MenuItem>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Text>Service Title 2</Text>
                      </MenuItem>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Text>Service Title 3</Text>
                      </MenuItem>
                    </Flex>

                    <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                      <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>hair</Text>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Text>Service Title 1</Text>
                      </MenuItem>
                    </Flex>

                    <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                      <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>misc.</Text>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Text>Service Title 1</Text>
                      </MenuItem>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Text>Service Title 2</Text>
                      </MenuItem>
                    </Flex>
                  </Flex>
                </MenuList>
              </Menu>
              <Link href={"#"}><Text mx={6} borderBottom={"2px"} borderColor={"transparent"} transition={"ease"} transitionDuration={".3s"} _hover={{ borderColor: "black" }}>Blogs</Text></Link>
              <Link href={"#"}><Text mx={6} borderBottom={"2px"} borderColor={"transparent"} transition={"ease"} transitionDuration={".3s"} _hover={{ borderColor: "black" }}>Shop</Text></Link>

              <Menu>
                <MenuButton mx={6} borderBottom={"2px"} borderColor={"transparent"} _hover={{ borderColor: "black" }}>
                  <Flex alignItems={'center'} justifyContent={'center'}>
                    <Text>Dropdown</Text> &nbsp;&nbsp;
                    <Text><BsChevronDown /></Text>
                  </Flex>
                </MenuButton>
                <MenuList rounded={0} backgroundImage={"url('/floral-leaves-corner.jpg')"} backgroundPosition={"50% 80%"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"}>
                  <Flex>

                    <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                      <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>skin</Text>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Text>Service Title 1</Text>
                      </MenuItem>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Text>Service Title 2</Text>
                      </MenuItem>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Text>Service Title 3</Text>
                      </MenuItem>
                    </Flex>

                    <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                      <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>hair</Text>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Text>Service Title 1</Text>
                      </MenuItem>
                    </Flex>

                    <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                      <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>misc.</Text>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Text>Service Title 1</Text>
                      </MenuItem>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Text>Service Title 2</Text>
                      </MenuItem>
                    </Flex>
                  </Flex>
                </MenuList>
              </Menu>
            </Flex>
            <Spacer />
            <Button display={['none', 'none', 'block']} rounded={'xl'} bg={"transparent"} border={"1px"} borderColor={"black"} borderTopRightRadius={"0"} _hover={{ bg: "black", color: "white" }} className={styles.cursive}>Book Appointment</Button>
            <Text fontSize={28} display={['block', 'block', 'none']} ref={menuRef} onClick={onOpen}><HiBars3BottomRight /></Text>
          </Flex>
        </nav>

        <Drawer
        isOpen={isOpen}
        placement={'right'}
        size={'full'}
        onClose={onClose}
        finalFocusRef={menuRef}
        >
          <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader mb={16}>
                <Text textAlign={'center'} fontSize={24} className={styles.cursive}>Slay it with Skin</Text>
              </DrawerHeader>
              <DrawerBody>

                <Accordion defaultIndex={[]} allowMultiple>

                  <AccordionItem border={'none'}>
                    <h2>
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          Services
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>

                      <AccordionItem border={'none'}>
                        <h2>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              Skin Services
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        <AccordionPanel>
                          <Link href={'#'}><Text my={2}>Service 1</Text></Link>
                          <Link href={'#'}><Text my={2}>Service 2</Text></Link>
                          <Link href={'#'}><Text my={2}>Service 3</Text></Link>
                        </AccordionPanel>
                      </AccordionItem>
                      

                      <AccordionItem border={'none'}>
                        <h2>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              Hair Services
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        <AccordionPanel>
                          <Link href={'#'}><Text my={2}>Service 1</Text></Link>
                          <Link href={'#'}><Text my={2}>Service 2</Text></Link>
                          <Link href={'#'}><Text my={2}>Service 3</Text></Link>
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem border={'none'}>
                        <h2>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              Misc.
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        <AccordionPanel>
                          <Link href={'#'}><Text my={2}>Service 1</Text></Link>
                          <Link href={'#'}><Text my={2}>Service 2</Text></Link>
                          <Link href={'#'}><Text my={2}>Service 3</Text></Link>
                        </AccordionPanel>
                      </AccordionItem>

                    </AccordionPanel>
                  </AccordionItem>

                </Accordion>

                <Link href={'#'}>
                  <Box flex={1} px={4} py={2}>
                    <Text>Blogs</Text>
                  </Box>
                </Link>
                <Link href={'#'}>
                  <Box flex={1} px={4} py={2}>
                    <Text>Shop</Text>
                  </Box>
                </Link>

                <Accordion defaultIndex={[]} allowMultiple>

                  <AccordionItem border={'none'}>
                    <h2>
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          Dropdown
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>

                      <AccordionItem border={'none'}>
                        <h2>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              Skin Services
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        <AccordionPanel>
                          <Link href={'#'}><Text my={2}>Service 1</Text></Link>
                          <Link href={'#'}><Text my={2}>Service 2</Text></Link>
                          <Link href={'#'}><Text my={2}>Service 3</Text></Link>
                        </AccordionPanel>
                      </AccordionItem>
                      

                      <AccordionItem border={'none'}>
                        <h2>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              Hair Services
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        <AccordionPanel>
                          <Link href={'#'}><Text my={2}>Service 1</Text></Link>
                          <Link href={'#'}><Text my={2}>Service 2</Text></Link>
                          <Link href={'#'}><Text my={2}>Service 3</Text></Link>
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem border={'none'}>
                        <h2>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              Misc.
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        <AccordionPanel>
                          <Link href={'#'}><Text my={2}>Service 1</Text></Link>
                          <Link href={'#'}><Text my={2}>Service 2</Text></Link>
                          <Link href={'#'}><Text my={2}>Service 3</Text></Link>
                        </AccordionPanel>
                      </AccordionItem>

                    </AccordionPanel>
                  </AccordionItem>

                </Accordion>

                <Link href={'#'}>
                  <Button bg={'black'} color={'white'} rounded={0} my={16} w={'full'}>
                    <Text className={styles.monts}>BOOK APPOINTMENT</Text>
                  </Button>
                </Link>

              </DrawerBody>
            </DrawerContent>
        </Drawer>

        <Flex alignItems={"center"} justifyContent={"space-between"} h={'auto'} bg={'red.100'} wrap={'wrap'}>
          <Flex direction={"column"} justifySelf={'center'} px={['8','16','24']} pt={24} justifyContent={'center'}>
            <Text fontSize={["42", "56", "64"]} className={styles.cursive} textAlign={['center', 'left']} lineHeight={[1.5,1,1]}>Give your skin</Text>
            <Text mb={8} fontSize={["36", "48", "56"]} className={styles.cursive} textAlign={['center', 'left']} color={'gray.600'}>the treatment it deserves</Text>
            <Button w={['full','fit-content']} border={'2px'} p={6} letterSpacing={2} borderColor={'transparent'} rounded={0} bg={'black'} color={'white'} _hover={{ bg: 'rgba(0,0,0,0.6)' }} className={styles.monts}>BOOK APPOINTMENT</Button>

          </Flex>
          <Flex w={['100%','60%','40%']} direction={"column"} justifySelf={'center'} px={'8'} justifyContent={'flex-end'}>
            <Image src={'woman.png'} />
          </Flex>
        </Flex>

      </header>

      <Flex px={[8,12,16]} py={8} justifyContent={'center'} wrap={'wrap-reverse'}>
        <Box w={['100%','35%','50%']}>
          <Image src='woman2.png' w={'xl'} />
        </Box>
        <Flex direction={'column'} alignItems={'flex-start'} justifyContent={'center'} w={['100%','65%','50%']} px={[0,6]}>
          <Text className={styles.monts}>FEEL THE CONFIDENCE</Text>
          <Text className={styles.cursive} fontSize={['40','56']}>Beauty Forever</Text>
          <Box mt={6} mb={4} w={20} h={.5} bg={'blackAlpha.800'}></Box>
          <Text fontWeight={400}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis debitis iste quam repellendus quos, sapiente facilis! Consectetur voluptates deserunt sequi? Repudiandae recusandae, voluptas nesciunt non accusamus unde temporibus dolorum.</Text>
          <Link href={'#'} >
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
        backgroundImage={"bride.jpg"}
        backgroundPosition={["top","50% 0%"]}
        backgroundSize={"cover"}
        backgroundAttachment={"fixed"}
        backgroundRepeat={"no-repeat"}
        w={"full"}
        h={"80vh"}
      >
        <Box position={"absolute"} top={0} right={0} bottom={0} left={0} bg={"rgba(0,0,0,0.6)"}>
          <Flex h={'full'} direction={"column"} alignItems={'center'} justifyContent={'center'} zIndex={10}>
            <Text className={styles.monts} color={'white'} letterSpacing={4}>BEAUTIFUL & CONFIDENT</Text>
            <Text className={styles.cursive} fontSize={['36','52', '64']} color={'white'}>Need a Fresh Look?</Text>
            <Button my={4} p={6} bg={'transparent'} border={'2px'} borderColor={'white'} color={'white'} rounded={0} className={styles.monts} _hover={{ bg: 'white', color: 'black' }}>BOOK APPOINTMENT</Button>
          </Flex>
        </Box>
      </Box>

      <Box p={16} h={'auto'}>
        <Text className={styles.monts} textAlign={'center'} letterSpacing={4} color={'blackAlpha.700'}>JUST FOR QUEENS</Text>
        <Text className={styles.cursive} textAlign={'center'} fontSize={['40','56']} color={'black'}>Our Services</Text>
        <Box width={24} h={.5} m={'0 auto'} bg={'black'}></Box>
        <Flex wrap={'wrap'} mt={16} alignItems={'center'} justifyContent={['center','space-around']}>

          <Link href={'#'}>
            <Box
              position={'relative'}
              m={2}
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
                backgroundImage={'bride.jpg'}
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
                  Magical Skin Treatment by Magicians
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

          <Link href={'#'}>
            <Box
              position={'relative'}
              m={2}
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
                backgroundImage={'bride.jpg'}
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
                  Magical Skin Treatment by Magicians
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

          <Link href={'#'}>
            <Box
              position={'relative'}
              m={2}
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
                backgroundImage={'bride.jpg'}
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
                  Magical Skin Treatment by Magicians
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

        </Flex>
      </Box>

      <Flex position={'relative'} p={[8, 16]} bg={"#C5D8A4"} justifyContent={'space-between'} wrap={'wrap'}>
        <Flex direction={'column'} alignItems={'flex-start'} justifyContent={'center'} w={['100%','40%']}>
          <Text className={styles.monts}>EXPERT BEAUTICIANS</Text>
          <Text className={styles.cursive} fontSize={['40','56']} lineHeight={'short'}>10+ Years of Experience</Text>
          <Box mt={6} mb={4} w={20} h={.5} bg={'blackAlpha.800'}></Box>
          <Text fontWeight={400}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis debitis iste quam repellendus quos, sapiente facilis! Consectetur voluptates deserunt sequi? Repudiandae recusandae, voluptas nesciunt non accusamus unde temporibus dolorum.</Text>
        </Flex>
        <Flex w={['100%', '45%']} mt={[8,0,0]}>
          <iframe className={styles.homevideo} src="https://www.youtube.com/embed/q0BVR5jRXxE" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Flex>
      </Flex>

      <Flex 
      pos={'relative'} 
      h={['auto','100vh']} 
      mt={[0,16]} 
      alignItems={['flex-start','center']} 
      justifyContent={'flex-start'}

      >
        <Box
          pos={'absolute'}
          t={0}
          l={0}
          w={['full',64]}
          h={['36','full']}
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
          <Image
            src={'facial.jpg'}
            w={['full','xl']}
            h={['180px','lg']}
            objectFit={'cover'}
          />

          <Flex direction={'column'} alignItems={'flex-start'} justifyContent={'center'} w={['100%','60%']} pl={[0,16]} pt={[8,0]}>
            <Text className={styles.monts}>TALKS OF WISDOM</Text>
            <Text className={styles.cursive} fontSize={['40','56']}>Read Our Blogs</Text>
            <Box mt={6} mb={4} w={20} h={.5} bg={'blackAlpha.800'}></Box>
            <Text fontWeight={400}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis debitis iste quam repellendus quos, sapiente facilis! Consectetur voluptates deserunt sequi? Repudiandae recusandae, voluptas nesciunt non accusamus unde temporibus dolorum.</Text>
            <Link href={'#'} >
              <Flex mt={'12'} alignItems={"center"} justifyContent={"flex-start"}>
                <Text className={styles.monts} position={'relative'} top={1} fontWeight={600} mr={4} transition={'ease'} transitionDuration={'.5s'} borderBottom={'1px'} borderBottomColor={'transparent'} _hover={{ mr: 6, borderBottomColor: 'black' }}>
                  CHECK LATEST BLOGS
                </Text>
                <Text className={styles.monts} fontSize={24}>
                  <BsArrowRight />
                </Text>
              </Flex>
            </Link>
          </Flex>
        </Flex>
      </Flex>


      <Flex p={16} direction={'column'} alignItems={'center'} justifyContent={'center'}>
        <Text className={styles.monts} textAlign={'center'} letterSpacing={4} color={'blackAlpha.700'}>DO NOT TAKE OUR WORD FOR IT</Text>
        <Text className={styles.cursive} textAlign={'center'} fontSize={['40','56']} color={'black'}>Read Our Testimonials</Text>
        <Box width={24} h={.5} m={'0 auto'} bg={'black'}></Box>
        <Splide
          options={{
            breakpoints: {
              576: {
                perPage: 1,
                width: '100vw'
              },
              768: {
                perPage: 2
              },
              992: {
                perPage: 3
              }
            },
            perPage: 4,
            perMove: 1
          }}
        >
          <SplideSlide>
            <Box p={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'}>
              <Image boxSize={'128px'} objectFit={'cover'} src={'bride.jpg'} objectPosition={'top'} borderTopLeftRadius={16} borderBottomRightRadius={16} />
              <Text fontSize={'2xl'} color={'black'} mt={2}>Amanda</Text>
              <Text className={styles.monts} fontSize={12} mb={4}>LOCATION</Text>
              <Text color={'darkslategray'} textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis debitis iste quam repellendus quos, sapiente facilis! Consectetur voluptates deserunt sequi?</Text>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box p={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'}>
              <Image boxSize={'128px'} objectFit={'cover'} src={'bride.jpg'} objectPosition={'top'} borderTopLeftRadius={16} borderBottomRightRadius={16} />
              <Text fontSize={'2xl'} color={'black'} mt={2}>Amanda</Text>
              <Text className={styles.monts} fontSize={12} mb={4}>LOCATION</Text>
              <Text color={'darkslategray'} textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis debitis iste quam repellendus quos, sapiente facilis! Consectetur voluptates deserunt sequi?</Text>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box p={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'}>
              <Image boxSize={'128px'} objectFit={'cover'} src={'bride.jpg'} objectPosition={'top'} borderTopLeftRadius={16} borderBottomRightRadius={16} />
              <Text fontSize={'2xl'} color={'black'} mt={2}>Amanda</Text>
              <Text className={styles.monts} fontSize={12} mb={4}>LOCATION</Text>
              <Text color={'darkslategray'} textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis debitis iste quam repellendus quos, sapiente facilis! Consectetur voluptates deserunt sequi?</Text>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box p={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'}>
              <Image boxSize={'128px'} objectFit={'cover'} src={'bride.jpg'} objectPosition={'top'} borderTopLeftRadius={16} borderBottomRightRadius={16} />
              <Text fontSize={'2xl'} color={'black'} mt={2}>Amanda</Text>
              <Text className={styles.monts} fontSize={12} mb={4}>LOCATION</Text>
              <Text color={'darkslategray'} textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis debitis iste quam repellendus quos, sapiente facilis! Consectetur voluptates deserunt sequi?</Text>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box p={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'}>
              <Image boxSize={'128px'} objectFit={'cover'} src={'bride.jpg'} objectPosition={'top'} borderTopLeftRadius={16} borderBottomRightRadius={16} />
              <Text fontSize={'2xl'} color={'black'} mt={2}>Amanda</Text>
              <Text className={styles.monts} fontSize={12} mb={4}>LOCATION</Text>
              <Text color={'darkslategray'} textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis debitis iste quam repellendus quos, sapiente facilis! Consectetur voluptates deserunt sequi?</Text>
            </Box>
          </SplideSlide>
        </Splide>
      </Flex>

      <Flex pt={[8,16]} 
      pb={[4,8]} px={[0,8]} 
      direction={'column'} 
      alignItems={'center'} justifyContent={'flex-start'} 
      backgroundImage={'linear-gradient(90deg, #C5D8A4 10%, #E3CAA5 90%)'}>
        <Flex 
        gap={[0,0,36]}
        direction={['column', 'column', 'row']}
        >

          <Flex direction={'column'} alignItems={'flex-start'} justifyContent={'flex-start'} my={[8,8,0]}>
            <Text className={styles.cursive} fontSize={28}>Slay it with Skin</Text>
            <Text my={4} fontSize={14}>25, L T Road, Opp Goyal Shopping Centre,
              <br />Borivli (w), Mumbai, Maharashtra
              <br />PIN: 400091
            </Text>
            <Link href={'mailto: info@slayitwithskin.com'} target={'_blank'}>
              <Flex alignItems={'center'}><Text fontSize={16} mr={4}><BsEnvelopeFill /></Text><Text fontSize={16}>info@slayitwithskin.com</Text></Flex>
            </Link>
            <Box w={4} h={2}></Box>
            <Link href={'tel: +911234567890'} target={'_blank'}>
              <Flex alignItems={'center'}><Text fontSize={16} mr={4}><BsTelephoneFill /></Text><Text fontSize={16}>+91 123 456 7890</Text></Flex>
            </Link>
          </Flex>

          <Flex w={'full'} direction={'column'} alignItems={'flex-start'} justifyContent={'flex-start'} my={[4,4,0]}>
            <Text className={styles.monts} fontSize={18}>Services</Text>
            <Box w={'full'} h={.5} bg={'blackAlpha.400'} mb={4}></Box>
            <Link href={'#'}>
              <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>Skin Treatments</Text>
            </Link>
            <Link href={'#'}>
              <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>Hair Treatments</Text>
            </Link>
            <Link href={'#'}>
              <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>Bridal Makeup</Text>
            </Link>
          </Flex>

          <Flex w={'full'} direction={'column'} alignItems={'flex-start'} justifyContent={'flex-start'} my={[4,4,0]}>
            <Text className={styles.monts} fontSize={18}>Important Links</Text>
            <Box w={'full'} h={.5} bg={'blackAlpha.400'} mb={4}></Box>
            <Link href={'#'}>
              <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>The Beauty Shop</Text>
            </Link>
            <Link href={'#'}>
              <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>Our Blogs</Text>
            </Link>
            <Link href={'#'}>
              <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>Book Appointment</Text>
            </Link>
          </Flex>

          <Flex w={'full'} direction={'column'} alignItems={'flex-start'} justifyContent={'flex-start'} my={[4,4,0]}>
            <Text className={styles.monts} fontSize={18}>Policies</Text>
            <Box w={'full'} h={.5} bg={'blackAlpha.400'} mb={4}></Box>
            <Link href={'#'}>
              <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>Terms & Conditions</Text>
            </Link>
            <Link href={'#'}>
              <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>Privacy Policy</Text>
            </Link>
            <Link href={'#'}>
              <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>Refund Policy</Text>
            </Link>
            <Link href={'#'}>
              <Text fontSize={16} p={2} _hover={{ bg: 'green.600', color: 'white' }}>Shipping Policy</Text>
            </Link>
          </Flex>
        </Flex>

        <Box w={'70%'} h={.5} bg={'blackAlpha.400'} my={8}></Box>

        <HStack justifyContent={'center'} spacing={6}>
          <Link href={'#'}>
            <Box p={4} fontSize={24} color={'green.600'} transition={'all .3s ease'} _hover={{ bg: 'green.600', color: 'white' }} borderRadius={'8px 0 8px 0'}><BsInstagram /></Box>
          </Link>

          <Link href={'#'}>
            <Box p={4} fontSize={24} color={'green.600'} transition={'all .3s ease'} _hover={{ bg: 'green.600', color: 'white' }} borderRadius={'8px 0 8px 0'}><BsFacebook /></Box>
          </Link>

          <Link href={'#'}>
            <Box p={4} fontSize={24} color={'green.600'} transition={'all .3s ease'} _hover={{ bg: 'green.600', color: 'white' }} borderRadius={'8px 0 8px 0'}><BsTwitter /></Box>
          </Link>

          <Link href={'#'}>
            <Box p={4} fontSize={24} color={'green.600'} transition={'all .3s ease'} _hover={{ bg: 'green.600', color: 'white' }} borderRadius={'8px 0 8px 0'}><BsWhatsapp /></Box>
          </Link>

        </HStack>
      </Flex>
    </>
  )
}

export default Index