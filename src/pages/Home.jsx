import React from 'react'
import Hero from "../components/Hero"
import DigitalClock from "../components/DigitalClock"
import TimeForm from '../components/TimeForm'


function Home() {
  return (
    <section>
      <div className="mb-10">
      
        <Hero />
      </div>

      <div>
        <TimeForm />
      </div>
    </section>
  );
}


export default Home