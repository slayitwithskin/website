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
  AccordionIcon,
  Image,
  HStack
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
        <Flex p={2} alignItems={'center'}>
          {/* <Link href={'/'}><h1 className="brand-title">Slay it with Skin</h1></Link> */}
          <Link href={'/'}>
            <HStack spacing={2}>
              <Image src='/logo.png' alt='Logo' w={'auto'} h={'10'} />
              {/* <h1 className="brand-title">Slay it with Skin</h1> */}
            </HStack>
          </Link>
          <Spacer />

          {/* <Flex display={['none', 'none', 'flex']}>
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
                      <Link href={'/services#facial'}><Text>Medi Facials</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#facial'}><Text>Hydra Facials</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#facial'}><Text>Korean Glass Skin Facial</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#facial'}><Text>Face Lift Facial</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#facial'}><Text>24K Gold Facial</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#facial'}><Text>Micro Dermabrasion</Text></Link>
                    </MenuItem>
                  </Flex>

                  <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                    <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>treatments</Text>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#treatment'}><Text>Anti Aging</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#treatment'}><Text>Acne & Marks</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#treatment'}><Text>Crows Feet & Fine Lines</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#treatment'}><Text>Dermaplaning</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#treatment'}><Text>Micro Needling</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#treatment'}><Text>Fine Lines & Wrinkles</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#treatment'}><Text>Skin Concerns & Maintenance</Text></Link>
                    </MenuItem>
                  </Flex>

                  <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                    <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>Bridal Skin Prep Journey</Text>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#bridal'}><Text>BB Glow</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#bridal'}><Text>Gold Facial</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#bridal'}><Text>Chemical Peels</Text></Link>
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
                      <Link href={'/services#hair'}><Text>Hair Fall Treatment</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#hair'}><Text>Fungal Treatment</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#hair'}><Text>Hair Growth</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#hair'}><Text>Dandruff Treatment</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#hair'}><Text>Graying & Thinning</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/services#hair'}><Text>Scalp Nourishment</Text></Link>
                    </MenuItem>
                  </Flex>


                </Flex>
              </MenuList>
            </Menu>
            <Link href={"/blogs"}><Text mx={6} borderBottom={"2px"} borderColor={"transparent"} transition={"all .3s ease"} _hover={{ borderColor: "black" }}>Blogs</Text></Link>
            <Link href={"/shop"}><Text mx={6} borderBottom={"2px"} borderColor={"transparent"} transition={"all .3s ease"} _hover={{ borderColor: "black" }}>Shop</Text></Link>
          </Flex> */}

          <Flex display={['none', 'none', 'flex']}>
            <Menu>
              <MenuButton mx={6} borderBottom={"2px"} borderColor={"transparent"} _hover={{ borderColor: "black" }}>
                <Flex alignItems={'center'} justifyContent={'center'}>
                  <Text>Consultation</Text> &nbsp;&nbsp;
                  <Text><BsChevronDown /></Text>
                </Flex>
              </MenuButton>
              <MenuList rounded={0}>
                <Flex>

                  <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                    <Text as={"h2"} mb={5} mt={4}
                      ml={4} textTransform={"uppercase"}
                      className={styles.cursive} fontWeight={600}>
                      consultation services
                    </Text>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/consultation'}><Text>Bridal Consultation</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/consultation'}><Text>Skin Consultation</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/consultation'}><Text>Hair Consultation</Text></Link>
                    </MenuItem>
                  </Flex>

                  <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                    <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>webinars</Text>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'https://buy.stripe.com/aEUcQf0gqbxpdKU144'} target='_blank'><Text>Online Webinar</Text></Link>
                    </MenuItem>
                  </Flex>

                  <Flex direction={"column"} mx={4} alignItems={"flex-start"} justifyContent={"flex-start"}>
                    <Text as={"h2"} mb={5} mt={4} ml={4} textTransform={"uppercase"} className={styles.cursive} fontWeight={600}>courses</Text>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/courses'}><Text>Chemical Peel Course</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/courses'}><Text>Dermaplan Course</Text></Link>
                    </MenuItem>
                    <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/courses'}><Text>Aesthetic Course</Text></Link>
                    </MenuItem>
                  </Flex>

                  <Flex direction={"column"} mx={4} alignItems={"center"} justifyContent={"center"}>
                    <Text as={"h2"}
                      textAlign={'center'}
                      mb={5} mt={4} ml={4}
                      textTransform={"capitalize'"}
                      className={styles.cursive}
                      fontWeight={600}
                    >Book Your Consultation With Us
                    </Text>
                    <MenuItem mb={3} bg={"transparent"} border={'2px solid #FFDDD2'} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                      <Link href={'/appointment'} style={{ width: '100%' }}><Text textAlign={'center'}>Book Now</Text></Link>
                    </MenuItem>
                  </Flex>
                </Flex>
              </MenuList>
            </Menu>
            <Link href={"/blogs"}><Text mx={6} borderBottom={"2px"} borderColor={"transparent"} transition={"all .3s ease"} _hover={{ borderColor: "black" }}>Blogs</Text></Link>
            <Link href={"/academy"}><Text mx={6} borderBottom={"2px"} borderColor={"transparent"} transition={"all .3s ease"} _hover={{ borderColor: "black" }}>Academy</Text></Link>
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
            <HStack>
              <Image src='/logo.png' alt='Logo' w={'auto'} h={'8'} />
              <Text textAlign={'center'} fontSize={24} className={styles.cursive}>Slay it with Skin</Text>
            </HStack>
          </DrawerHeader>
          <DrawerBody>

            {/* <Accordion defaultIndex={[]} allowMultiple>

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
                      <Link href={'/services#facial'}><Text my={2}>Medi Facials</Text></Link>
                      <Link href={'/services#facial'}><Text my={2}>Hydra Facials</Text></Link>
                      <Link href={'/services#facial'}><Text my={2}>Korean Glass Skin Facials</Text></Link>
                      <Link href={'/services#facial'}><Text my={2}>Face Lift Facials</Text></Link>
                      <Link href={'/services#facial'}><Text my={2}>24K Gold Facials</Text></Link>
                      <Link href={'/services#facial'}><Text my={2}>Micro Dermabrasion</Text></Link>
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
                      <Link href={'/services#treatment'}><Text my={2}>Anti Aging</Text></Link>
                      <Link href={'/services#treatment'}><Text my={2}>Acne & Marks</Text></Link>
                      <Link href={'/services#treatment'}><Text my={2}>Crows Feet & Fine Lines</Text></Link>
                      <Link href={'/services#treatment'}><Text my={2}>Dermaplaning</Text></Link>
                      <Link href={'/services#treatment'}><Text my={2}>Micro Needling</Text></Link>
                      <Link href={'/services#treatment'}><Text my={2}>Fine Lines & Wrinkles</Text></Link>
                      <Link href={'/services#treatment'}><Text my={2}>Skin Concerns & Maintenance</Text></Link>
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
                      <Link href={'/services#bridal'}><Text my={2}>BB Glow</Text></Link>
                      <Link href={'/services#bridal'}><Text my={2}>Gold Facial</Text></Link>
                      <Link href={'/services#bridal'}><Text my={2}>Chemical Peels</Text></Link>
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
                      <Link href={'/services#hair'}><Text my={2}>Hair Fall Treatment</Text></Link>
                      <Link href={'/services#hair'}><Text my={2}>Fungal Treatment</Text></Link>
                      <Link href={'/services#hair'}><Text my={2}>Dandruff Treatment</Text></Link>
                      <Link href={'/services#hair'}><Text my={2}>Hair Growth</Text></Link>
                      <Link href={'/services#hair'}><Text my={2}>Graying & Thinning</Text></Link>
                      <Link href={'/services#hair'}><Text my={2}>Scalp Nourishment</Text></Link>
                    </AccordionPanel>
                  </AccordionItem>

                </AccordionPanel>
              </AccordionItem>

            </Accordion> */}

            <Accordion defaultIndex={[]} allowMultiple>

              <AccordionItem border={'none'}>
                <h2>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      Consultation
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>

                  <AccordionItem border={'none'}>
                    <h2>
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          Consultation Services
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel>
                      <Link href={'/consultation'}><Text my={2}>Bridal Consultation</Text></Link>
                      <Link href={'/consultation'}><Text my={2}>Skin Consultation</Text></Link>
                      <Link href={'/consultation'}><Text my={2}>Hair Consultation</Text></Link>
                    </AccordionPanel>
                  </AccordionItem>


                  <AccordionItem border={'none'}>
                    <h2>
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          Webinars
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel>
                      <Link href={'https://buy.stripe.com/aEUcQf0gqbxpdKU144'} target='_blank'><Text my={2}>Online Webinars</Text></Link>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem border={'none'}>
                    <h2>
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          Courses
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel>
                      <Link href={'/courses'}><Text my={2}>Chemical Peel</Text></Link>
                      <Link href={'/courses'}><Text my={2}>Dermaplan Course</Text></Link>
                      <Link href={'/courses'}><Text my={2}>Aesthetic Course</Text></Link>
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
            <Link href={'/academy'}>
              <Box flex={1} px={4} py={2}>
                <Text>Academy</Text>
              </Box>
            </Link>

            <Link href={'/appointment'}>
              <Button bg={'black'} color={'white'} rounded={0}
                my={16} w={'full'} _hover={{ bg: "#333" }}
              >
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