import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { useQuery, gql } from '@apollo/client'
import Title from './Title'

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

  return (
    <React.Fragment>
      <Title>Standards and Children</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Standard Title</TableCell>
            <TableCell>Standard URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.nodes.map((node) => (
            <TableRow key={node.key}>
              <TableCell>{node.title}</TableCell>
              <TableCell>{node.url}</TableCell>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Standard Child Title</TableCell>
                    <TableCell>Standard Child URL</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {node.child.map((child) => (
                    <TableRow key={child.key}>
                      <TableCell>{child.title}</TableCell>
                      <TableCell>{child.url}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}
