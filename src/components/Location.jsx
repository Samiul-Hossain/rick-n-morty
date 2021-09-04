import React from 'react'
import Title from './Title'
import { GET_LOCATION } from '../gql'
import { useQuery } from '@apollo/client'

const Location = ({ match }) => {
  const { id } = match.params
  const {
    called,
    loading,
    data = {},
  } = useQuery(GET_LOCATION, {
    variables: { id },
  })

  return (
    <div className='container text-center'>
      <Title />
      <div className='card mx-auto mt-3' style={{ width: '20rem' }}>
        <h3>{loading && 'Loading...'}</h3>
        <h3 className='pt-2'>location: {data.location?.name}</h3>
        <h4>Dimension: {data.location?.dimension}</h4>
        <h4>
          Residents:
          {data.location?.residents.map((res) => (
            <p key={res.id}>{res.name}</p>
          ))}
        </h4>
      </div>
    </div>
  )
}

export default Location
