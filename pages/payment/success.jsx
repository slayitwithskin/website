import React, { useEffect, useState } from 'react'
import {
    VStack,
    Text,
    Image,
    Button,
    useToast
} from '@chakra-ui/react'
import Link from 'next/link'
import Navbar from '../../hocs/Navbar'
import Footer from '../../hocs/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Success = () => {
    const Router = useRouter()
    const { status } = Router.query
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [gender, setGender] = useState()
    const [age, setAge] = useState()
    const [date, setDate] = useState()
    const [slots, setSlots] = useState()
    const [concerns, setConcerns] = useState()
    const [details, setDetails] = useState()

    const Toast = useToast({
        position: 'top-right'
    })

    const triggerMail = async () => {
        await fetch('https://formsubmit.co/ajax/56b3e13432de43fb57867eafe64c37b2', {
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
                date,
                slots,
                concerns,
                details,
                _autoresponse: `Hello ${name}, we have received your booking details. Our team will get back to you soon!`
            })
        }).then(async () => {
            localStorage.setItem('mailSent', 1)
            Toast({
                status: 'success',
                description: 'We have received your details'
            })
            let appointmentDate = new Date(date)
            await fetch("/api/updateslots", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*'
                },
                body: JSON.stringify({
                    fulldate: `${appointmentDate.getDate()}` + `${appointmentDate.getMonth() + 1}` + `${appointmentDate.getFullYear()}`,
                    slots: localStorage.getItem('slots')
                })
            }).then(() => {
                Toast({
                    description: 'Slots were updated'
                })
            })
        }).catch(
            error => console.log(error.message)
        )
    }

    function setStorage() {
        setName(localStorage.getItem('name'))
        setPhone(localStorage.getItem('phone'))
        setEmail(localStorage.getItem('email'))
        setGender(localStorage.getItem('gender'))
        setAge(localStorage.getItem('age'))
        setDate(localStorage.getItem('date'))
        setSlots(localStorage.getItem('slots'))
        setConcerns(localStorage.getItem('concerns'))
        setDetails(localStorage.getItem('details'))
    }

    useEffect(() => {
        if (parseInt(localStorage.getItem('mailSent')) == 0) {
            setStorage()
            setTimeout(() => {
                triggerMail()
            }, 1000)
        }
    }, [])

    return (
        <>
            <Head><title>Transaction Successful!</title></Head>
            <Navbar />
            <VStack paddingBottom={16} justifyContent={'center'}>
                <Image src='https://icon-library.com/images/4631f6529c.png' width={'sm'} />
                <Text fontSize={'4xl'} fontWeight={600} textAlign={'center'} pt={8}>
                    Your transaction was successful!
                </Text>
                <br /><br />
                <Link href={'/'}>
                    <Button>Return To Homepage</Button>
                </Link>
            </VStack>
            <Footer />
        </>
    )
}

export default Success