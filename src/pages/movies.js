import React from 'react'
import PageTitle from '../components/PageTitle'

import { injectGlobal } from 'styled-components'

import { ThemeProvider } from 'styled-components'

import { Flex, Box } from 'rebass'

import Movie from '../components/Movie'
import Bg from '../components/Bg'

import movieTheme from '../components/themes/movie'

import FluidContainer from '../components/FluidContainer'

import movieData from '../content/movies'

const Movies = props => (
  <ThemeProvider theme={movieTheme}>
    <div>
      <Bg />
      <FluidContainer pt={3}>
        <PageTitle>Movies</PageTitle>
        {/* Listing */}
        <Flex container>
          <Flex wrap mx={-2} align="flex-end" is="ul">
            {movieData.map((movie, value) => (
              <Box
                w={[1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6]}
                px={2}
                mb={3}
                is="li"
              >
                <Movie
                  name={movie.name}
                  poster={movie.poster}
                  link={movie.link}
                />
              </Box>
            ))}
          </Flex>
        </Flex>
      </FluidContainer>
    </div>
  </ThemeProvider>
)

export default Movies
