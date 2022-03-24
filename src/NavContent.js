import { Container } from '@material-ui/core'
import React from 'react'
import NewsCard from './NewsCard'
import './NavContent.css'

function NavContent({ newsArray, newsResult, loadMore, setLoadmore }) {
    console.log(loadMore);
  console.log(newsResult);

  return (
    
    <Container maxWidth='md'>
      <div className='contents'>
      {newsArray.map((item) => (
        
        <NewsCard item={item} key={item.name}/>
        
      ))}
        
       
           {
          loadMore <= newsResult &&(
          <div>
            <hr/>
            <button className='loadmore-button' onClick={()=>setLoadmore(loadMore+20)}>Load More</button>
          </div>
          )
        }
    </div>
          
      </Container>
     
  )
}

export default NavContent