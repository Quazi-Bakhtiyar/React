import React from 'react'

function Card({title,desc}) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={desc.img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{desc.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default Card