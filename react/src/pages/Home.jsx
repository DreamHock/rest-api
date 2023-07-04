import React from 'react'
import AddLivre from '../components/AddLivre'
import ListLivres from '../components/ListLivres'

const Home = () => {
  return (
    <div className=' flex flex-col items-center gap-4'>
        <AddLivre />
        <ListLivres />
    </div>
  )
}

export default Home