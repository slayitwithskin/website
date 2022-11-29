import React from 'react'

import Navbar from '../../hocs/Navbar'
import Footer from '../../hocs/Footer'
import styles from '../../styles/Home.module.css'
import { Text, VStack, Card, Stack, Image, CardBody, CardFooter, Button, Heading } from '@chakra-ui/react'


const Checkout = () => {
    return (
        <>
            <Navbar />
            <VStack
                mt={24}
                px={[4, 16]}
            >
                <Text
                fontSize={28}
                fontWeight={600}
                >
                    Your Cart
                </Text>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                            alt='Caffe Latte'
                        />

                        <Stack>
                            <CardBody>
                                <Heading size='md'>The perfect latte</Heading>

                                <Text py='2'>
                                    Caffè latte is a coffee beverage of Italian origin made with espresso
                                    and steamed milk.
                                </Text>
                                <Text
                                pt='4'
                                className={styles.monts}
                                fontSize={20}
                                >
                                    Price: ₹ 399
                                </Text>
                            </CardBody>

                            <CardFooter>
                                <Button variant='solid' colorScheme='blue'>
                                    Buy Latte
                                </Button>
                            </CardFooter>
                        </Stack>
                    </Card>
            </VStack>
        </>
    )
}

export default Checkout