import {
    Flex,
    Input,
    Button,
    Textarea,
    Text
} from "@chakra-ui/react";
import { useState } from "react";

import { useRouter } from 'next/navigation'

export default function LPForm() {

    const router = useRouter()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMsg] = useState('')

    const [error, setError] = useState('')

    const [loading, setLoading] = useState(false)

    const handleClick = async (e) => {

        e.preventDefault()

        setLoading(true)

        if (name !== '') {
            fetch("/api/sendlead", {
                method: 'POST',
                body: JSON.stringify({ name, phone, email, message }),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
            }).then((res) => {
                if (!res.ok) {
                    setError("Something went wrong, please try again")
                    setName('')
                    setPhone('')
                    setEmail('')
                    setMsg('')
                    setLoading(false)
                }
                else {
                    setLoading(false)
                    router.push('/thank-you')
                }
            })
        }

        
    }

    return (
        <>
            <form onSubmit={handleClick}>
                <Flex direction={"column"} gap={4} justifyContent={'flex-start'}>

                    <Input borderColor={'gray.200'} type="text" color={"black"} _placeholder={{ color: 'blackAlpha.700' }}
                        placeholder="Enter your name"
                        value={name} onChange={(e) => setName(e.target.value)} required />

                    <Input borderColor={'gray.200'} type="tel" color={"black"} _placeholder={{ color: 'blackAlpha.700' }}
                        placeholder="Enter your phone number"
                        value={phone} onChange={(e) => setPhone(e.target.value)} required />

                    <Input borderColor={'gray.200'} type="email" color={"black"} _placeholder={{ color: 'blackAlpha.700' }}
                        placeholder="Enter your email"
                        value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <Textarea borderColor={'gray.200'} color={"black"} _placeholder={{ color: 'blackAlpha.700' }}
                        placeholder="Message"
                        value={message} onChange={(e) => setMsg(e.target.value)} required />

                    <Button type='submit' textTransform={'uppercase'} width={'fit-content'} mx={['auto', 0]} isLoading={loading}>
                        Contact Us
                    </Button>

                    {error && <Text bg={'red.300'} p={2} borderRadius={4}>Error: {error}</Text>}

                </Flex>
            </form>
        </>
    )
}