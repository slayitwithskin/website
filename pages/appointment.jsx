import { React, useState } from 'react'
import styles from '../styles/Home.module.css'
import Navbar from '../hocs/Navbar'
import Footer from '../hocs/Footer'
import Head from 'next/head'

import { Flex, Image, Text, Box, HStack, Container, VStack, Button, Input, Textarea, Stack } from '@chakra-ui/react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import appointments from './api/appointments'

const Appointment = () => {
    var now = new Date()
    const [age, setAge] = useState()
    const [appointment, setAppointment] = useState(now)
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
                                    <Button id='female' className='selected' _hover={{ bg: '#E3CAA5' }} onClick={(e) => { setGender('female'); e.target.classList.toggle('selected') }}>
                                        Female
                                    </Button>
                                </HStack>
                                <Input type={'hidden'} name={'gender'} value={gender} />
                            </Box>
                            <Flex w={'full'} direction={'column'} alignItems={'flex-start'} justifyContent={'flex-start'} pt={4} pl={[0,8]}>
                                <Text color={'rgb(100,100,100)'} pb={2}>Your Age</Text>
                                <Input w={'full'} type={'tel'} value={age} placeholder={'e.g, 21'} onChange={(e)=>setAge(e.target.value)} />
                            </Flex>
                        </Stack>
                    </VStack>

                    <VStack my={4} p={[4, 6]} boxShadow={'base'} bg={'white'}>
                        <HStack w={'full'} my={2}>
                            <Box w={'full'}>
                                <Text color={'rgb(100,100,100)'} pb={2}>Your Preferred Date of Appointment</Text>
                                <DatePicker 
                                selected={appointment}
                                onChange={date => setAppointment(date)}
                                minDate={now.setDate(now.getDate() + 1)}
                                maxDate={now.setDate(now.getDate() + 15)}
                                className='datepicker'
                                dateFormat={'dd MMMM yyyy'}
                                withPortal
                                />
                            </Box>
                        </HStack>
                        <Box w={'full'} pt={4}>
                            <Text color={'rgb(100,100,100)'}>Select Your Time Slot(s)</Text>
                            <Flex w={'full'} wrap={'wrap'} alignItems={'center'} justifyContent={['center', 'flex-start']}>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }} id={'1'} disabled={false}>11:00 - 11:30</Button>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }} id={'2'} disabled={false}>11:30 - 12:00</Button>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }} id={'3'} disabled={true}>12:00 - 12:30</Button>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }} id={'4'} disabled={true}>12:30 - 13:00</Button>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }} id={'5'} disabled={false}>13:00 - 13:30</Button>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }} id={'6'} disabled={false}>13:30 - 14:00</Button>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }} id={'7'} disabled={true}>14:00 - 14:30</Button>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }} id={'8'} disabled={true}>14:30 - 15:00</Button>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }} id={'9'} disabled={false}>15:00 - 15:30</Button>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }} id={'10'} disabled={false}>15:30 - 16:00</Button>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }} id={'11'} disabled={false}>16:00 - 16:30</Button>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }} id={'12'} disabled={true}>16:30 - 17:00</Button>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }} id={'13'} disabled={false}>17:00 - 17:30</Button>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }} id={'14'} disabled={false}>17:30 - 18:00</Button>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }} id={'15'} disabled={true}>18:00 - 18:30</Button>
                                <Button m={[2,3]} className={'timeslot'} _hover={{ bg: '#E3CAA5' }} onClick={(e) => { e.target.classList.toggle('selected') }} id={'16'} disabled={true}>18:30 - 19:00</Button>
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