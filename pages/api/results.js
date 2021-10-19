
import { connectToDatabase } from "../../util/mongodb";
import Head from 'next/head'


export default function SearchResults({ providers }) {
    return (
        <div className="container m-auto w-5/6">
          <Head>
          <link href="https://unpkg.com/tailwindcss@2.0.1/dist/tailwind.min.css" rel="stylesheet"></link>
          </Head>
          <div className='flex flex-row align-center flex-wrap'>
            {providers && providers.map(provider => (
              <div key={provider.id} className="flex-auto w-1/4 rounded overflow-hidden shadow-lg m-2"> 
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>
                    ZIP :{provider.zip} 
                    <p>name :{provider.name} </p>
                    <p>city :{provider.city} </p>
                    <p>address :{provider.address} </p>
                    <span>Offers Nursing Care? {provider.nursing_care}</span>
                    <span>Offers Physical Therapy: {provider.physical_therapy}</span>
                    <span></span>
                    <span></span>
  
                  </div>
  
                  </div>
          
      
                </div>
            ))}
          </div>
      </div>
      )
    }


    export async function getStaticProps({params}){
      const {db} = await connectToDatabase();
      const data = await db.collection("healthProviders")
      .find({_id: params.id, zip: params.zip},  //find the id in DB and connect the params id from browser
        {
          projection: {
            provider_name:1
          }
        }) 
        return {
          props: {provider: JSON.parse(JSON.stringify(data))},
          revalidate: 1
        }
    }
     