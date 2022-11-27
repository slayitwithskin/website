import React from 'react'
import { Box } from '@chakra-ui/react'
import Link from 'next/link'

import Navbar from '../../hocs/Navbar'
import Footer from '../../hocs/Footer'
import Head from 'next/head'

const PrivacyPolicy = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy | Slay it with Skin</title>
            </Head>
            <Navbar />
            <Box p={[4, 24]} mt={[20,0]}>
                <h1 style={{textAlign: "center", marginBottom: "2em", fontSize: "3rem"}}>Refund Policy</h1>
                <p>Last updated: November 27, 2022</p>
                <br />
                <p>
                    Payments of blocked consultation can't be refunded back under any circumstances.
                    <br />
                    However, if you have any valid reason for your unavailability, our team will help you reschedule the appointment at another date.
                    <br />
                    For any assistance, please write to us at <a style={{color:'rgb(0,0,200)'}} href="mailto:info@slayitwithskin.com">info@slayitwithskin.com</a> (we usually respond within 48 hours.)    
                </p>
            </Box>
            <Footer />
        </>
    )
}

export default PrivacyPolicy