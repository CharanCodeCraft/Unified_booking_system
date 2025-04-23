import React from 'react'

function movielist() {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Recommended Movies</h1>
      <div className="moviecontainer flex gap-2">
        <div className="moviecard flex flex-col w-[25%]">
            <div className="cardimg"><img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kesari-chapter-2-the-untold-story-of-jallianwala-bagh-et00439158-1744618984.jpg" alt="Movie Image" /></div>
            <div className="cardcontent flex flex-col">
                <h2 className="cardtitle font-bold">Kesari Chapter 2: The Untold Story of Jallianwala Bagh</h2>
                <p className="cardtext">A story of a man who was killed in a terrorist attack and the man who saved his life.</p>
            </div>
        </div>
        <div className="moviecard flex flex-col">
            <div className="cardimg"><img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kesari-chapter-2-the-untold-story-of-jallianwala-bagh-et00439158-1744618984.jpg" alt="Movie Image" /></div>
            <div className="cardcontent flex flex-col">
                <h2 className="cardtitle">Kesari Chapter 2: The Untold Story of Jallianwala Bagh</h2>
                <p className="cardtext">A story of a man who was killed in a terrorist attack and the man who saved his life.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
export default movielist
