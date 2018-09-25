import React from 'react';
import ReactDOM from 'react-dom';



// function Card(props) {
//   return (
//     <div className="card">
//       <div className="image"><img src={} alt=""/></div>
//       <div className="info"><a href="#">Click Here</a></div>
//     </div>
//   )
// }

function Portfolio(props) {
  const cards = props.links.map((link) =>
    <div className="card" key={link.key}>
      <div className="image"><img src={link.source}/></div>
      <div className="info"><a href="#">Click Here</a></div>
    </div>
  );

  return (
    <section className="portfolio">
      <div className="container">
        <h1 className="text-large">Portfolio</h1>
        <div className='row'>
          {cards}
        </div>
      </div>
    </section>
  )
}

// const links = [
//   {key: 1, source: "https://images.unsplash.com/photo-1537336097086-38557cfb415e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86a0b376544ccfe2ce05f559988ab6a5&auto=format&fit=crop&w=1225&q=80"},
//   {key: 2, source: "https://images.unsplash.com/photo-1537336097086-38557cfb415e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86a0b376544ccfe2ce05f559988ab6a5&auto=format&fit=crop&w=1225&q=80"},
//   {key: 3, source: "https://images.unsplash.com/photo-1537336097086-38557cfb415e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86a0b376544ccfe2ce05f559988ab6a5&auto=format&fit=crop&w=1225&q=80"},
//   {key: 4, source: "https://images.unsplash.com/photo-1537336097086-38557cfb415e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86a0b376544ccfe2ce05f559988ab6a5&auto=format&fit=crop&w=1225&q=80"},
//   {key: 5, source: "https://images.unsplash.com/photo-1537336097086-38557cfb415e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86a0b376544ccfe2ce05f559988ab6a5&auto=format&fit=crop&w=1225&q=80"},
//   {key: 6, source: "https://images.unsplash.com/photo-1537336097086-38557cfb415e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86a0b376544ccfe2ce05f559988ab6a5&auto=format&fit=crop&w=1225&q=80"}
// ];




module.exports = Portfolio;

/*
<div className="card">
  <div className="image"><img src="https://images.unsplash.com/photo-1537336097086-38557cfb415e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86a0b376544ccfe2ce05f559988ab6a5&auto=format&fit=crop&w=1225&q=80" alt=""/></div>
  <div className="info"><a href="#">Click Here</a></div>
</div>
*/
