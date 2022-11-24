import {React, useState} from 'react'
import styles from '../styles/Home.module.css'
import Navbar from '../hocs/Navbar'
import Footer from '../hocs/Footer'

import { Flex, Image, Text, Box, HStack, Container, VStack, Button, Input, Textarea } from '@chakra-ui/react'
import { DatePicker } from 'react-rainbow-components'

import {BsCalendar2} from 'react-icons/bs'

const Appointment = () => {
    const [dob, setDob] = useState()
    const [appointment, setAppointment] = useState()
    const [gender, setGender] = useState('female')
  return (
    <>
        <Navbar />
        <Text mt={[20,24]} textAlign={'center'} 
        fontSize={[40,56]} className={styles.cursive}>
            Book Your Appointment
        </Text>
        <Box p={[0,8]} bg={"url(appointmentbg.jpg) center/cover no-repeat"} backgroundAttachment={'fixed'}>
            <Container p={2}>
                <VStack my={4} p={[4,6]} boxShadow={'base'} bg={'white'}>
                    <HStack w={'full'} spacing={4} mb={2}>
                        <Input variant={'flushed'} placeholder={'First Name*'} required />
                        <Input variant={'flushed'} placeholder={'Last Name'} />
                    </HStack>
                    <HStack w={'full'} my={2}>
                        <Input variant={'flushed'} type={'email'} placeholder={'Your Email ID'} />
                        <Input variant={'flushed'} type={'tel'} placeholder={'Your Phone Number*'} required />
                    </HStack>
                    <HStack w={'full'} my={2}>
                        <Box mt={4}>
                            <Text color={'rgb(100,100,100)'} pb={2}>Your Gender</Text>
                            <HStack spacing={6}>
                                <Button id='male' _hover={{bg: '#E3CAA5'}} onClick={(e)=>{setGender('male');e.target.classList.toggle('selected')}}>
                                    Male
                                </Button>
                                <Button id='female' _hover={{bg: '#E3CAA5'}} onClick={(e)=>{setGender('female');e.target.classList.toggle('selected')}}>
                                    Female
                                </Button>
                            </HStack>
                            <Input type={'hidden'} name={'gender'} value={gender} />
                        </Box>
                        <Box pt={4} pl={8}>
                            <Text color={'rgb(100,100,100)'} pb={2}>Date of Birth</Text>
                            <DatePicker 
                            icon={<BsCalendar2 />}
                            formatStyle='small'
                            placeholder='Select Date'
                            onChange={(date) => setDob(date)}
                            value={dob}
                            />
                        </Box>
                    </HStack>
                </VStack>
                <VStack my={4} p={[4,6]} boxShadow={'base'} bg={'white'}>
                    <HStack w={'full'}>
                        <Textarea 
                        w={'full'} 
                        placeholder={'Tell us about yourself and the treatment you expect from us.'}
                        resize={'none'}
                        h={64}
                        />
                    </HStack>
                </VStack>
                <VStack my={4} p={[4,6]} boxShadow={'base'} bg={'white'}>
                    <HStack w={'full'} my={2}>
                        <Box w={'full'}>
                            <Text color={'rgb(100,100,100)'} pb={2}>Your Preferred Date of Appointment</Text>
                            <DatePicker 
                            icon={<BsCalendar2 />}
                            formatStyle='large'
                            placeholder='Select Appointment Date'
                            onChange={(date) => setAppointment(date)}
                            value={appointment}
                            />
                        </Box>
                    </HStack>
                    <Box w={'full'} pt={4}>
                        <Text color={'rgb(100,100,100)'}>Select Your Time Slot(s)</Text>
                        <Flex w={'full'} wrap={'wrap'} alignItems={'center'} justifyContent={['center','flex-start']}>
                            <Button m={3} className={'timeslot'} _hover={{bg: '#E3CAA5'}} onClick={(e)=>{e.target.classList.toggle('selected')}}>09:00 - 09:30</Button>
                            <Button m={3} className={'timeslot'} _hover={{bg: '#E3CAA5'}} onClick={(e)=>{e.target.classList.toggle('selected')}}>09:00 - 09:30</Button>
                            <Button m={3} className={'timeslot'} _hover={{bg: '#E3CAA5'}} onClick={(e)=>{e.target.classList.toggle('selected')}}>09:00 - 09:30</Button>
                            <Button m={3} className={'timeslot'} _hover={{bg: '#E3CAA5'}} onClick={(e)=>{e.target.classList.toggle('selected')}}>09:00 - 09:30</Button>
                        </Flex>
                    </Box>
                </VStack>
                <VStack my={4} p={[4,6]} boxShadow={'base'} bg={'white'}>
                    <HStack w={'full'} spacing={'auto'}>
                        <Box>
                            <Text fontSize={14} color={'rgb(100,100,100)'}>
                                Total Payable
                            </Text>
                            <Text fontSize={24} className={styles.monts}>
                                ₹ 899
                            </Text>
                        </Box>
                        <Button colorScheme={'facebook'} rounded={0} p={6} className={styles.monts} textTransform={'uppercase'}>
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