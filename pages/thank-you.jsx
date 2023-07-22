import Head from "next/head";
import Navbar from "../hocs/Navbar";
import Footer from "../hocs/Footer";
import { Box, Text } from "@chakra-ui/react";
import styles from '../styles/Home.module.css'

export default function thankYou() {
    return (
        <>
            <Head>
                <title>Thank You | Slay it with Skin</title>
                <meta name="robots" content="noindex"></meta>
            </Head>

            <Navbar />

            <Box py={[24]} px={4} mt={24} textAlign={'center'}>
                <Text fontSize={[40, 56]} className={styles.cursive} as={'h1'} lineHeight={1} mb={2}>Thank you for contacting us!</Text>
                <Text fontSize={[16,18]}>We will get back to you soon.</Text>
            </Box>

            <Footer />
        </>
    )
}