import React, { useState } from 'react'
import AllCharacters from '../components/AllCharacters'
import AllEpisodes from '../components/AllEpisodes'
import AllLocations from '../components/AllLocations'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Title from '../components/Title'

const Home = () => {
  const [resource, setResource] = useState('chars')
  return (
    <div className='container'>
      <Title />
      <button
        className='btn btn-info me-2'
        onClick={() => setResource('chars')}
      >
        Characters
      </button>
      <button className='btn btn-info me-2' onClick={() => setResource('eps')}>
        Episodes
      </button>
      <button className='btn btn-info me-2' onClick={() => setResource('locs')}>
        Locations
      </button>
      {resource === 'chars' && <AllCharacters />}
      {resource === 'eps' && <AllEpisodes />}
      {resource === 'locs' && <AllLocations />}
    </div>
  )
}

export default Home
