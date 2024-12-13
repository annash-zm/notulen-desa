import React from 'react'
import { Route, Routes } from 'react-router'
import Nav from '../leaflet/Nav'
import LeafletMap from '../leaflet/LeafletMap'
import InputData from '../leaflet/InputData'

const Routers = () => {
  return (
    <Routes>
        <Route element={<Nav />}>
            <Route index element={<LeafletMap />} />
            <Route path='/input-data' element={<InputData />} />
        </Route>
    </Routes>
  )
}

export default Routers
