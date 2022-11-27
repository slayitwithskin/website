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
                <MenuList rounded={0}>
                  <Flex>

                    <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                      <Text as={"h2"} mb={5} mt={4} 
                      ml={4} textTransform={"uppercase"} 
                      className={styles.cursive} fontWeight={600}>
                        facials
                      </Text>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Link href={'/service'}><Text>Medi Facials</Text></Link>
                      </MenuItem>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Link href={'/service'}><Text>Hydra Facials</Text></Link>
                      </MenuItem>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Link href={'/service'}><Text>Korean Glass Skin Facial</Text></Link>
                      </MenuItem>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Link href={'/service'}><Text>Skin Shine Facial</Text></Link>
                      </MenuItem>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Link href={'/service'}><Text>24K Gold Facial</Text></Link>
                      </MenuItem>
                    </Flex>

                    <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                      <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>treatments</Text>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Link href={'/service'}><Text>Anti Aging</Text></Link>
                      </MenuItem>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Link href={'/service'}><Text>Acne & Acne Marks</Text></Link>
                      </MenuItem>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Link href={'/service'}><Text>Crows Feet & Fine Lines</Text></Link>
                      </MenuItem>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Link href={'/service'}><Text>Dermaplaning</Text></Link>
                      </MenuItem>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Link href={'/service'}><Text>Micro Needling</Text></Link>
                      </MenuItem>
                    </Flex>

                    <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                      <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>Bridal Skin Prep Journey</Text>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Link href={'/service'}><Text>BB Glow</Text></Link>
                      </MenuItem>
                    </Flex>

                    <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                      <Text as={"h2"} 
                      mb={5} mt={4} 
                      ml={4} 
                      textTransform={"uppercase"} 
                      className={styles.cursive} 
                      fontWeight={600}
                      >
                        Hair
                      </Text>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Link href={'/service'}><Text>Trichology</Text></Link>
                      </MenuItem>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Link href={'/service'}><Text>Fungal Treatment</Text></Link>
                      </MenuItem>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Link href={'/service'}><Text>Hair Growth</Text></Link>
                      </MenuItem>
                    </Flex>


                  </Flex>
                </MenuList>
              </Menu>
              <Link href={"/blogs"}><Text mx={6} borderBottom={"2px"} borderColor={"transparent"} transition={"all .3s ease"} _hover={{ borderColor: "black" }}>Blogs</Text></Link>
              <Link href={"/shop"}><Text mx={6} borderBottom={"2px"} borderColor={"transparent"} transition={"all .3s ease"} _hover={{ borderColor: "black" }}>Shop</Text></Link>

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
                      <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>consultation</Text>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Link href={'/appointment'}><Text>Speak To Us</Text></Link>
                      </MenuItem>
                    </Flex>

                    <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                      <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>packages</Text>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Link href={'/appointment'}><Text>Customised Routine Package</Text></Link>
                      </MenuItem>
                    </Flex>

                    <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                      <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>bridal skin care</Text>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Link href={'/appointment'}><Text>3 Months</Text></Link>
                      </MenuItem>
                      <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                        <Link href={'/appointment'}><Text>6 Months</Text></Link>
                      </MenuItem>
                    </Flex>
                  </Flex>
                </MenuList>
              </Menu>
            </Flex>
            <Spacer />
            <Link href={'/appointment'}>
              <Button 
              display={['none', 'none', 'block']} 
              rounded={'xl'} bg={"transparent"} 
              border={"1px"} borderColor={"black"} 
              borderTopRightRadius={"0"} _hover={{ bg: "black", color: "white" }} 
              className={styles.cursive}>Book Appointment</Button>
            </Link>
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
                              Facials
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        <AccordionPanel>
                          <Link href={'/appointment'}><Text my={2}>Medi Facials</Text></Link>
                          <Link href={'/appointment'}><Text my={2}>Hydra Facials</Text></Link>
                          <Link href={'/appointment'}><Text my={2}>Korean Glass Skin Facials</Text></Link>
                          <Link href={'/appointment'}><Text my={2}>Skin Shine Facials</Text></Link>
                          <Link href={'/appointment'}><Text my={2}>24K Gold Facials</Text></Link>
                        </AccordionPanel>
                      </AccordionItem>
                      

                      <AccordionItem border={'none'}>
                        <h2>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              Treatments
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        <AccordionPanel>
                          <Link href={'/appointment'}><Text my={2}>Anti Aging</Text></Link>
                          <Link href={'/appointment'}><Text my={2}>Acne & Acne Marks</Text></Link>
                          <Link href={'/appointment'}><Text my={2}>Crows Feet & Fine Lines</Text></Link>
                          <Link href={'/appointment'}><Text my={2}>Dermaplaning</Text></Link>
                          <Link href={'/appointment'}><Text my={2}>Micro Needling</Text></Link>
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem border={'none'}>
                        <h2>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              Bridal Skin Prep Journey
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        <AccordionPanel>
                          <Link href={'/appointment'}><Text my={2}>BB Glow</Text></Link>
                        </AccordionPanel>
                      </AccordionItem>

                      <AccordionItem border={'none'}>
                        <h2>
                          <AccordionButton>
                            <Box flex='1' textAlign='left'>
                              Hair
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>

                        <AccordionPanel>
                          <Link href={'/appointment'}><Text my={2}>Trichology</Text></Link>
                          <Link href={'/appointment'}><Text my={2}>Fungal Treatment</Text></Link>
                          <Link href={'/appointment'}><Text my={2}>Hair Growth</Text></Link>
                        </AccordionPanel>
                      </AccordionItem>

                    </AccordionPanel>
                  </AccordionItem>

                </Accordion>

                <Link href={'/blogs'}>
                  <Box flex={1} px={4} py={2}>
                    <Text>Blogs</Text>
                  </Box>
                </Link>
                <Link href={'/shop'}>
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

                <Link href={'/appointment'}>
                  <Button bg={'black'} color={'white'} rounded={0} 
                  my={16} w={'full'} _hover={{bg: "#333"}}
                  onClick={()=>{Calendly.initPopupWidget({url: 'https://calendly.com/slayitwithskin/appointment'});return false;}}>
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