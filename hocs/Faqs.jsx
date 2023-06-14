import {
    Box,
    Flex,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react"
import styles from '../styles/Home.module.css'

const faqs = [
    {
        "title": "What is the course about?",
        "content": "The cosmetology and asthetics includes all the basic to advance treatments except for injectables."
    },
    {
        "title": "Who is this course for?",
        "content": "The course is for anyone & everyone who wants to begun their career in the skin care industry, is looking for an upgrade or looking for a change."
    },
    {
        "title": "What is the minimum qualification?",
        "content": "HSC, Graduate (any medium)"
    },
    {
        "title": "What is the duration of the course?",
        "content": "12 days + 2 days of viva & practical"
    },
    {
        "title": "Will there be an internship?",
        "content": "Yes, 1 month of paid internship at our clinic to prepare you to either work on you."
    },
    {
        "title": "Will job be provided post internship?",
        "content": "Yes a few students who outgrow their performance at the internship stage will be considered for employment."
    },
    {
        "title": "What will be the timing and location of the class?",
        "content": "10am to 5.30pm, Mumbai."
    },
    {
        "title": "What all equipment will be provided?",
        "content": "There is a goodie bag for every student, so that they can begin practice at home as soon as class begins."
    }
]

export default function Faqs() {
    return (
        <>
            <Flex px={[5,16]} pb={[16]} justifyContent={'center'} direction={'column'} align={'center'}>
                <Text className={styles.cursive} fontSize={['40', '56']}>FAQs</Text>
                <Box width={24} h={.5} bg={'black'} mb={10}></Box>
                <Accordion allowMultiple defaultIndex={[0]} width={'100%'} maxWidth={'720px'}>

                    {faqs.map((f, index) => (
                        <AccordionItem key={index} borderColor={"blackAlpha.500"}>
                            <AccordionButton bg={'blackAlpha.50'} py={3} >
                                <Box flex='1' textAlign={'left'} fontSize={['16','17']}>{f.title}</Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                {f.content}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}

                </Accordion>
            </Flex>
        </>
    )
}