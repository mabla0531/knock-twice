import { json } from '@shopify/remix-oxygen';
import { useLoaderData, Link } from '@remix-run/react';
import { useState } from 'react';

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
      <div role="tablist" className="tabs tabs-lifted my-16">
        <a role="tab" className="tab" href="/">SHOP</a>
        <a role="tab" className="tab" href="/about">ABOUT</a>
        <div className="tab tab-active">PASSPORT</div>
      </div>
      <div className="text-center">
        <h1>Passport</h1>
        <div className='m-4'>
          <input 
            type="text"
            onChange={(e) => setPassportBoxContent(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter") ? processPassportToken() : {}}
          />
        </div>
        <div className='m-4' dangerouslySetInnerHTML={{ __html: passportInfoContent }} />
      </div>
    </>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
