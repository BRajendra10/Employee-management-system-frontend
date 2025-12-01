import React from 'react';
import Sidebar from '../components/Sidebar';
import Navigation from '../routes/Navigation';

function Home() {
  return (
    <div className="flex">
        <Sidebar />
        <Navigation />
    </div>
  )
}

export default Home