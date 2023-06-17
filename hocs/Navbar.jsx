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

          <Flex display={['none', 'none', 'flex']}>

            <Menu>
              <MenuButton mx={6} borderBottom={"2px"} borderColor={"transparent"} _hover={{ borderColor: "black" }}>
                <Flex alignItems={'center'} justifyContent={'center'}>
                  <Text>Consultation</Text> &nbsp;&nbsp;
                  <Text><BsChevronDown /></Text>
                </Flex>
              </MenuButton>
              <MenuList rounded={0}>
                <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                  <Link href={'/bridal-consultation'}><Text>Bridal Consultation</Text></Link>
                </MenuItem>
                <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                  <Link href={'/skin-consultation'}><Text>Skin Consultation</Text></Link>
                </MenuItem>
                <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                  <Link href={'/hair-consultation'}><Text>Hair Consultation</Text></Link>
                </MenuItem>
              </MenuList>
            </Menu>

            <Link href={'/webinars'}><Text mx={6} borderBottom={"2px"} borderColor={"transparent"} transition={"all .3s ease"} _hover={{ borderColor: "black" }}>Webinars</Text></Link>

            <Menu>
              <MenuButton mx={6} borderBottom={"2px"} borderColor={"transparent"} _hover={{ borderColor: "black" }}>
                <Flex alignItems={'center'} justifyContent={'center'}>
                  <Text>Courses</Text> &nbsp;&nbsp;
                  <Text><BsChevronDown /></Text>
                </Flex>
              </MenuButton>
              <MenuList rounded={0}>
                <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                  <Link href={'/courses'}><Text>Chemical Peel Course</Text></Link>
                </MenuItem>
                <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                  <Link href={'/courses'}><Text>Dermaplan Course</Text></Link>
                </MenuItem>
                <MenuItem mb={3} bg={"transparent"} _hover={{ bg: "#FFDDD2", color: '#222' }}>
                  <Link href={'/courses'}><Text>Aesthetic Course</Text></Link>
                </MenuItem>
              </MenuList>
            </Menu>



            <Link href={"/blogs"}><Text mx={6} borderBottom={"2px"} borderColor={"transparent"} transition={"all .3s ease"} _hover={{ borderColor: "black" }}>Blogs</Text></Link>
            <Link href={"/academy"}><Text mx={6} borderBottom={"2px"} borderColor={"transparent"} transition={"all .3s ease"} _hover={{ borderColor: "black" }}>Academy</Text></Link>
          </Flex>

          <Spacer />

          <Text fontSize={28} display={['block', 'block', 'none']} ref={menuRef} onClick={onOpen}><HiBars3BottomRight /></Text>
        </Flex>
      </nav>

      {/* ------------------Mobile menu start------------------*/}

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

            <Accordion defaultIndex={[]} allowMultiple>
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
                  <Link href={'/bridal-consultation'}><Text my={2}>Bridal Consultation</Text></Link>
                  <Link href={'/skin-consultation'}><Text my={2}>Skin Consultation</Text></Link>
                  <Link href={'/hair-consultation'}><Text my={2}>Hair Consultation</Text></Link>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Link href={'/webinars'}>
              <Box flex={1} px={4} py={2}>
                <Text>Webinars</Text>
              </Box>
            </Link>

            <Accordion defaultIndex={[]} allowMultiple>
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

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Navbar