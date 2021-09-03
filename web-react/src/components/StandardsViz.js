import React from 'react'
import { Chart } from 'react-google-charts'
import { useQuery, gql } from '@apollo/client'

const GET_STANDARD_NODES_QUERY = gql`
  {
    nodes {
      key
      title
      url
      child {
        title
        url
      }
    }
  }
`

export default function standardNodes() {
  const { loading, error, data } = useQuery(GET_STANDARD_NODES_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>
  let dataFormatted = []
  let index = 0
  data.nodes.map((node) => {
    if (index === 0) {
      dataFormatted.push(['Key', 'Title', 'Url', 'Child'])
      dataFormatted.push([node.title, null, null, 0])
    } else if (index < 50) {
      dataFormatted.push([node.title, 'qedcDataTom', index, 0])
    } else {
      dataFormatted.push([node.title, 'qedcDataTom', node.key, 0])
    }
    index = index + 1
  })

  return (
    <div className={'my-pretty-chart-container'}>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="TreeMap"
        loader={<div>Loading Chart</div>}
        data={dataFormatted}
        options={{
          minColor: '#f00',
          midColor: '#ddd',
          maxColor: '#0d0',
          headerHeight: 15,
          fontColor: 'black',
          showScale: true,
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )
}
