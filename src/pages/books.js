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

import 'whatwg-fetch'

const config = {
  base: 'appSbo0SLDBCX2Pro',
  table: 'Movies',
  view: 'Main View',
  apiKey: 'keyhTqfSg7iYo5Q4U',
  maxRecords: 50,
}

const request = new Request(
  `https://api.airtable.com/v0/${config.base}/${config.table}?maxRecords=${config.maxRecords}&view=${config.view}`,
  {
    method: 'get',
    headers: new Headers({
      Authorization: `Bearer ${config.apiKey}`,
    }),
  },
)

import bookData from '../content/books'

class Books extends React.Component {
  constructor(props) {
    super(props)
    this.state = { records: [] }
    this.fetchAirtable = this.fetchAirtable.bind(this)
  }

  async componentDidMount() {
    await this.fetchAirtable()
  }

  async fetchAirtable() {
    var resp = await fetch(request).catch(err => {
      console.log(err)
    })
    if (resp.status >= 200 && resp.status < 300) {
      var json = await resp.json()
      const { records } = json
      this.setState({ records })
    }
  }
  render() {
    const { records } = this.state
    return (
      <ThemeProvider theme={bookTheme}>
        <div>
          <Bg />
          <FluidContainer pt={3}>
            <PageTitle isVisible>Books</PageTitle>
            {/* Listing */}
            <Flex container>
              <Flex wrap mx={-2} align="flex-end" is="ul">
                {records && records.length > 0 ? (
                  records.map(record => (
                    <Box
                      w={[1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6]}
                      px={2}
                      mb={3}
                      is="li"
                    >
                      <Book
                        name={JSON.stringify(record.fields.Name)}
                        cover={JSON.stringify(record.fields.Poster[0].url)}
                        link="#"
                      />
                    </Box>
                  ))
                ) : (
                  <p>Double-check that you have added your API key to .env.</p>
                )}
              </Flex>
            </Flex>
          </FluidContainer>
        </div>
      </ThemeProvider>
    )
  }
}

export default Books
