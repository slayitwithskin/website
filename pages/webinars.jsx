import Head from "next/head";
import Navbar from "../hocs/Navbar";
import Footer from "../hocs/Footer";
import { Box, Button, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import styles from '../styles/Home.module.css'
import { AiOutlineCalendar } from 'react-icons/ai'
import {BsClockHistory} from 'react-icons/bs'
import Link from "next/link";

export default function webinars() {
    return (
        <>
            <Head>
                <title>Webinars | Slay it with Skin</title>
            </Head>

            <Box bg={"gray.100"} pt={24} pb={20} px={[4, 24]}>
                <Text as={'h1'} className={styles.cursive} textAlign={'center'} fontSize={[40, 56]}> Webinars </Text>

                <Flex direction={['column','row']} my={8} gap={6} alignItems={'center'}>
                    <Image width={['100%', '50%']} src="/updated-academy.jpg" />
                    <Box>
                        <Text className={styles.cursive} fontSize={[24, 32]} lineHeight={1.1} mb={4} as={'h3'}>Teenage skin care, building routine & dealing with acne</Text>
                        <Text fontWeight={700}>Topics:</Text>
                        <UnorderedList mb={6}>
                            <ListItem>Hormonal factor</ListItem>
                            <ListItem>Stress</ListItem>
                            <ListItem>Food habits</ListItem>
                            <ListItem>Urge to try everything available in the market</ListItem>
                        </UnorderedList>

                        <Flex alignItems={'flex-start'} gap={[6,12]} mb={4}>
                            <Flex alignItems={'flex-start'} gap={3}>
                                <Box fontSize={22} bg={"gray.200"} p={2} borderRadius={3}>
                                    <AiOutlineCalendar/>
                                </Box>
                                <Box>
                                    <Text fontWeight={700} lineHeight={1} mb={1}>Date & time:</Text>
                                    <Text fontSize={[13,16]}>14th July, 2023 - 7pm</Text>
                                </Box>
                            </Flex>
                            <Flex alignItems={'flex-start'} gap={3}>
                                <Box fontSize={22} bg={"gray.200"} p={2} borderRadius={3}>
                                    <BsClockHistory/>
                                </Box>
                                <Box>
                                    <Text fontWeight={700} lineHeight={1} mb={1}>Duration:</Text>
                                    <Text fontSize={[13,16]}>45mins</Text>
                                </Box>
                            </Flex>
                        </Flex>
                        
                        <Text fontWeight={700}>Price:</Text>
                        <Text mb={4}>Single webinar at ₹129 <br/> 7 day program at ₹1,499 <br/> 21 day program at ₹2,499</Text>

                        <Link href='https://buy.stripe.com/aEUcQf0gqbxpdKU144' target="_blank">
                            <Button bg={"black"} color={"white"} _hover={{bg:'brown'}}>Book Now</Button>
                        </Link>
                    </Box>
                </Flex>

            </Box>

            <Navbar />

            <Footer />
        </>
    )
}