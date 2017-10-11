import React from 'react'
import PageTitle from '../components/PageTitle'

import { ThemeProvider } from 'styled-components'

import { Flex, Box } from 'rebass'

import Book from '../components/Book'
import Bg from '../components/Bg'

import placeholder from '../assets/book.jpg'
import placeholder2 from '../assets/book2.jpg'
import placeholder3 from '../assets/book3.jpg'

import bookTheme from '../components/themes/book'

import FluidContainer from '../components/FluidContainer'

import bookData from '../content/books'

class Books extends React.Component {
  render() {
    return (
      <ThemeProvider theme={bookTheme}>
        <div>
          <Bg />
          <FluidContainer pt={3}>
            <PageTitle isVisible>Books</PageTitle>
            {/* Listing */}
            <Flex container>
              <Flex wrap mx={-2} align="flex-end" is="ul">
                {bookData.map((book, value) => (
                  <Box
                    w={[1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6]}
                    px={2}
                    mb={3}
                    is="li"
                  >
                    <Book
                      name={book.name}
                      cover={book.cover}
                      link={book.link}
                    />
                  </Box>
                ))}
              </Flex>
            </Flex>
          </FluidContainer>
        </div>
      </ThemeProvider>
    )
  }
}

export default Books
