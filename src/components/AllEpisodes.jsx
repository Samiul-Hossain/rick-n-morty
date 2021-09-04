import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_EPISODES } from '../gql'
import { useHistory } from 'react-router'

const AllEpisodes = () => {
  const [pageNo, setPageNo] = useState({ page: 1, maxPage: Infinity })
  const { called, loading, data } = useQuery(GET_ALL_EPISODES, {
    variables: { page: pageNo.page },
  })

  const history = useHistory()

  useEffect(() => {
    if (data?.episodes.info.pages)
      setPageNo({ ...pageNo, maxPage: data.episodes.info.pages })
  }, [loading])

  return (
    <div>
      <h1 className='text-center'>All episodes</h1>
      {called && loading && <p className='text-danger'>Loading ...</p>}
      <ul className='users'>
        {data?.episodes.results.map((episode) => (
          <li
            key={episode.id}
            onClick={(e) => {
              e.preventDefault()
              history.push(`/episode/${episode.id}`)
            }}
            style={{ cursor: 'pointer' }}
          >
            <div className='me-1'>{episode.episode}</div>
            <div>{episode.name}</div>
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

export default AllEpisodes
