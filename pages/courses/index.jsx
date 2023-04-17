import React, { useState } from 'react'
import {
    VStack,
    Text,
    HStack,
    Stack,
    Button,
    Box,
    Image,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel
} from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from '../../hocs/Navbar'
import Footer from '../../hocs/Footer'

const Courses = () => {
    const [accordionOneOpen, setAccordionOneOpen] = useState(false)
    const [accordionTwoOpen, setAccordionTwoOpen] = useState(false)
    return (
        <>
            <Head><title>Courses</title></Head>

            <Navbar />
            <br /><br />
            <Box p={[4, 16]}>
                <Text
                    fontSize={'4xl'}
                    fontWeight={'600'}
                    textTransform={'capitalize'}
                    textAlign={'center'}
                >Enrol In Our Courses</Text>
            </Box>
            <Stack
                direction={['column', 'row']}
                justifyContent={'center'}
                w={['full']}
                minH={'100vh'}
                p={[4, 16]} spacing={16}
                alignItems={'flex-start'}
            >
                <Box
                    p={4}
                    bg={'white'}
                    boxShadow={'lg'}
                    w={['full', 'sm']}
                >
                    <Image src={'./course1.jpg'} w={['full', 'sm']} h={60} objectFit={'cover'} />
                    <Text fontSize={'2xl'} fontWeight={'600'}>Chemical Peel Course</Text>
                    <br />
                    <Text>
                        A chemical peel is a procedure in which a chemical solution is applied to the skin to remove the top layers.
                        The skin that grows back is smoother. With a light or medium peel,
                        you may need to undergo the procedure more than once to get the desired results.
                    </Text>
                    <br />
                    <Button rounded={0} colorScheme='whatsapp' w={'full'}>Enrol Now (Rs. 7500)</Button>
                </Box>
                <Box
                    p={4}
                    bg={'white'}
                    boxShadow={'lg'}
                    w={['full', 'sm']}
                >
                    <Image src={'./course2.jpg'} w={['full', 'sm']} h={60} objectFit={'cover'} />
                    <Text fontSize={'2xl'} fontWeight={'600'}>Dermaplan Course</Text>
                    <br />
                    <Accordion allowToggle>
                        <AccordionItem >
                            <AccordionButton onClick={() => setAccordionOneOpen(!accordionOneOpen)}>
                                <VStack alignItems={'flex-start'} justifyContent={'flex-start'} w={'full'}>
                                    <b>May Month Launch</b>
                                    <b>Five days Course</b>
                                    <Text textAlign={'left'}>
                                        Course Topics Such as : <br />
                                        • Anatomy <br />
                                        • Theory of face <br />
                                    </Text>
                                    {accordionOneOpen ||
                                        <Text fontWeight={'medium'} color={'twitter.600'}>Read More</Text>
                                    }
                                </VStack>
                            </AccordionButton>
                            <AccordionPanel paddingY={0}>
                                <Text>
                                    • Facial massages <br />
                                    • Micro Derma <br />
                                    • Hydra facial <br />
                                    • Galbinac <br />
                                    • High Frequency <br />
                                    • Skin Consultation <br />
                                    • Chemical peel <br />
                                    • Product Knowledge <br />
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    <br />
                    <Button rounded={0} colorScheme='twitter' w={'full'}>Enrol Now (Rs. 20000)</Button>
                </Box>
                <Box
                    p={4}
                    bg={'white'}
                    boxShadow={'lg'}
                    w={['full', 'sm']}
                >
                    <Image src={'./course3.jpg'} w={['full', 'sm']} h={60} objectFit={'cover'} />
                    <Text fontSize={'2xl'} fontWeight={'600'}>Aesthetic Course</Text>
                    <br />
                    <Accordion allowToggle>
                        <AccordionItem >
                            <AccordionButton onClick={() => setAccordionTwoOpen(!accordionTwoOpen)}>
                                <VStack alignItems={'flex-start'} justifyContent={'flex-start'} w={'full'}>
                                    <b>Nashik April Batch</b>
                                    <b>Seven days Course</b>
                                    <Text textAlign={'left'}>
                                        • Micro Needling <br />
                                        • Chemical peel <br />
                                        • laser <br />
                                    </Text>
                                    {accordionTwoOpen ||
                                        <Text fontWeight={'medium'} color={'twitter.600'}>Read More</Text>
                                    }
                                </VStack>
                            </AccordionButton>
                            <AccordionPanel paddingY={0}>
                                <Text>
                                    • Carbon laser <br />
                                    • HIFU <br />
                                    • Anatomy <br />
                                    • Theory of face <br />
                                    • Facial massages <br />
                                    • Micro Derma <br />
                                    • Hydra facial <br />
                                    • Galbinac <br />
                                    • High Frequency <br />
                                    • Skin Consultation <br />
                                    • Chemical peel <br />
                                    • Product Knowledge <br />
                                    • Government Certification <br />
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    <br />
                    <Button rounded={0} colorScheme='pink' w={'full'}>Enrol Now (Rs 75000)</Button>
                </Box>
            </Stack>
            <Footer />
        </>
    )
}

export default Courses