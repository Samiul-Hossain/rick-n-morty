import React from 'react'
import Title from './Title'
import { GET_CHARACTER } from '../gql'
import { useQuery } from '@apollo/client'

const Character = ({ match }) => {
  const { id } = match.params
  const {
    called,
    loading,
    data = {},
  } = useQuery(GET_CHARACTER, {
    variables: { id },
  })

  return (
    <div className='container text-center'>
      <Title />
      <div className='card mx-auto mt-3' style={{ width: '20rem' }}>
        <h3>{loading && 'Loading...'}</h3>

        <img
          style={{ borderRadius: '50%' }}
          src={data.character?.image}
          alt=''
        />
        <h3 className='pt-2'>Name: {data.character?.name}</h3>
        <h4>Species: {data.character?.species}</h4>
        <h4>Gender: {data.character?.gender}</h4>
        <h4>Status: {data.character?.status}</h4>
        <h4>Location: {data.character?.location.name}</h4>
        <h4>Origin: {data.character?.origin.name}</h4>
        <h4>Episodes: {data.character?.episode.length}</h4>
      </div>
    </div>
  )
}

export default Character
