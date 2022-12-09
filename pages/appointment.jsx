import { React, useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Navbar from '../hocs/Navbar'
import Footer from '../hocs/Footer'
import Head from 'next/head'
import useRazorpay from 'react-razorpay'

import { Flex, Text, Box, HStack, Container, VStack, Button, Input, Textarea, Stack } from '@chakra-ui/react'
import DatePicker from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'

import appointments from './api/appointments'


const Appointment = () => {
    var now = new Date()
    const Razorpay = useRazorpay()
    const [age, setAge] = useState()
    const [appointment, setAppointment] = useState([now])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState('female')
    const [selectedSlots, setSelectedSlots] = useState([])
    const [phone, setPhone] = useState("")
    const [details, setDetails] = useState("")
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
        else {
            timeslots.forEach(element => element.removeAttribute("disabled"))
        }
    }, [appointment])

    const createOrder = async () => {
        const order = await fetch('https://api.razorpay.com/v1/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://siws.vercel.app',
                'Authorization': 'Basic '+ window.btoa('rzp_test_ll7E6IYVCD5MFP:7ODMbca4hbkRFKHizgfCFbhQ')
            },
            body: JSON.stringify({
                "amount": `${selectedSlots.length*899*100}`,
                "currency": "INR",
                "receipt": `Receipt 1`,
            }),
            mode: 'cors'
        })
        
        return order
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const order = await createOrder(); //  Create order on your backend

        const options = {
            key: "rzp_test_LP5SCJznm4op2b", // Enter the Key ID generated from the Dashboard
            amount: selectedSlots.length*899*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Slay it with skin",
            description: "Appointment Booking",
            image: "https://link.storjshare.io/raw/jxpsnw6z3y4u3zpdu5o7o7cgnxhq/website-assets/dnlogonewCIRCLE.png",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
            handler: function (response) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature);
            },
            prefill: {
                name: name,
                email: email || null,
                contact: phone,
            },
            theme: {
                color: "#3399cc",
            },

        }
        const rzp1 = new Razorpay(options);

        rzp1.on("payment.failed", function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });

        rzp1.open();
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
                                <Input variant={'flushed'} type={'email'} placeholder={'Your Email ID'} value={email} onChange={e => setEmail(e.target.value)} />
                                <Input variant={'flushed'} type={'tel'} placeholder={'Your Phone Number*'} required value={phone} onChange={e => setPhone(e.target.value)} />
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
                                        ₹ {selectedSlots.length * 899}
                                    </Text>
                                </Box>
                                <Button colorScheme={'facebook'}
                                    rounded={0} p={6} fontSize={[12, 16]}
                                    className={styles.monts} textTransform={'uppercase'}
                                    type='submit'
                                >
                                    Pay with Razorpay
                                </Button>
                            </HStack>
                        </VStack>
                    </Container>
                </form>
            </Box>
            <Footer />
        </>
    )
}

export default Appointment