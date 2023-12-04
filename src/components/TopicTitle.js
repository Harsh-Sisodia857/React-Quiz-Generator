import React, { useContext } from 'react'
import DataContext from '../context/dataContext'
function TopicTitle({ title, url }) {
    const { handleTopic } = useContext(DataContext);
  return (
      <div className="card" style={{
          margin : "25px 0px"
      }}>
          <img src={url} className="card-img-top" alt={title} style={{
              width: "100%",
              height: "220px"}}/>
          <div className="card-body text-center">
              <button className="btn btn-primary" onClick={() =>{handleTopic(title)}}>{title}</button>
          </div>
      </div>
  )
}

export default TopicTitle