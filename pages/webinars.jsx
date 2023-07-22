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

                {/* 1st webinar */}
                <Flex direction={['column','row']} my={8} gap={6} alignItems={'center'}>
                    <Image width={['100%', '50%']} src="/webinar1.jpg" />
                    <Box width={['100%','50%']}>
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
                                    <Text fontSize={[13,16]}>28th July, 2023 - 7pm</Text>
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
                        
                        <Text fontSize={20} mb={3}>Price: <b>₹129</b></Text>

                        <Link href='https://buy.stripe.com/aEUcQf0gqbxpdKU144' target="_blank">
                            <Button bg={"black"} color={"white"} _hover={{bg:'brown'}}>Book Now</Button>
                        </Link>
                    </Box>
                </Flex>

                {/* 2nd webinar */}

                <Flex direction={['column-reverse','row']} my={[16,24]} gap={6} alignItems={'center'}>
                    <Box width={['100%','50%']}>
                        <Text className={styles.cursive} fontSize={[24, 32]} lineHeight={1.1} mb={4} as={'h3'}>Aging Skin & Care</Text>
                        <Text fontWeight={700}>Topics:</Text>
                        <UnorderedList mb={6}>
                            <ListItem>Life style & changes</ListItem>
                            <ListItem>Stress</ListItem>
                            <ListItem>Food habits</ListItem>
                            <ListItem>Incorrect products </ListItem>
                        </UnorderedList>

                        <Flex alignItems={'flex-start'} gap={[6,12]} mb={4}>
                            <Flex alignItems={'flex-start'} gap={3}>
                                <Box fontSize={22} bg={"gray.200"} p={2} borderRadius={3}>
                                    <AiOutlineCalendar/>
                                </Box>
                                <Box>
                                    <Text fontWeight={700} lineHeight={1} mb={1}>Date & time:</Text>
                                    <Text fontSize={[13,16]}>11th August, 2023 - 7pm</Text>
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
                        
                        <Text fontSize={20} mb={3}>Price: <b>₹129</b></Text>

                        <Link href='https://buy.stripe.com/aEUcQf0gqbxpdKU144' target="_blank">
                            <Button bg={"black"} color={"white"} _hover={{bg:'brown'}}>Book Now</Button>
                        </Link>
                    </Box>

                    <Image width={['100%', '50%']} src="/webinar2.jpg" />
                </Flex>

                {/* 3rd webinar */}
                <Flex direction={['column','row']} mt={8} gap={6} alignItems={'center'}>
                    <Image width={['100%', '50%']} src="/webinar3.jpg" />
                    <Box width={['100%','50%']}>
                        <Text className={styles.cursive} fontSize={[24, 32]} lineHeight={1.1} mb={4} as={'h3'}>Understanding ingredients & Including in skin care</Text>
                        <Text fontWeight={700}>Topics:</Text>
                        <UnorderedList mb={6}>
                            <ListItem>Keeping the environment & your budget in mind</ListItem>
                            <ListItem>Understanding your skin & lifestyle needs</ListItem>
                            <ListItem>Not everything is for you</ListItem>     
                            <ListItem>Nutrition plan</ListItem>
                        </UnorderedList>

                        <Flex alignItems={'flex-start'} gap={[6,12]} mb={4}>
                            <Flex alignItems={'flex-start'} gap={3}>
                                <Box fontSize={22} bg={"gray.200"} p={2} borderRadius={3}>
                                    <AiOutlineCalendar/>
                                </Box>
                                <Box>
                                    <Text fontWeight={700} lineHeight={1} mb={1}>Date & time:</Text>
                                    <Text fontSize={[13,16]}>25th August, 2023 - 7pm</Text>
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
                        
                        <Text fontSize={20} mb={3}>Price: <b>₹129</b></Text>

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