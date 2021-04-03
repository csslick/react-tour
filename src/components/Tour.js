import React, { useState } from "react";

export default function Tour({tour, removeTour}) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div style={card} className="text-left">
      <figure className="pb-2">
        <img 
          className="img-fluid"
          style={{
            width: "600px",
            height: "300px",
            objectFit: "cover",
          }} 
          src={tour.image} 
          alt={tour.name} 
        />
        <figcaption className="p-3">
          <h4>{tour.name}</h4>
          <p className="price">${tour.price}</p>
          <p>
            {
              readMore ? tour.info : tour.info.substring(0, 200)
            }...
            <button 
              onClick={()=>{setReadMore(!readMore)}}
              style={{border:'none',color:'blue'}}>
              {readMore ? "닫기": "더보기"}
            </button>
          </p>
        </figcaption>
        <div className="text-center">
          <button 
            className="btn btn-danger pl-4 pr-4"
            onClick={() => removeTour(tour.id)}
          >관심 없음</button>
        </div>
      </figure>
    </div>
  );
}

const card = {
  width: '600px',
  background: '#ececec',
  boxShadow: '2px 2px 8px rgba(0,0,0,0.2)',
  overflow: 'hidden',
  marginBottom: '50px',
}
