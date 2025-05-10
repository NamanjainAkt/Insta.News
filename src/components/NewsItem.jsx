import React from 'react'
import image from '../assets/image.png'
const NewsItem = (props) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px",minHeight:"415px",height:"415px"}}>
      <img src={props.src?props.src:image} style={{height:"200px",width:"325px",padding:"10px",borderRadius:"5px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title.slice(0,50)}</h5>
          <p className="card-text">{props.description?props.description.slice(0,90):""}</p>
          <a href={props.url} className="btn btn-primary">Read more</a>
        </div>
    </div>
  )
}

export default NewsItem
