import React from 'react'
const Card = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            {/* First Column */}
            <div className="col-sm">
              <div className="card" style={{ width: '18rem' }}>
                <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="https://www.google.com" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
  
            {/* Second Column */}
            <div className="col-sm">
              <div className="card" style={{ width: '18rem' }}>
                <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="https://www.google.com" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
  
            {/* Third Column */}
            <div className="col-sm">
              <div className="card" style={{ width: '18rem' }}>
                <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="https://www.google.com" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Card;