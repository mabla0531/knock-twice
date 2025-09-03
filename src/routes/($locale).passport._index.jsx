import { json } from '@shopify/remix-oxygen';
import { useLoaderData, Link } from '@remix-run/react';
import { useState } from 'react';
import buildge from 'public/buildge.jpg';

export default function Passport() {

  const [passportBoxContent, setPassportBoxContent] = useState('');
  const [passportInfoContent, setPassportInfoContent] = useState();

  async function processPassportToken() {
    // check if one of secrets
    // otherwise:
    const response = await fetch("http://localhost:6969/passport", {
      method: "get",
      headers: {
        token: passportBoxContent
      }
    }).then((res) => res.text());

    setPassportInfoContent(response);
  }

  return (
    <>
      <div className="flex *:flex-1 gap-8 w-3/4 h-32 min-h-32 mx-auto items-center">
        <div className="flex justify-center">
          <a href="/">SHOP</a>
        </div>
        <div className="flex justify-center">
          <a className="flex justify-center" href="/about">
            ABOUT
          </a>
        </div>
        <div className="flex justify-center border-solid border-b-2">
          PASSPORT
        </div>
      </div>
      <div className="text-center">
        <div className='m-4'>
          We are currently working on a new feature called Passport. This will allow you to find and track your KT goods. Please check back later!
          {/*<input 
            type="text"
            onChange={(e) => setPassportBoxContent(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter") ? processPassportToken() : {}}
          />*/}
        </div>
        <div className='m-4' dangerouslySetInnerHTML={{ __html: passportInfoContent }} />
      </div>
    </>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
