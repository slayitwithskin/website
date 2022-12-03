import React from 'react'
import Link from 'next/link';
import {Box} from '@chakra-ui/react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            {pageNumbers.map((number) => (
                <Link href={'#!'}>
                    <Box boxSize={8}
                        borderRadius={'50%'}
                        bg={'burlywood'}
                        display={'grid'}
                        placeContent={'center'}
                        onClick={() => paginate(number)}
                    >
                        {number}
                    </Box>
                </Link>
            ))}
        </>
    )
}

export default Pagination