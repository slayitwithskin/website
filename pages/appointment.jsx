import { React, useState } from 'react'
import styles from '../styles/Home.module.css'
import Navbar from '../hocs/Navbar'
import Footer from '../hocs/Footer'
import Head from 'next/head'

import { Flex, Image, Text, Box, HStack, Container, VStack, Button, Input, Textarea, Stack } from '@chakra-ui/react'

import "flatpickr/dist/themes/material_green.css";
import Flatpickr from 'react-flatpickr'

const Appointment = () => {
    const [dob, setDob] = useState()
    const [appointment, setAppointment] = useState()
    const [gender, setGender] = useState('female')

    return (
        <>
            <Head><title>Book Appointment | Slay it with Skin</title></Head>
            <Navbar />
            <Text mt={[20, 24]} textAlign={'center'}
                fontSize={[40, 56]} className={styles.cursive}>
                Book Your Appointment
            </Text>
            <Box p={[0, 8]} bg={"url(appointmentbg.jpg) center/cover no-repeat"} backgroundAttachment={'fixed'}>
                <Container p={2}>
                    <VStack my={4} p={[4, 6]} boxShadow={'base'} bg={'white'}>
                        <HStack w={'full'} spacing={4} mb={2}>
                            <Input variant={'flushed'} placeholder={'First Name*'} required />
                            <Input variant={'flushed'} placeholder={'Last Name'} />
                        </HStack>
                        <HStack w={'full'} my={2}>
                            <Input variant={'flushed'} type={'email'} placeholder={'Your Email ID'} />
                            <Input variant={'flushed'} type={'tel'} placeholder={'Your Phone Number*'} required />
                        </HStack>
                        <Stack direction={["column", "row"]} w={'full'} my={2}>
                            <Box mt={4}>
                                <Text color={'rgb(100,100,100)'} pb={2}>Your Gender</Text>
                                <HStack spacing={6}>
                                    <Button id='male' _hover={{ bg: '#E3CAA5' }} onClick={(e) => { setGender('male'); e.target.classList.toggle('selected') }}>
                                        Male
                                    </Button>
                                    <Button id='female' _hover={{ bg: '#E3CAA5' }} onClick={(e) => { setGender('female'); e.target.classList.toggle('selected') }}>
                                        Female
                                    </Button>
                                </HStack>
                                <Input type={'hidden'} name={'gender'} value={gender} />
                            </Box>
                            <Flex direction={'column'} alignItems={'flex-start'} justifyContent={'flex-start'} pt={4} pl={[0,8]}>
                                <Text color={'rgb(100,100,100)'} pb={2}>Date of Birth</Text>
                                <Input id='flatpickr' w={'full'} size={'md'} type={'date'} placeholder={'Select Date'} />
                            </Flex>
                        </Stack>
                    </VStack>

                    <VStack my={4} p={[4, 6]} boxShadow={'base'} bg={'white'}>
                        <HStack w={'full'} my={2}>
                            <Box w={'full'}>
                                <Text color={'rgb(100,100,100)'} pb={2}>Your Preferred Date of Appointment</Text>
                                <Input className='flatpickr' w={'full'} size={'md'} type={'date'} placeholder={'Select Appointment Date'} />
                            </Box>
                        </HStack>
                        <Box w={'full'} pt={4}>
                            <Text color={'rgb(100,100,100)'}>Select Your Time Slot(s)</Text>
                            <Flex w={'full'} wrap={'wrap'} alignItems={'center'} justifyContent={['center', 'flex-start']}>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }}>09:00 - 09:30</Button>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }}>09:00 - 09:30</Button>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }}>09:00 - 09:30</Button>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }}>09:00 - 09:30</Button>
                            </Flex>
                        </Box>
                    </VStack>
                    <VStack my={4} p={[4, 6]} boxShadow={'base'} bg={'white'} alignItems={'flex-start'}>
                        <Text color={'rgb(100,100,100)'} pb={2}>Additional Details</Text>
                        <HStack w={'full'}>
                            <Textarea
                                w={'full'}
                                placeholder={'Any additional details you would like to tell us...'}
                                resize={'none'}
                                h={64}
                            />
                        </HStack>
                    </VStack>
                    <VStack my={4} p={[4, 6]} boxShadow={'base'} bg={'white'}>
                        <HStack w={'full'} spacing={'auto'}>
                            <Box>
                                <Text fontSize={14} color={'rgb(100,100,100)'}>
                                    Total Payable
                                </Text>
                                <Text fontSize={24} className={styles.monts}>
                                    ₹ 899
                                </Text>
                            </Box>
                            <Button colorScheme={'facebook'} rounded={0} p={6} fontSize={[12,16]} className={styles.monts} textTransform={'uppercase'}>
                                Pay with Razorpay
                            </Button>
                        </HStack>
                    </VStack>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Appointment