import React from 'react'
import Tour from './Tour'

export default function Tours({tours, removeTour }) {
  return (
    <section className="text-center">
      <header className="p-5">
        <h2>Our Tours</h2>
        <div className="line" style={bottom_line}></div>
      </header>
      <article>
        {
          tours.map(tour => {
            return (
              <Tour 
                tour={tour} 
                key={tour.id} 
                removeTour={removeTour}
              />
            )
          })
        }
      </article>
    </section>
  )
}

const bottom_line = {
  width: '100px',
  borderBottom: '4px solid skyblue',
  display: 'inline-block',
}
