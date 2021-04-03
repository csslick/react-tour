import React, { useState, useEffect } from 'react';
import Tours from './components/Tours';
import 'bootstrap/dist/css/bootstrap.min.css';

const url = 'https://course-api.com/react-tours-project';
const layout_center = {
  display: 'flex',
  justifyContent: 'center',
}

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    console.log('remove tour id = ', id)
    const newTours = tours.filter(tour => {
      return tour.id !== id
    })
    setTours(newTours);
    // console.log('newTours = ', newTours)
    console.log('Tours length = ', tours.length)
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      // console.log(tours);
      setLoading(false)
      setTours(tours)
    } catch(err) {
      setLoading(false)
      console.log(err)
    }

  }

  useEffect(() => {
    fetchTours()
  }, [])

  // 로딩 채크
  if(loading) {
    return (
      <p>Loading</p>
    )
  }

  // 데이터가 모두 제거 되았을 때
  if(tours.length === 0) {
    return (
      <main style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <h2>자료가 모두 삭제되었습니다.</h2>
        <button 
          className="btn btn-success"
          onClick={fetchTours}
        >다시 불러오기</button>
      </main>
    )
  }

  return (
    <main style={layout_center}>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )  

}

export default App;
