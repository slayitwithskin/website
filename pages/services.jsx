import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Navbar from '../hocs/Navbar'
import Footer from '../hocs/Footer'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/sea-green';
import Reviews from '../hocs/Reviews'
import Newsletter from '../hocs/Banner'


const Service = () => {
    return (
        <>
            <Head>
                <title>Service Name | Slay it with Skin</title>
            </Head>
            <Navbar />
            <Image
                src={'https://cdn.shopify.com/s/files/1/0516/0376/7472/files/1920x640-website-banner-v2_422706a2-449f-43ac-9c1b-2e0f3e2d8b0e.jpg'}
                w={'full'}
                h={'auto'}
                mt={20}
            />
            <Flex
                p={[4, 8, 16]}
                direction={['column', 'row']}
                alignItems={'center'}
                justifyContent={'space-between'}
                scrollBehavior={'smooth'}
            >
                <Box
                    w={['90%', 'md']}
                    h={['2xs', 'sm']}
                    my={[8, 0]}
                    bg={'#C5D8A4'}
                >
                    <Image
                        src={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1214644132.jpg?crop=0.793xw:1.00xh;0.104xw,0&resize=640:*'}
                        pos={'relative'}
                        w={['100%', 'inherit']}
                        h={['100%', 'inherit']}
                        objectFit={'cover'}
                        bottom={['5px', '2em']}
                        right={['5px', '2em']}
                        boxShadow={'xl'}
                    />
                </Box>
                <Flex
                    w={['full', '70%']}
                    direction={'column'}
                    p={[0, 8]}
                >
                    <Text className={styles.cursive} fontSize={[40, 56]} mb={4}>
                        Our Services
                    </Text>
                    <Text fontSize={16}>
                        We believe that everyone has a different requirement to care and nurture their beauty. That's why provide personalised consultation,
                        treatment and products that suite best to your skin or hair type and help you gain the confidence you always deserved.
                        <br /><br />
                        We are dedicated to helping you look and feel your best. Our team of highly trained professionals will assess
                        your individual needs and develop a customized plan to restore and maintain your natural beauty.
                        With our state-of-the-art treatments and the latest technology, you can trust us to take care of all your skin and hair needs.
                        Let us help you look and feel your absolute best!
                    </Text>
                    <Button
                        my={'8'}
                        w={['auto', 'max-content']}
                        colorScheme={'whatsapp'}
                        p={6}
                        rounded={0}
                        bg={'brown'}
                        onClick={() => { Calendly.initPopupWidget({ url: 'https://calendly.com/slayitwithskin/appointment' }); return false; }}
                    >
                        BOOK AN APPOINTMENT
                    </Button>
                </Flex>
            </Flex>


            {/* Facials */}
            <Box px={[4, 8, 16]} py={6} id={'facial'}>
                <Text className={styles.cursive} fontSize={[24, 36]} mb={5}>
                    Facials
                </Text>

                <Text py={4}>
                    <b>Hydra Facial</b>
                    <br />
                    It helps in exfoliation of buildup of sebum and debris that covers the top layer of the skin.
                    It leaves the skin hydrated through infusion of serums.
                </Text>

                <Text py={4}>
                    <b>Face Lift Facial</b>
                    <br />
                    This process is mainly concentrated on facial massage technique focussing on sculpting
                    the face uplifting the structure of the jawline and cheek area.
                </Text>

                <Text py={4}>
                    <b>Micro Dermabrasion</b>
                    <br />
                    Micro Dermabrasion is a minimally invasive treatment which helps in resurfacing the texture or skin tome of the face.
                    It also helps in treating scars, stretch marks and skin damage.
                </Text>

                <Text py={4}>
                    <b>Medi Facials</b>
                    <br />
                    Medi facials are facials designed using medically approved ingredients
                    and are friendly to the skin providing long lasting benefits.
                </Text>

                <Text py={4}>
                    <b>Korean Facial</b>
                    <br />
                    It helps you eliminate acne and blemishes, brightenr and healthier skin enriching supple skin.
                    It helps in rejuvenation of skin giving it a glass reflection effect.
                </Text>

            </Box>


            {/* Treatments */}
            <Box px={[4, 8, 16]} py={6} id={'treatment'}>
                <Text className={styles.cursive} fontSize={[24, 36]} mb={5}>
                    Treatments
                </Text>

                <Text py={4}>
                    <b>Micro Needling</b>
                    <br />
                    It is a minimally invasive process which uses thin needles to make tiny holes on the top layer of the skin.
                    It helps stimulate healing process and produces more collagen & elastin.
                </Text>

                <Text py={4}>
                    <b>Anti Ageing</b>
                    <br />
                    This process helps in reducing the fine lines and wrinkles visibly making it look healthier and youthful.
                </Text>

            </Box>


            {/* Bridal Skin Prep Journey */}
            <Box px={[4, 8, 16]} py={6} id={'bridal'}>
                <Text className={styles.cursive} fontSize={[24, 36]} mb={5}>
                    Bridal Skin Prep Journey
                </Text>

                <Text py={4}>
                    <b>Chemical Peels</b>
                    <br />
                    This process is used to exfoliate the top layer of the skin.
                    It helps in improving the tone and texture of the skin as it lasts longer and penetrate deeper in the skin.
                </Text>

                <Text py={4}>
                    <b>Gold Facial</b>
                    <br />
                    This facial mainly concentrates on infusion of serums with 24K Gold for an instant party ready glow. This is non invasive treatment.
                </Text>

                <Text py={4}>
                    <b>Face Lift Facial</b>
                    <br />
                    This process is mainly concentrated on facial massage technique focussing on sculpting
                    the face uplifting the structure of the jawline and cheek area.
                </Text>

            </Box>


            {/* Hair Treatments */}
            <Box px={[4, 8, 16]} py={6} id={'hair'}>
                <Text className={styles.cursive} fontSize={[24, 36]} mb={5}>
                    Hair Treatments
                </Text>

                <Text py={4}>
                    <b>PRP Therapy</b>
                    <br />
                    PRP (platelet-rich plasma) therapy for hair loss is a three-step medical treatment in which a person's blood is drawn, processed, and then injected into the scalp. 
                    Some in the medical community think that PRP injections trigger natural hair growth and maintain it by increasing blood supply to the hair follicle and increasing the thickness of the hair shaft. 
                    Sometimes this approach is combined with other hair loss procedures or medications.
                </Text>

                <Text py={4}>
                    <b>Scalp Rejuvenation Treatment</b>
                    <br />
                    It helps with cleaning and maintaining the health of scalp, treats thinning of hair, regrowth of hair, reverses greying.
                </Text>

            </Box>


            <Text className={styles.monts} textAlign={'center'} my={8} fontWeight={600}>GET IT DONE IN 3 SIMPLE STEPS</Text>
            <Flex
                px={[2, 8, 16]}
                mb={16}
                wrap={'wrap'}
                justifyContent={'space-between'}
            >
                <Box
                    pos={'relative'}
                    m={2}
                    px={[0, 6]}
                    w={['full', 'sm']}
                    h={'auto'}
                    className={styles.gradientBlue}
                    boxShadow={'base'}
                >
                    <Text
                        fontSize={[96, 128]}
                        p={[4, 4, 0]}
                        fontWeight={700}
                        className={styles.monts}
                        color={'whiteAlpha.700'}
                        transform={['translateY(-2rem) translateX(-1rem)', 'translateY(-1.5rem)']}
                    >
                        01
                    </Text>
                    <Box
                        pos={'absolute'}
                        top={0}
                        right={0}
                        bottom={0}
                        left={0}
                        p={4}
                        w={'inherit'}
                        h={'inherit'}
                        bg={'white'}
                        clipPath={['polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)', 'polygon(60% 0%, 100% 0%, 100% 100%, 0% 100%)']}
                        display={'flex'}
                        flexDir={'column'}
                        alignItems={'flex-end'}
                        justifyContent={'flex-start'}
                    >
                        <Text className={styles.monts} mb={4} fontWeight={700} color={'#0093E9'}>CONTACT US</Text>
                        <Text maxW={['70%', '50%']} textAlign={'right'} mb={2}>
                            Book your appointment with us at your preferred date and time.
                        </Text>
                        <Button
                            rounded={0}
                            colorScheme={'twitter'}
                            className={styles.monts}
                            onClick={() => { Calendly.initPopupWidget({ url: 'https://calendly.com/slayitwithskin/appointment' }); return false; }}
                        >
                            BOOK APPOINTMENT
                        </Button>
                    </Box>
                </Box>
                <Box
                    pos={'relative'}
                    m={2}
                    px={[0, 6]}
                    w={['full', 'sm']}
                    h={'auto'}
                    className={styles.gradientGreen}
                    boxShadow={'base'}
                >
                    <Text
                        fontSize={[96, 128]}
                        p={[4, 4, 0]}
                        fontWeight={700}
                        className={styles.monts}
                        color={'whiteAlpha.700'}
                        transform={['translateY(-2rem) translateX(-1rem)', 'translateY(-1.5rem)']}
                    >
                        02
                    </Text>
                    <Box
                        pos={'absolute'}
                        top={0}
                        right={0}
                        bottom={0}
                        left={0}
                        p={4}
                        w={'inherit'}
                        h={'inherit'}
                        bg={'white'}
                        clipPath={['polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)', 'polygon(60% 0%, 100% 0%, 100% 100%, 0% 100%)']}
                        display={'flex'}
                        flexDir={'column'}
                        alignItems={'flex-end'}
                        justifyContent={'flex-start'}
                    >
                        <Text className={styles.monts} mb={4} fontWeight={700} color={'whatsapp.500'}>VISIT US</Text>
                        <Text maxW={['70%', '50%']} textAlign={'right'} mb={2}>
                            Visit us at the prescribed location for your beauty treatment.
                        </Text>
                        <Button
                            rounded={0}
                            colorScheme={'whatsapp'}
                            className={styles.monts}
                            onClick={() => { Calendly.initPopupWidget({ url: 'https://calendly.com/slayitwithskin/appointment' }); return false; }}
                        >
                            BOOK APPOINTMENT
                        </Button>
                    </Box>
                </Box>
                <Box
                    pos={'relative'}
                    m={2}
                    px={[0, 6]}
                    w={['full', 'sm']}
                    h={'auto'}
                    className={styles.gradientRed}
                    boxShadow={'base'}
                >
                    <Text
                        fontSize={[96, 128]}
                        p={[4, 4, 0]}
                        fontWeight={700}
                        className={styles.monts}
                        color={'whiteAlpha.700'}
                        transform={['translateY(-2rem) translateX(-1rem)', 'translateY(-1.5rem)']}
                    >
                        03
                    </Text>
                    <Box
                        pos={'absolute'}
                        top={0}
                        right={0}
                        bottom={0}
                        left={0}
                        p={4}
                        w={'inherit'}
                        h={'inherit'}
                        bg={'white'}
                        clipPath={['polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)', 'polygon(60% 0%, 100% 0%, 100% 100%, 0% 100%)']}
                        display={'flex'}
                        flexDir={'column'}
                        alignItems={'flex-end'}
                        justifyContent={'flex-start'}
                    >
                        <Text className={styles.monts} mb={4} fontWeight={700} color={'red.500'}>REMEDIES</Text>
                        <Text maxW={['70%', '50%']} textAlign={'right'} mb={2}>
                            Follow the medicines and the remedies as prescribed by us.
                        </Text>
                        <Button
                            rounded={0}
                            colorScheme={'red'}
                            className={styles.monts}
                            onClick={() => { Calendly.initPopupWidget({ url: 'https://calendly.com/slayitwithskin/appointment' }); return false; }}
                        >
                            BOOK APPOINTMENT
                        </Button>
                    </Box>
                </Box>
            </Flex>

            <Reviews />

            <Newsletter />

            <Footer />
        </>
    )
}

export default Service