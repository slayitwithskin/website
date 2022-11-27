import React from 'react'
import {Flex, Button, Text, Image, HStack} from '@chakra-ui/react'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import {BsEnvelopeFill} from 'react-icons/bs'

const Soon = () => {
    return (
        <>

            <Flex
                pt={[16, 0]}
                px={[4, 0]}
                direction={'column'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Image
                    src={'/shop.png'}
                    w={['80%', '70%', '50%']}
                />
                <Flex direction={'column'} alignItems={'center'} justifyContent={'center'} mb={[24, 0]} position={'relative'}>
                    <Text fontSize={[40, 64]} fontWeight={800} color={'darkslategray'} textAlign={'center'}>Under Development</Text>
                    <Text textAlign={'center'}>Amazing things are on their way.</Text>
                    <Link href={'/'}>
                        <Button rounded={0} bg={'burlywood'} className={styles.monts} color={'white'} _hover={{ bg: 'brown' }} my={8} alignSelf={'center'}>GET BACK TO HOME PAGE</Button>
                    </Link>
                </Flex>
            </Flex>
        </>
    )
}

export default Soon