import React from 'react'
import styles from '../styles/Home.module.css'
import {
    Flex,
    Spacer,
    Text,
    Button,
    Box,
    Menu, 
    MenuButton, 
    MenuList, 
    MenuItem, 
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

import { HiBars3BottomRight } from 'react-icons/hi2'
import { BsChevronDown } from 'react-icons/bs'
import Head from 'next/head'
import Link from 'next/link'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const menuRef = React.useRef()
  return (
    <>
        <Head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <nav className={styles.nav}>
          <Flex p={4} alignItems={'center'}>
            <Link href={'/'}><h1 className="brand-title">Slay it with Skin</h1></Link>
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
              <Link href={"#"}><Text mx={6} borderBottom={"2px"} borderColor={"transparent"} transition={"all .3s ease"} _hover={{ borderColor: "black" }}>Blogs</Text></Link>
              <Link href={"shop"}><Text mx={6} borderBottom={"2px"} borderColor={"transparent"} transition={"all .3s ease"} _hover={{ borderColor: "black" }}>Shop</Text></Link>

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
                <Link href={'shop'}>
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
                  <Button bg={'black'} color={'white'} rounded={0} my={16} w={'full'} _hover={{bg: "#333"}}>
                    <Text className={styles.monts}>BOOK APPOINTMENT</Text>
                  </Button>
                </Link>

              </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default Navbar