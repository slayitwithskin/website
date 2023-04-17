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
import Link from 'next/link'

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
                    <Link href={'https://wa.me/919004574190'}>
                        <Button rounded={0} bg={'#BA90C6'} colorScheme='pink' w={'full'}>Enquire On WhatsApp</Button>
                    </Link>
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
                                    • Facial massage <br />
                                    • High frequency <br />
                                    • Galvanic <br />
                                    • Micro derma brasion <br />
                                    • Hydrafacial <br />
                                    • Chemical peel <br />
                                    • Product knowledge <br />
                                    • Client consultation <br />
                                    • Exam <br />
                                    • Certification <br />
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    <br />
                    <Link href={'https://wa.me/919004574190'}>
                        <Button rounded={0} bg={'#BA90C6'} colorScheme='pink' w={'full'}>Enquire On WhatsApp</Button>
                    </Link>
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
                                        • Anatomy <br />
                                        • Theory of Face <br />
                                        • Facial massage <br />
                                    </Text>
                                    {accordionTwoOpen ||
                                        <Text fontWeight={'medium'} color={'twitter.600'}>Read More</Text>
                                    }
                                </VStack>
                            </AccordionButton>
                            <AccordionPanel paddingY={0}>
                                <Text>
                                    • High frequency <br />
                                    • Galvanic <br />
                                    • Micro derma brasion <br />
                                    • Hydra facial <br />
                                    • Chemical peel <br />
                                    • Carbon facial <br />
                                    • Micro needling <br />
                                    • Bb glow <br />
                                    • Hifu <br />
                                    • Light therapy <br />
                                    • Korean facials <br />
                                    • Facelift <br />
                                    • Laser <br />
                                    • Exam <br />
                                    • Certification <br />
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    <br />
                    <Link href={'https://wa.me/919004574190'} target='_blank'>
                        <Button rounded={0} bg={'#BA90C6'} colorScheme='pink' w={'full'}>Enquire On WhatsApp</Button>
                    </Link>
                </Box>
            </Stack>
            <Footer />
        </>
    )
}

export default Courses