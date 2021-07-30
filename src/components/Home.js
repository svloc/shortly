import React, { useState } from 'react';
import ShortCode from '../Api/ShortCode';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import '../Style/Home.css';
export default function Home() {
  const [Link, setLink] = useState('');
  const [short, setShort] = useState('');
  const [shortLink2, setShortLink2] = useState('');
  const [shareLink, setShareLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const HTTP_URL_VALIDATOR_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

  const handleSubmit = e => {
    e.preventDefault();
    if (checkLink(Link)) {
      setLink('');
      getLink();
      setLink('');
      setIsLoading(!isLoading);
    }
  };
  const checkLink = string => {
    // Regex to check if string is a valid URL
    return string.match(HTTP_URL_VALIDATOR_REGEX);
  };

  const getLink = async () => {
    await ShortCode.get(`shorten?url=${Link}`)
      .then(res => {
        setShort(res.data.result.short_link);
        setShortLink2(res.data.result.short_link2);
        setShareLink(res.data.result.share_link);
      })
      .catch(error => {
        console.error(error);
      });
    setIsLoading(false);
  };
  const handleOutLink = e => {
    e.preventDefault();
  };
  return (
    <>
      <div className="home-container">
        <form onSubmit={e => handleSubmit(e)}>
          <div className="input-group">
            <input
              onChange={e => setLink(e.target.value)}
              value={Link}
              type="text"
              className="input-search"
              placeholder="Shorten a link here.."
            />
          </div>
          {!isLoading && (
            <button
              onClick={e => handleSubmit(e)}
              className="btn-home btn-outline-light"
            >
              Shorten-it!
            </button>
          )}
          {isLoading && (
            <button
              onClick={e => handleSubmit(e)}
              className="btn-home btn-outline-light"
            >
              Generating..
            </button>
          )}
        </form>

        {short && (
          <div className="short-link-out">
          <form onSubmit={e => handleOutLink(e)}>
            <div className="input-group">
              <p className="input-search short-link">{short}</p>
            </div>
            <CopyToClipboard text={short} onCopy={() => setCopied(true)}>
              <button className="btn-home btn-outline-light " >Copy</button>
            </CopyToClipboard>
          </form>
          </div>
        )}
        {shortLink2 && (
          <div className="short-link-out">
          <form onSubmit={e => handleOutLink(e)}>
            <div className="input-group">
              <p className="short-link input-search">{shortLink2}</p>
            </div>
            <CopyToClipboard text={shortLink2} onCopy={() => setCopied(true)}>
              <button className="btn-home btn-outline-light">Copy</button>
            </CopyToClipboard>
          </form>
          </div>
        )}
        {shareLink && (
           <div className="short-link-out">
          <form onSubmit={e => handleOutLink(e)}>
            <div className="input-group ">
              <p className="short-link input-search">{shareLink}</p>
            </div>
             <CopyToClipboard text={shareLink} onCopy={() => setCopied(true)}>
              <button className="btn-home btn-outline-light ">Copy</button>
            </CopyToClipboard>
          </form>
          </div>
        )}
      </div>
    </>
  );
}
