import React, { useEffect } from 'react'
import {
    VStack,
    Text,
    Button,
} from '@chakra-ui/react'

const Index = () => {
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const status = urlParams.get("payment_status")
        if (status.toLocaleLowerCase() == "success" || status.toLocaleLowerCase() == "completed") {
            window.location.assign("/payment/success")
        }
        else{
            window.location.assign("/payment/failed")
        }
    }, [])
    return (
        <>
            <VStack h={'full'} alignItems={'center'} justifyContent={'center'}>
                <Button isLoading={true} variant={'unstyled'} size={'lg'}></Button>
                <Text>Please wait while we process your transaction...</Text>
            </VStack>
        </>
    )
}

export default Index