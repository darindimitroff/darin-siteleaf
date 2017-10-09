import React from 'react'
import PageTitle from '../components/PageTitle'

import { injectGlobal } from 'styled-components'

import { ThemeProvider } from 'styled-components'

import { Flex, Box } from 'rebass'

import Game from '../components/Game'
import Bg from '../components/Bg'

import gameTheme from '../components/themes/game'

import FluidContainer from '../components/FluidContainer'

import gameData from '../content/games'

const Games = props => (
  <ThemeProvider theme={gameTheme}>
    <div>
      <Bg />
      <FluidContainer pt={4}>
        <Box mb={3}>
          <PageTitle>Games</PageTitle>
        </Box>
        {/* Listing */}
        <Flex container>
          <Flex wrap mx={-2} align="flex-end" is="ul">
            {gameData.map((game, value) => (
              <Box
                w={[1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6]}
                px={2}
                mb={3}
                is="li"
              >
                <Game name={game.name} cover={game.cover} link={game.link} />
              </Box>
            ))}
          </Flex>
        </Flex>
      </FluidContainer>
    </div>
  </ThemeProvider>
)

export default Games
