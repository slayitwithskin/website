import { React, useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Navbar from '../hocs/Navbar'
import Footer from '../hocs/Footer'
import Head from 'next/head'

import {
    Flex,
    Text,
    Box,
    HStack,
    Container,
    VStack,
    Button,
    Input,
    Textarea,
    Stack,
    Modal,
    ModalOverlay,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalFooter,
    useDisclosure
} from '@chakra-ui/react'
import DatePicker from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'

import appointments from './api/appointments'


const Appointment = () => {
    var now = new Date()
    const baseRate = 899
    const [age, setAge] = useState()
    const [appointment, setAppointment] = useState([now])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState('female')
    const [selectedSlots, setSelectedSlots] = useState([])
    const [phone, setPhone] = useState("")
    const [details, setDetails] = useState("")
    const [payBtnStatus, setPayBtnStatus] = useState(false)
    const [tranxnData, setTranxnData] = useState({
        paymentId: "",
        orderId: "",
    })

    const [modalProps, setModalProps] = useState({
        status: false,
        title: "Your payment was not successful!",
        paymentId: tranxnData.paymentId,
        orderId: tranxnData.orderId,
    })
    const { onClose } = useDisclosure()

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
        document.getElementById(gender).style.background = '#E3CAA5'
        gender === 'male' ? document.getElementById('female').style.background = "#edf2f7" : document.getElementById('male').style.background = "#edf2f7"
    }, [gender])

    const getAppointmenSlots = async () => {
        const timeslots = document.querySelectorAll('.timeslot')
        await fetch('http://localhost:3000/api/getslots', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*'
            },
            body: JSON.stringify({
                fulldate: `${appointment[0].getDate()}` + `${appointment[0].getMonth() + 1}` + `${appointment[0].getFullYear()}`
                // fulldate: "28122022"
            })
        }).then(async (res) => {
            if (res.status === 200) {
                const data = await res.json()
                data.map((bookedSlot) => {
                    document.getElementById(bookedSlot).setAttribute("disabled", true)
                })
                console.log(data)
            }
            else {
                timeslots.forEach(element => element.removeAttribute("disabled"))
            }
        })
    }

    useEffect(() => {
        getAppointmenSlots()
    }, [appointment, payBtnStatus])



    const initializeRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
                setPayBtnStatus(false)
            };

            document.body.appendChild(script);
        });
    };

    const triggerMail = async (rzpresponse) => {
        await fetch('/api/mailer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'User-Agent': '*',
            },
            body: JSON.stringify({
                name,
                phone,
                email,
                gender,
                age,
                date: appointment.toString(),
                slots: `${selectedSlots.toString()}`,
                details,
                paymentId: rzpresponse.razorpay_payment_id,
                orderId: rzpresponse.razorpay_order_id,
            })
        }).then((res) => {
            setModalProps({
                ...modalProps,
                title: "Your payment was successful!",
                status: true,
                paymentId: rzpresponse.razorpay_payment_id,
                orderId: rzpresponse.razorpay_order_id,
            })
            setPayBtnStatus(false)
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await initializeRazorpay();

        if (!res) {
            alert("Razorpay SDK Failed to load");
            setPayBtnStatus(false)
            return;
        }

        setPayBtnStatus(true)
        // Make API call to the serverless API
        const data = await fetch("/api/razorpay", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: selectedSlots.length * baseRate
            })
        }).then((t) =>
            t.json()
        );
        console.log(data);
        var options = {
            key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
            name: "Slay it with skin",
            currency: data.currency,
            amount: data.amount,
            order_id: data.id,
            description: "Thankyou for your booking your appointment",
            image: "https://avatars.githubusercontent.com/u/7713209?s=280&v=4",
            handler: function (response) {
                // Validate payment at server - using webhooks is a better idea.
                setModalProps({
                    ...modalProps,
                    status: true,
                    title: "Your payment was successful!",
                    paymentId: response.razorpay_payment_id,
                    orderId: response.razorpay_order_id,
                })
                if (response.razorpay_payment_id) {
                    triggerMail(response)
                    setPayBtnStatus(false)
                }
                else {
                    setModalProps({ ...modalProps, title: "Your payment could not be completed!", status: true })
                    setPayBtnStatus(false)
                }
            },
            prefill: {
                name: name,
                email: email,
                contact: phone,
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        setPayBtnStatus(false)
    }



    function clearSlots() {
        document.querySelectorAll('.timeslot').forEach(element => element.classList.remove("selected"))
        setSelectedSlots([])
    }




    return (
        <>
            <Head><title>Book Appointment | Slay it with Skin</title></Head>
            <Navbar />
            <Text mt={[20, 24]} textAlign={'center'}
                fontSize={[40, 56]} className={styles.cursive}>
                Book Your Appointment
            </Text>
            <Box p={[0, 8]} bg={"url(appointmentbg.jpg) center/cover no-repeat"} backgroundAttachment={'fixed'}>
                <form action="#!" onSubmit={e => handleSubmit(e)}>
                    <Container p={2}>
                        <VStack my={4} p={[4, 6]} boxShadow={'base'} bg={'white'}>
                            <HStack w={'full'} spacing={4} mb={2}>
                                <Input variant={'flushed'} placeholder={'Your Full Name*'} required value={name} onChange={e => setName(e.target.value)} />
                            </HStack>
                            <HStack w={'full'} my={2}>
                                <Input variant={'flushed'} type={'email'} placeholder={'Your Email ID*'} required value={email} onChange={e => setEmail(e.target.value)} />
                                <Input variant={'flushed'} type={'tel'} placeholder={'Your Phone Number*'} required value={phone} onChange={e => setPhone(e.target.value)} />
                            </HStack>
                            <Stack direction={["column", "row"]} w={'full'} my={2}>
                                <Box mt={4}>
                                    <Text color={'rgb(100,100,100)'} pb={2}>Your Gender</Text>
                                    <HStack spacing={6}>
                                        <Button id='male'
                                            onClick={(e) => { setGender('male') }}
                                        >
                                            Male
                                        </Button>
                                        <Button id='female'
                                            onClick={(e) => { setGender('female') }}
                                        >
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
                                    <Text color={'rgb(100,100,100)'}>Your Preferred Date of Appointment</Text>
                                    <DatePicker
                                        value={appointment}
                                        onChange={(appointmentDate) => setAppointment(appointmentDate)}
                                        options={{
                                            minDate: now.setDate(now.getDate() + 1),
                                            maxDate: now.setDate(now.getDate() + 15),
                                            dateFormat: "d M Y",
                                            altInput: true,
                                            altInputClass: 'datepicker',
                                            altFormat: "d M Y",
                                            position: "above center",
                                            disableMobile: true
                                        }}
                                        className='datepicker'
                                    />
                                </Box>
                            </HStack>
                            <Box w={'full'}>
                                <Text color={'rgb(100,100,100)'}>Select Your Time Slot(s) for {`${appointment[0].getDate()}` + "/" + `${appointment[0].getMonth() + 1}` + "/" + `${appointment[0].getFullYear()}`}</Text>
                                {/* {selectedSlots.map(myslot => <Text> {myslot} </Text>)} */}
                                <Flex w={'full'} wrap={'wrap'} alignItems={'center'} justifyContent={['center', 'flex-start']}>
                                    {availableSlots.map((element, key) => (
                                        <Button
                                            key={key} m={[2, 3]} className={'timeslot'}
                                            onClick={(e) => { e.target.classList.add('selected'); setSelectedSlots([...selectedSlots, e.target.value]) }}
                                            bg={'#edf2f7'}
                                            _hover={{ transition: 'unset' }}
                                            _focus={{ transition: 'unset', bg: '#E3CAA5' }}
                                            id={`slot${key + 1}`} value={`slot${key + 1}`}
                                            disabled={false}
                                        >
                                            {element}
                                        </Button>
                                    ))}
                                </Flex>
                                <HStack justifyContent={'flex-end'}><Text color={'tomato'} cursor={'pointer'} onClick={() => clearSlots()}>Clear Slot Selections</Text></HStack>
                            </Box>
                        </VStack>
                        <VStack my={4} p={[4, 6]} boxShadow={'base'} bg={'white'} alignItems={'flex-start'}>
                            <Text color={'rgb(100,100,100)'} pb={2}>Additional Details</Text>
                            <HStack w={'full'}>
                                <Textarea
                                    w={'full'}
                                    placeholder={'Any additional details you would like to tell us...'}
                                    resize={'none'}
                                    h={64} value={details} onChange={e => setDetails(e.target.value)}
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
                                        ₹ {selectedSlots.length * baseRate}
                                    </Text>
                                </Box>
                                <Button colorScheme={'facebook'}
                                    rounded={0} p={6} fontSize={[12, 16]}
                                    className={styles.monts} textTransform={'uppercase'}
                                    type='submit'
                                    disabled={payBtnStatus}
                                >
                                    Pay with Razorpay
                                </Button>
                            </HStack>
                        </VStack>
                    </Container>
                </form>
            </Box>
            <Modal isOpen={modalProps.status} closeOnOverlayClick={false} isCentered>
                <ModalOverlay />
                <ModalBody>
                    <ModalContent>
                        <ModalHeader>{modalProps.title}</ModalHeader>
                        <ModalBody>
                            <Text>
                                Please save the following details for future reference.
                            </Text>
                            <Text>
                                Payment ID: {modalProps.paymentId}
                            </Text>
                            <Text>
                                Order ID: {modalProps.orderId}
                            </Text>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                colorScheme={'twitter'}
                                onClick={() => {setModalProps({ ...modalProps, status: false }); getAppointmenSlots()}}
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </ModalBody>
            </Modal>
            <Footer />
        </>
    )
}

export default Appointment