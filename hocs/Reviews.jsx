import React from 'react'
import styles from '../styles/Home.module.css'
import {
  Flex, Text, Image, Box
} from '@chakra-ui/react'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/sea-green';
import { BsHeartFill } from 'react-icons/bs';

const Reviews = () => {
  return (
    <>
      <Flex p={16} direction={'column'} alignItems={'center'} justifyContent={'center'}>
        <Text className={styles.monts} textAlign={'center'} letterSpacing={4} color={'blackAlpha.700'}>DON'T BELEIVE US?</Text>
        <Text className={styles.cursive} textAlign={'center'} fontSize={['40', '56']} color={'black'}>Read Our Testimonials</Text>
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
            perMove: 1,
            
          }}
        >
          <SplideSlide>
            <Box p={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'}>
              {/* <Image boxSize={'128px'} objectFit={'cover'} src={'bride.jpg'} objectPosition={'top'} borderTopLeftRadius={16} borderBottomRightRadius={16} /> */}
              <Text fontSize={'2xl'} color={'black'} mt={2}>Kenisha Gami</Text>
              <Text className={styles.monts} fontSize={12} mb={4}>MUMBAI</Text>
              <Text color={'darkslategray'} textAlign={'center'}>After the treatment my skin have become soft and glowing it have also reduced my dark circles and made my skin look even i feel my skin feels healthy ✌🏼</Text>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box p={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'}>
              {/* <Image boxSize={'128px'} objectFit={'cover'} src={'bride.jpg'} objectPosition={'top'} borderTopLeftRadius={16} borderBottomRightRadius={16} /> */}
              <Text fontSize={'2xl'} color={'black'} mt={2}>Gunjan Saini</Text>
              <Text className={styles.monts} fontSize={12} mb={4}>DELHI</Text>
              <Text color={'darkslategray'} textAlign={'center'}>
                I’ve taken the service for my acne skin and did peeling session by Vandana and it was amazing. Felt the changes in my skin within 24 hrs time! Will surely be taking more services soon. ❤️
              </Text>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box p={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'}>
              {/* <Image boxSize={'128px'} objectFit={'cover'} src={'bride.jpg'} objectPosition={'top'} borderTopLeftRadius={16} borderBottomRightRadius={16} /> */}
              <Text fontSize={'2xl'} color={'black'} mt={2}>Prapti</Text>
              <Text className={styles.monts} fontSize={12} mb={4}>MUMBAI</Text>
              <Text color={'darkslategray'} textAlign={'center'}>I’m getting my acne treatment done, and loving the results so far.</Text>
            </Box>
          </SplideSlide>
          <SplideSlide>
            <Box p={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'}>
              {/* <Image boxSize={'128px'} objectFit={'cover'} src={'bride.jpg'} objectPosition={'top'} borderTopLeftRadius={16} borderBottomRightRadius={16} /> */}
              <Text fontSize={'2xl'} color={'black'} mt={2}>Abhay</Text>
              <Text className={styles.monts} fontSize={12} mb={4}>BANGALORE</Text>
              <Text color={'darkslategray'} textAlign={'center'}>I just love the skin results after my carbon peel laser. Never thought my skin would feel so refreshed & look so healthy.</Text>
            </Box>
          </SplideSlide>
        </Splide>
      </Flex>
    </>
  )
}

export default Reviews