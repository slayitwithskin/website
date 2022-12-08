import { React, useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Navbar from '../hocs/Navbar'
import Footer from '../hocs/Footer'
import Head from 'next/head'

import { Flex, Image, Text, Box, HStack, Container, VStack, Button, Input, Textarea, Stack } from '@chakra-ui/react'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'

import appointments from './api/appointments'


const Appointment = () => {
    var now = new Date()
    const [age, setAge] = useState()
    const [appointment, setAppointment] = useState([now])
    const [gender, setGender] = useState('female')

    const availableSlots = [
        "11:00 - 11:30",
        "11:30 - 12:00",
        "12:00 - 12:30",
        "12:30 - 13:00",
        "13:00 - 13:30",
        "13:30 - 14:00",
        "14:00 - 14:30",
        "14:30 - 15:00",
        "15:00 - 15:30",
        "15:30 - 16:00",
        "16:00 - 16:30",
        "16:30 - 17:00",
        "17:00 - 17:30",
        "17:30 - 18:00",
        "18:00 - 18:30",
        "18:30 - 19:00",
    ]

    useEffect(() => {
        const timeslots = document.querySelectorAll('.timeslot')
        const slots = appointments.find(slot => slot.fulldate === `${appointment[0].getDate()}` + `${appointment[0].getMonth() + 1}` + `${appointment[0].getFullYear()}`)
        if (slots) {
            slots.bookings.map((bookedSlot) => {
                document.getElementById(bookedSlot).setAttribute("disabled", true)
                console.log("Done!")
            })
        }
        else{
            timeslots.forEach(element => element.removeAttribute("disabled"))
        }
    }, [appointment])






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
                                    <Button id='male' onClick={(e) => { setGender('male'); e.target.classList.toggle('selected') }}>
                                        Male
                                    </Button>
                                    <Button id='female' className='' onClick={(e) => { setGender('female'); e.target.classList.toggle('selected') }}>
                                        Female
                                    </Button>
                                </HStack>
                                <Input type={'hidden'} name={'gender'} value={gender} />
                            </Box>
                            <Flex w={'full'} direction={'column'} alignItems={'flex-start'} justifyContent={'flex-start'} pt={4} pl={[0, 8]}>
                                <Text color={'rgb(100,100,100)'} pb={2}>Your Age</Text>
                                <Input w={'full'} type={'tel'} value={age} placeholder={'e.g, 21'} onChange={(e) => setAge(e.target.value)} />
                            </Flex>
                        </Stack>
                    </VStack>

                    <VStack my={4} p={[4, 6]} boxShadow={'base'} bg={'white'}>
                        <HStack w={'full'} my={2}>
                            <Box w={'full'}>
                                <Text color={'rgb(100,100,100)'} pb={2}>Your Preferred Date of Appointment</Text>
                                {/* <DatePicker 
                                selected={appointment}
                                onChange={appointmentDate => {setAppointment(appointmentDate)}}
                                minDate={now.setDate(now.getDate() + 1)}
                                maxDate={now.setDate(now.getDate() + 15)}
                                className='datepicker'
                                dateFormat={'dd MMMM yyyy'}
                                /> */}
                                <DatePicker
                                    value={appointment}
                                    onChange={(appointmentDate) => setAppointment(appointmentDate)}
                                    options={{
                                        minDate: now.setDate(now.getDate() + 1),
                                        maxDate: now.setDate(now.getDate() + 15),
                                        dateFormat: "d M Y",
                                        altInput: true,
                                        altInputClass: 'datepicker',
                                        altFormat: "d m Y",
                                    }}
                                    style={{ padding: ".5em .75em", border: '1px solid rgb(220,220,220)', width: '100%', borderRadius: "8px" }}
                                />
                            </Box>
                        </HStack>
                        <Box w={'full'} pt={4}>
                            <Text color={'rgb(100,100,100)'}>Select Your Time Slot(s)</Text>
                            <Flex w={'full'} wrap={'wrap'} alignItems={'center'} justifyContent={['center', 'flex-start']}>
                                {availableSlots.map((element, key) => (
                                    <Button key={key} m={[2, 3]} className={'timeslot'} onClick={(e) => { e.target.classList.toggle('selected') }} id={`slot${key + 1}`} disabled={false}>{element}</Button>
                                ))}

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
                            <Button colorScheme={'facebook'} rounded={0} p={6} fontSize={[12, 16]} className={styles.monts} textTransform={'uppercase'}>
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