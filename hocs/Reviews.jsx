import React from 'react'
import styles from '../styles/Home.module.css'
import {
    Flex, Text, Image, Box
} from '@chakra-ui/react'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/sea-green';

const Reviews = () => {
  return (
    <>
    <Flex p={16} direction={'column'} alignItems={'center'} justifyContent={'center'}>
        <Text className={styles.monts} textAlign={'center'} letterSpacing={4} color={'blackAlpha.700'}>DON'T BELEIVE US?</Text>
        <Text className={styles.cursive} textAlign={'center'} fontSize={['40','56']} color={'black'}>Read Our Testimonials</Text>
        <Box width={24} h={.5} m={'0 auto'} bg={'black'}></Box>
        <Splide
          options={{
            breakpoints: {
              576: {
                perPage: 1,
                width: '100vw'
              },
              768: {
                perPage: 2
              },
              992: {
                perPage: 3
              }
            },
            perPage: 4,
            perMove: 1
          }}
        >
          <SplideSlide>
            <Box p={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'}>
              <Image boxSize={'128px'} objectFit={'cover'} src={'bride.jpg'} objectPosition={'top'} borderTopLeftRadius={16} borderBottomRightRadius={16} />
              <Text fontSize={'2xl'} color={'black'} mt={2}>Amanda</Text>
              <Text className={styles.monts} fontSize={12} mb={4}>LOCATION</Text>
              <Text color={'darkslategray'} textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis debitis iste quam repellendus quos, sapiente facilis! Consectetur voluptates deserunt sequi?</Text>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box p={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'}>
              <Image boxSize={'128px'} objectFit={'cover'} src={'bride.jpg'} objectPosition={'top'} borderTopLeftRadius={16} borderBottomRightRadius={16} />
              <Text fontSize={'2xl'} color={'black'} mt={2}>Amanda</Text>
              <Text className={styles.monts} fontSize={12} mb={4}>LOCATION</Text>
              <Text color={'darkslategray'} textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis debitis iste quam repellendus quos, sapiente facilis! Consectetur voluptates deserunt sequi?</Text>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box p={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'}>
              <Image boxSize={'128px'} objectFit={'cover'} src={'bride.jpg'} objectPosition={'top'} borderTopLeftRadius={16} borderBottomRightRadius={16} />
              <Text fontSize={'2xl'} color={'black'} mt={2}>Amanda</Text>
              <Text className={styles.monts} fontSize={12} mb={4}>LOCATION</Text>
              <Text color={'darkslategray'} textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis debitis iste quam repellendus quos, sapiente facilis! Consectetur voluptates deserunt sequi?</Text>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box p={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'}>
              <Image boxSize={'128px'} objectFit={'cover'} src={'bride.jpg'} objectPosition={'top'} borderTopLeftRadius={16} borderBottomRightRadius={16} />
              <Text fontSize={'2xl'} color={'black'} mt={2}>Amanda</Text>
              <Text className={styles.monts} fontSize={12} mb={4}>LOCATION</Text>
              <Text color={'darkslategray'} textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis debitis iste quam repellendus quos, sapiente facilis! Consectetur voluptates deserunt sequi?</Text>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box p={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'}>
              <Image boxSize={'128px'} objectFit={'cover'} src={'bride.jpg'} objectPosition={'top'} borderTopLeftRadius={16} borderBottomRightRadius={16} />
              <Text fontSize={'2xl'} color={'black'} mt={2}>Amanda</Text>
              <Text className={styles.monts} fontSize={12} mb={4}>LOCATION</Text>
              <Text color={'darkslategray'} textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perspiciatis debitis iste quam repellendus quos, sapiente facilis! Consectetur voluptates deserunt sequi?</Text>
            </Box>
          </SplideSlide>
        </Splide>
      </Flex>
    </>
  )
}

export default Reviews