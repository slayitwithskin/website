import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import styles from '../styles/Home.module.css'

const Newsletter = () => {
  return (
    <>
        <Box mt={8} w={'full'}>
            <Flex p={[4,8]} 
            direction={'column'} 
            alignItems={'center'} 
            justifyContent={'center'} 
            className={styles.gradientRed}>
                <Text className={styles.cursive} fontWeight={800} textAlign={'center'} fontSize={[32,56]} color={'white'}>Women's Day Offer</Text>
                <Text className={styles.monts} maxW={['100%', '80%', '70%']} fontSize={[14,24]} textAlign={'center'} color={'white'}>
                    Book your appointment from 11 November 2022 to 28 November 2022 and get upto 20% OFF
                </Text>
                <Button
                rounded={0}
                border={'2px solid white'}
                p={6}
                mt={8}
                className={styles.monts}
                onClick={()=>{Calendly.initPopupWidget({url: 'https://calendly.com/slayitwithskin/appointment'});return false;}}
                >
                    BOOK AN APPOINTMENT
                </Button>
            </Flex>
        </Box>
    </>
  )
}

export default Newsletter