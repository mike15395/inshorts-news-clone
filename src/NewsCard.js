import React from 'react'
import './NewsCard.css'

function NewsCard({ item }) {
    
    const fullDate = new Date(item.publishedAt);
    let date = fullDate.toString().split(' ')
    const hour = parseInt(date[4].substring(0, 2));
    const minutes = date[4].substring(3, 5);
    const time= hour >12 ? true: false
  
  return (
      <div className='news-container'>
          <img src={ item.urlToImage ? (item.urlToImage):('https://source.unsplash.com/random')} alt='image' className='news-image'/>
          <div className='news-text'>
                <h3>{item.title}</h3>
                <div className='news-sub-title'>
                    <span><b><a className='short-link' href={item.url} target='_blank'>short </a></b></span>
                  <span>by {item.author ? (item.author) : ('unknown')}</span>
                  <span>{"   "}
                      { time ? `${hour-12}:${minutes}pm` :`${hour}:${minutes}am` } { "  "}
                      on {date[2]}{date[1]},{date[0]}</span>
                </div>
                <div>
                    {item.description}
              </div>
              <div>
                  read more at <b><a className='read-more' href={item.url} target='_blank'>{item.source.name}</a></b>
              </div>
          </div>
      </div>
  )
}

export default NewsCard