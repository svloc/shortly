import React, { useState } from 'react';
import ShortCode from '../Api/ShortCode';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import '../Style/Home.css';
export default function Home() {
 
  const[status,setStatus]=useState(false);
  const [Link, setLink] = useState('');
  const[c1,setC1]=useState(true);
  const[c2,setC2]=useState(true);
  const[c3,setC3]=useState(true);
  const[shortUrl, setShortUrl] = useState([]);
  const[isLoading, setIsLoading] = useState(false);
  const[errorText,setErrorText]=useState('');
  const HTTP_URL_VALIDATOR_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  
  const handleSubmit = e => {
    e.preventDefault();
    if(Link==''){
      setErrorText('Please Enter the Url')
    }
    if(checkLink(Link)) {
      setLink('');
      getLink();
      setLink('');
      setIsLoading(!isLoading);
    }
    else{
      setErrorText('Please Enter Valid Url')
    }
  };
  const checkLink = string => {
    // Regex to check if string is a valid URL
    return string.match(HTTP_URL_VALIDATOR_REGEX);
  };

  const getLink = async () => {
    await ShortCode.get(`shorten?url=${Link}`).then(res => {
      if(res.data.ok){
        setShortUrl(res.data.result)
        setStatus(true);
        setIsLoading(false);
      } 
      else{
        setStatus(false);
      }
      }).catch(error => {
        console.error(error);
        setStatus(false);
        setIsLoading(true);
      });
    
  };

  const handleOutLink = e => {
    e.preventDefault();
  };

  const on_copy=(text)=>{
    switch(text) {
      case 'copy1':
       setC1(false);
       setC2(true);
       setC3(true);
       break;
      case 'copy2':
       setC1(true);
       setC2(false);
       setC3(true);
       break;
      case 'copy3':
      setC1(true);
      setC2(true);
      setC3(false);
      break;  
    
    }
  
  }

  return (
    <>
      <div className="home-container">
        <form onSubmit={e => handleSubmit(e)}>
          <div className="input-group">
            <input onChange={e => setLink(e.target.value)} value={Link} type="text" className="input-search"
              placeholder="Shorten a link here.." />
              {errorText && <small className='error-msg'>{errorText}</small>}
          </div>
           <button onClick={e => handleSubmit(e)} className="btn-home btn-outline-light">
          {isLoading ?<div class="sk-chase"><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div> <div class="sk-chase-dot"></div> <div class="sk-chase-dot"></div><div class="sk-chase-dot"></div>
               </div> :<span> Shorten It!</span> }</button>
        </form>

        {status &&
          <>
          <div className="short-link-out">
          <form onSubmit={e => handleOutLink(e)} className='short-form'>
            <div className="input-group">
              <p className="input-search short-link">{shortUrl.short_link}</p> 
            </div>
            <CopyToClipboard text={shortUrl.short_link}>
              <button className="btn-home btn-outline-light" onClick={()=>on_copy('copy1')}>
             {c1 ?<span>Copy</span>:<span>Copied</span>} </button>
            </CopyToClipboard>
          </form>
         </div> 
        
       
          <div className="short-link-out">
          <form onSubmit={e => handleOutLink(e)} className='short-form'>
            <div className="input-group">
              <p className="short-link input-search">{shortUrl.short_link2}</p>
            </div>
            <CopyToClipboard text={shortUrl.short_link}>
              <button className="btn-home btn-outline-light" onClick={()=>on_copy('copy2')}>
                {c2 ?<span>Copy</span>:<span>Copied</span>}</button>
            </CopyToClipboard>
          </form>
          </div>
    
       
           <div className="short-link-out" >
          <form onSubmit={e => handleOutLink(e)} className='short-form'>
            <div className="input-group ">
              <p className="short-link input-search">{shortUrl.short_link3}</p>
            </div>
             <CopyToClipboard text={shortUrl.short_link} >
              <button className="btn-home btn-outline-light" onClick={()=>on_copy('copy3')}>
                {c3 ?<span>Copy</span>:<span>Copied</span>} </button>
            </CopyToClipboard>
          </form>
          </div> 
          </>}
      </div>
    </>
  );
}
