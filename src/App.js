
import axios from 'axios';
import { useState,useEffect } from 'react';

import './App.css';
import { API_KEY } from './keys';
import Nav from './Nav';
import NavContent from './NavContent';

function App() {

  const [categories, setCategory] = useState('general');
  const [newsResult, setNewsResult] = useState();
  const [newsArray, setNewsArray] = useState([]);
  const [loadMore, setLoadmore] = useState(10);

  const newsApi = async() => {
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${categories}&pageSize=${loadMore}`)
      console.log(news);
        setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResults);
    
    }

    catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    newsApi();
 },[categories,loadMore,newsResult])
  return (
    <div className="App">
      <Nav setCategory={setCategory}/>
      <NavContent newsArray={newsArray} newsResult={newsResult} loadMore={loadMore} setLoadmore={setLoadmore} />
    </div>
  );
}

export default App;
