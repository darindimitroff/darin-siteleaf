import React from 'react'
import PageTitle from '../components/PageTitle'

import { ThemeProvider } from 'styled-components'
import Bg from '../components/Bg'

import { Flex, Box, Container } from 'rebass'

import Book from '../components/Book'

import placeholder from '../assets/book.jpg'
import placeholder2 from '../assets/book2.jpg'
import placeholder3 from '../assets/book3.jpg'

import bookTheme from '../components/themes/book'

import bookData from '../content/books'

const Books = props => (
  <ThemeProvider theme={bookTheme}>
    <Bg>
      <Container>
        <PageTitle>Books</PageTitle>
        {/* Listing */}
        <Flex container>
          <Flex wrap mx={-2} align="flex-end" is="ul">
            {bookData.map((book, value) => (
              <Box w={[1 / 2, 1 / 3, 1 / 4]} px={2} mb={3} is="li">
                <Book name={book.name} cover={book.cover} link={book.link} />
              </Box>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Bg>
  </ThemeProvider>
)

export default Books
