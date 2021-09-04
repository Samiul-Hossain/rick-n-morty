import React from 'react'
import Title from './Title'
import { GET_EPISODE } from '../gql'
import { useQuery } from '@apollo/client'

const Episode = ({ match }) => {
  const { id } = match.params
  const {
    called,
    loading,
    data = {},
  } = useQuery(GET_EPISODE, {
    variables: { id },
  })

  return (
    <div className='container text-center'>
      <Title />
      <div className='card mx-auto mt-3' style={{ width: '20rem' }}>
        <h3>{loading && 'Loading...'}</h3>
        <h3 className='pt-2'>Episode: {data.episode?.episode}</h3>
        <h4>Name: {data.episode?.name}</h4>
        <h4>Date aired: {data.episode?.air_date}</h4>
        <h4>
          Characters:
          {data.episode?.characters.map((char) => (
            <p key={char.id}>{char.name}</p>
          ))}
        </h4>
      </div>
    </div>
  )
}

export default Episode
