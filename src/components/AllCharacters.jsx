import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_CHARACTERS } from '../gql'
import { useHistory } from 'react-router'

const AllCharacters = () => {
  const [pageNo, setPageNo] = useState({ page: 1, maxPage: Infinity })
  const { called, loading, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: pageNo.page },
  })

  const history = useHistory()

  useEffect(() => {
    if (data?.characters.info.pages)
      setPageNo({ ...pageNo, maxPage: data.characters.info.pages })
  }, [loading])

  return (
    <div>
      <h1 className='text-center'>All characters</h1>
      {called && loading && <p className='text-danger'>Loading ...</p>}
      <ul className='users'>
        {data?.characters.results.map((character) => (
          <li
            key={character.id}
            onClick={(e) => {
              e.preventDefault()
              history.push(`/character/${character.id}`)
            }}
            style={{ cursor: 'pointer' }}
          >
            <div>
              <img src={character.image} alt='' />
            </div>
            <div>{character.name}</div>
            <div></div>
          </li>
        ))}
      </ul>
      <div className='d-flex'>
        {pageNo.page > 1 && (
          <button
            onClick={() => setPageNo({ ...pageNo, page: pageNo.page - 1 })}
            className='btn btn-info me-2'
          >
            prev
          </button>
        )}
        {pageNo.page < pageNo.maxPage && (
          <button
            onClick={() => setPageNo({ ...pageNo, page: pageNo.page + 1 })}
            className='btn btn-info me-2'
          >
            next
          </button>
        )}
      </div>
    </div>
  )
}

export default AllCharacters
