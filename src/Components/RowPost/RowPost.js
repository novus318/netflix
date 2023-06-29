import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import Youtube from 'react-youtube'
import {imageUrl,API_KEY} from '../../constants/Constants'
function RowPost(props) {
  const [post, setPost] = useState([])
  const [url, setUrl] = useState('')
  useEffect(() => {
    axios.get(props.url).then((Response)=>{
      setPost(Response.data.results)
    })
  })
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  const handleMovie=(id)=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    if(response.data.results.length!==0){
      setUrl(response.data.results[0])
    }
    })
  }
  const consol=()=>{
    
  }
  return (
    <div className='row'>
      <h2 className='p-title'>{props.title}</h2>
      <div className='posters'>
        {post.map((obj)=>
            <img onClick={props.netflix ? ()=>consol() :()=>handleMovie(obj.id)} className={props.iSmall ?'poster-small':'poster'} src={props.iSmall ?`${imageUrl+obj.poster_path}`:`${imageUrl+obj.backdrop_path}`} alt="Poster" />
        )}
      </div>
      {url && <Youtube className='youtube' opts={opts} videoId={url.key}/>}
    </div>
  )
}

export default RowPost
