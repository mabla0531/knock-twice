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
      <div class="flex *:flex-1 gap-8 w-3/4 h-32 min-h-32 mx-auto items-center">
        <div class="flex justify-center">
          <a href="/">SHOP</a>
        </div>
        <div class="flex justify-center">
          <a class="flex justify-center" href="/about">
            ABOUT
          </a>
        </div>
        <div class="flex justify-center border-solid border-b-2">
          PASSPORT
        </div>
      </div>
      <div class="text-center">
        <div class='w-108 mx-auto'>
          We are currently working on a new feature called Passport. This will allow you to find and track your KT goods. Please check back later!
          {/*<input 
            type="text"
            onChange={(e) => setPassportBoxContent(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter") ? processPassportToken() : {}}
          />*/}
        </div>
        <div class='m-4' dangerouslySetInnerHTML={{ __html: passportInfoContent }} />
      </div>
    </>
  );
}
