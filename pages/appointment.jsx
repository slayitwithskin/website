import { React, useState, useEffect, useLayoutEffect } from 'react'
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
    useDisclosure,
    CheckboxGroup,
    Checkbox,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
    useToast
} from '@chakra-ui/react'
import DatePicker from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'
import axios from 'axios'
import Script from 'next/script'
import { loadStripe } from '@stripe/stripe-js'


const Appointment = () => {
    // const cashfree = new Cashfree("session_XaAxBAAZLPQa1-ppTvfwfCRh4nd4rpsHm99RBWBiN79fim_42A81DX94ADJ2LoQUyp4-Umz4DD-xDoY4C_55aj6f0M7Y-DuBG_RZ0meTYcpN")
    const Toast = useToast({
        position: 'top-right'
    })
    var now = new Date()
    const baseRate = 899
    const [age, setAge] = useState()
    const [appointment, setAppointment] = useState([now])
    const [absentDates, setAbsentDates] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState('female')
    const [selectedSlots, setSelectedSlots] = useState([])
    const [phone, setPhone] = useState("")
    const [details, setDetails] = useState("")
    const [concerns, setConcerns] = useState("")
    const [couponCode, setCouponCode] = useState("")
    const [payBtnStatus, setPayBtnStatus] = useState(false)
    const [subTotal, setSubTotal] = useState(0)
    const [total, setTotal] = useState(0)
    const [tranxnData, setTranxnData] = useState({
        paymentId: "",
        orderId: "",
    })
    const [cashfreeModal, setCashfreeModal] = useState(false)
    const [cfPaymentSessionId, setCfPaymentSessionId] = useState("")
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

        "17:00 - 17:30",
        "17:30 - 18:00",
        "18:00 - 18:30",
        "18:30 - 19:00",
    ]

    useEffect(() => {
        document.getElementById(gender).style.background = '#E3CAA5'
        if (gender == 'male') {
            document.getElementById('female').style.background = "#edf2f7"
            document.getElementById('others').style.background = "#edf2f7"
        }
        if (gender == 'female') {
            document.getElementById('male').style.background = "#edf2f7"
            document.getElementById('others').style.background = "#edf2f7"
        }
        if (gender == 'others') {
            document.getElementById('female').style.background = "#edf2f7"
            document.getElementById('male').style.background = "#edf2f7"
        }
    }, [gender])

    const getAppointmenSlots = async () => {
        const timeslots = document.querySelectorAll('.timeslot')
        await fetch("/api/getslots", {
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

    useEffect(() => {
        axios.get('/api/absent').then(res => {
            setAbsentDates(res.data[0].dates || [])
        }).catch(err => {
            console.log(err)
        })
    }, [])

    function addSlot(e) {
        e.target.classList.add('selected'); setSelectedSlots([...selectedSlots, e.target.value])
        // if (total) {
        //     setTotal(total + baseRate)
        // }
        // addToSubtotal(baseRate)
    }

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

    async function storeData() {
        localStorage.setItem('name', name)
        localStorage.setItem('phone', phone)
        localStorage.setItem('email', email)
        localStorage.setItem('gender', gender)
        localStorage.setItem('age', age)
        localStorage.setItem('date', appointment.toString())
        localStorage.setItem('slots', `${selectedSlots.toString()}`)
        localStorage.setItem('details', details)
        localStorage.setItem('concerns', concerns)
        localStorage.setItem('mailSent', 0)
    }

    // const triggerMail = async (rzpresponse) => {
    //     await fetch('https://formsubmit.co/ajax/56b3e13432de43fb57867eafe64c37b2', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //             'User-Agent': '*',
    //         },
    //         body: JSON.stringify({
    //             name,
    //             phone,
    //             email,
    //             gender,
    //             age,
    //             date: appointment.toString(),
    //             slots: `${selectedSlots.toString()}`,
    //             concerns,
    //             details,
    //             paymentId: rzpresponse.razorpay_payment_id,
    //             orderId: rzpresponse.razorpay_order_id,
    //             _autoresponse: `Hello ${name}, we have received your booking details. Our team will get back to you soon!`
    //         })
    //     }).then(async () => {
    //         await fetch("/api/updateslots", {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': '*'
    //             },
    //             body: JSON.stringify({
    //                 fulldate: `${appointment[0].getDate()}` + `${appointment[0].getMonth() + 1}` + `${appointment[0].getFullYear()}`,
    //                 slots: `${selectedSlots.toString()}`
    //             })
    //         }).then(() => {
    //             setModalProps({
    //                 ...modalProps,
    //                 title: "Your payment was successful!",
    //                 status: true,
    //                 paymentId: rzpresponse.razorpay_payment_id,
    //                 orderId: rzpresponse.razorpay_order_id,
    //             })
    //             setPayBtnStatus(false)
    //         })

    //     }).catch(error => console.log(error.message))
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const res = await initializeRazorpay();

    //     if (!res) {
    //         alert("Razorpay SDK Failed to load");
    //         setPayBtnStatus(false)
    //         return;
    //     }

    //     setPayBtnStatus(true)
    //     // Make API call to the serverless API
    //     const data = await fetch("/api/razorpay", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             amount: selectedSlots.length * baseRate
    //         })
    //     }).then((t) =>
    //         t.json()
    //     );
    //     console.log(data);
    //     var options = {
    //         key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
    //         name: "Slay it with skin",
    //         currency: data.currency,
    //         amount: data.amount,
    //         order_id: data.id,
    //         description: "Thankyou for your booking your appointment",
    //         image: "https://avatars.githubusercontent.com/u/7713209?s=280&v=4",
    //         handler: function (response) {
    //             // Validate payment at server - using webhooks is a better idea.
    //             setModalProps({
    //                 ...modalProps,
    //                 // status: true,
    //                 title: "Your payment was successful!",
    //                 paymentId: response.razorpay_payment_id,
    //                 orderId: response.razorpay_order_id,
    //             })
    //             if (response.razorpay_payment_id) {
    //                 triggerMail(response)
    //                 setPayBtnStatus(false)
    //             }
    //             else {
    //                 setModalProps({ ...modalProps, title: "Your payment could not be completed!", status: true })
    //                 setPayBtnStatus(false)
    //             }
    //         },
    //         prefill: {
    //             name: name,
    //             email: email,
    //             contact: phone,
    //         },
    //     };

    //     const paymentObject = new window.Razorpay(options);
    //     paymentObject.open();
    //     setPayBtnStatus(false)
    // }

    function clearSlots() {
        if (total) {
            if (total - selectedSlots.length * baseRate <= 0) {
                setTotal(0)
                setSubTotal(0)
            }
            else {
                setTotal(total - selectedSlots.length * baseRate)
            }
        }
        else {
            if (subTotal - selectedSlots.length * baseRate <= 0) {
                setSubTotal(0)
            }
            else {
                setSubTotal(subTotal - selectedSlots.length * baseRate)
            }
        }
        document.querySelectorAll('.timeslot').forEach(element => element.classList.remove("selected"))
        setSelectedSlots([])
    }

    function applyCoupon() {
        axios.post('/api/getcoupon', {
            code: couponCode
        }).then(res => {
            if (res.data.type == "flat") {
                setTotal(subTotal - parseInt(res.data.value))
            }
            if (res.data.type == "percent") {
                setTotal(subTotal - subTotal * parseInt(res.data.value) / 100)
            }
        }).catch(err => {
            setTotal(0)
            Toast({
                status: 'warning',
                description: 'Coupon Not Found'
            })
        })
    }

    function addToSubtotal(amountToAdd) {
        if (total) {
            setTotal(total + amountToAdd)
        }
        setSubTotal(subTotal + amountToAdd)
    }
    function subtractFromSubtotal(amountToSubtract) {
        if (total) {
            setTotal(total - amountToSubtract)
        }
        setSubTotal(subTotal - amountToSubtract)
    }


    // Cashfree Payment Handling
    useEffect(() => {
        if (payBtnStatus) {
            document.getElementById("paymentForm").innerHTML = ""
            const cashfree = new Cashfree(cfPaymentSessionId)
            const dropinConfig = {
                components: [
                    "order-details",
                    "card",
                    "netbanking",
                    "app",
                    "upi",
                ],
                onSuccess: function (data) {
                    setCashfreeModal(false)
                },
                onFailure: function (data) {
                    setCashfreeModal(false)
                },
                style: {
                    backgroundColor: "#ffffff",
                    color: "#11385b",
                    fontFamily: "Lato",
                    fontSize: "14px",
                    errorColor: "#ff0000",
                    theme: "light",
                }
            }
            cashfree.drop(document.getElementById("paymentForm"), dropinConfig);
        }
    }, [payBtnStatus])

    function createCashfreeOrder() {
        axios.post(`/api/cashfree/create-order`, {
            orderAmount: parseFloat(total || subTotal),
            phone: phone,
            email: email
        }).then(res => {
            console.log(res.data)
            console.log(res.data.payment_session_id)
            setCfPaymentSessionId(res.data.payment_session_id)
            setTimeout(() => {
                setPayBtnStatus(true)
            }, 2000)

        }).catch(err => {
            Toast({
                description: "Couln't create order"
            })
        })
    }

    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    const stripePromise = loadStripe(publishableKey);

    async function createStripeOrder(){
        await storeData()
        const stripe = await stripePromise
        axios.post('/api/stripe/session', {
                name: name,
                slots: selectedSlots.length,
                price: parseFloat(total || subTotal)
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async (res)=>{
            await stripe.redirectToCheckout({
                sessionId: res.data.id
            })
        }).catch(err=>{
            console.log(err)
            Toast({
                status: 'error',
                title: 'Error while creating order',
                description: err.message
            })
        })
    }


    return (
        <>
            <Head><title>Book Appointment | Slay it with Skin</title></Head>
            <Script
                src='https://sdk.cashfree.com/js/ui/2.0.0/cashfree.sandbox.js'
                strategy='beforeInteractive'
            />
            <Navbar />
            <Text mt={[20, 24]} textAlign={'center'}
                fontSize={[32, 40, 56]} className={styles.cursive}>
                Book A Virtual Appointment
            </Text>
            <Text textAlign={'center'} mb={4} p={2}>
                Select your preferred slot and book a virtual appointment with one of our experts to receive guidance on beauty and grooming.
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
                                <Input variant={'flushed'} maxLength={10} type={'tel'} placeholder={'Your Phone Number*'} required value={phone} onChange={e => setPhone(e.target.value)} />
                            </HStack>
                            <Stack direction={["column", "row"]} w={'full'} my={2}>
                                <Box mt={4}>
                                    <Text color={'rgb(100,100,100)'} pb={2}>Your Gender</Text>
                                    <HStack spacing={6}>
                                        <Button id='male'
                                            size={'sm'}
                                            onClick={(e) => { setGender('male') }}
                                        >
                                            Male
                                        </Button>
                                        <Button id='female'
                                            size={'sm'}
                                            onClick={(e) => { setGender('female') }}
                                        >
                                            Female
                                        </Button>
                                        <Button id='others'
                                            size={'sm'}
                                            onClick={(e) => { setGender('others') }}
                                        >
                                            Others
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


                        <VStack my={4} p={[4, 6]} boxShadow={'base'} bg={'white'} alignItems={'flex-start'}>
                            <Text color={'rgb(100,100,100)'} pb={2}>What are your concerns?</Text>
                            <VStack w={'full'} alignItems={'flex-start'}>
                                <CheckboxGroup defaultValue={[]} onChange={values => {
                                    values.length < 4 ? setSubTotal(299) : values.length == 4 ? setSubTotal(599) : setSubTotal(699)
                                    setConcerns(values)
                                }}>
                                    <b>Hair:</b>
                                    <Stack direction={['column']} spacing={4} flexWrap={'wrap'} pb={6}>
                                        <Checkbox value='Thinning'>Thinning</Checkbox>
                                        <Checkbox value='Scalp' >Scalp</Checkbox>
                                        <Checkbox value='Greying' >Greying</Checkbox>
                                        <Checkbox value='Dandruff' >Dandruff</Checkbox>
                                    </Stack>
                                    <b>Skin:</b>
                                    <Stack direction={['column']} flexWrap={'wrap'} spacing={4}>
                                        <Checkbox value='Acne' >Acne</Checkbox>
                                        <Checkbox value='Ageing' >Ageing</Checkbox>
                                        <Checkbox value='Pigmentation' >Pigmentation</Checkbox>
                                        <Checkbox value='Dark Circles' >Dark Circles</Checkbox>
                                        <Checkbox value='Rosaria' >Rosacea</Checkbox>
                                    </Stack>
                                </CheckboxGroup>
                                <br /><br />
                                <Popover>
                                    <PopoverTrigger>
                                        <Text color={'brown'} fontWeight={600} cursor={'pointer'}>What will you get from this consultation?</Text>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverBody>
                                            In your online consultation, you'll be briefed about the concerns followed by
                                            treatment, the routine to be followed, the products to be used, weekely chat guidance to
                                            check the updates and track the progress of the same.
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </VStack>
                        </VStack>

                        <VStack my={4} p={[4, 6]} boxShadow={'base'} bg={'white'}>
                            <HStack w={'full'} my={2}>
                                <Box w={'full'}>
                                    <Text color={'rgb(100,100,100)'}>Your Preferred Date of Appointment</Text>
                                    <DatePicker
                                        value={appointment}
                                        onChange={(appointmentDate) => setAppointment(appointmentDate)}
                                        options={{
                                            minDate: now.setDate(now.getDate()+1),
                                            dateFormat: "d M Y",
                                            altInput: true,
                                            altInputClass: 'datepicker',
                                            altFormat: "d M Y",
                                            position: "above center",
                                            disable: absentDates,
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
                                            onClick={(e) => addSlot(e)}
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
                                    w={'full'} disabled={true}
                                    resize={'none'}
                                    h={24} value={`My Concerns are: ${concerns}.`}
                                />
                            </HStack>
                            <br />
                            <HStack w={'full'}>
                                <Textarea
                                    w={'full'}
                                    placeholder={'Any additional details you would like to tell us...'}
                                    resize={'none'}
                                    h={64} value={details} onChange={e => setDetails(e.target.value)}
                                />
                            </HStack>
                        </VStack>
                        <VStack my={4} p={[4, 6]} boxShadow={'base'} bg={'white'} alignItems={'flex-start'}>
                            <Text color={'rgb(100,100,100)'} pb={2}>Have Coupon Code?</Text>
                            <HStack w={'full'} spacing={4}>
                                <Input name='couponCode' textTransform={'uppercase'} onChange={e => setCouponCode(e.target.value.toUpperCase())} />
                                <Button colorScheme='facebook' onClick={() => applyCoupon()}>Apply</Button>
                            </HStack>
                        </VStack>
                        <VStack my={4} p={[4, 6]} boxShadow={'base'} bg={'white'}>
                            <HStack w={'full'} spacing={'auto'}>
                                <Box>
                                    <Text fontSize={14} color={'rgb(100,100,100)'}>
                                        Total Payable
                                    </Text>

                                    {
                                        total ?
                                            <>
                                                <Text fontSize={16} className={styles.monts}>
                                                    {subTotal}
                                                </Text>
                                                <hr style={{ border: '.75px solid #000', position: 'relative', top: '-14px' }} />
                                                <Text fontSize={24} className={styles.monts}>
                                                    ₹ {total}
                                                </Text>
                                            </> :
                                            <Text fontSize={24} className={styles.monts}>
                                                ₹ {subTotal}
                                            </Text>
                                    }

                                </Box>
                                {/* <Button colorScheme={'facebook'}
                                    rounded={0} p={6} fontSize={[12, 16]}
                                    className={styles.monts} textTransform={'uppercase'}
                                    type='submit'
                                    disabled={payBtnStatus}
                                >
                                    Pay with Razorpay
                                </Button> */}
                                <Button colorScheme={'whatsapp'}
                                    rounded={0} p={6} fontSize={[12, 16]}
                                    className={styles.monts} textTransform={'uppercase'}
                                    onClick={() => createStripeOrder()}
                                    disabled={payBtnStatus}
                                >
                                    Pay Now
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
                                onClick={() => { setModalProps({ ...modalProps, status: false }); getAppointmenSlots() }}
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </ModalBody>
            </Modal>

            <Footer />


            {/* Cashfree Payment Modal */}
            <Box
                pos={'fixed'}
                top={0} left={0}
                bottom={0} right={0}
                display={payBtnStatus ? 'grid' : 'none'}
                placeContent={'center'}
                bg={'rgba(0,0,0,0.75)'}
                onClick={() => setPayBtnStatus(false)}
            >

                <Box w={['full', 'sm']} h={['100vh', '80vh']} id='paymentForm'>

                </Box>
            </Box>
        </>
    )
}

export default Appointment