export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:3000/api/search?term=Home`)
    const data = await res.json();

    return {
        props: { providers: data }
    }
}

export default function Results({ providers }) {
    
    return (
        <div>
        {providers && providers.map(provider => (
            <div key={provider._id} className="flex-auto w-1/4 rounded overflow-hidden shadow-lg m-2"> 
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>
                  <div> 
                  <p>name :{provider.provider_name}</p>
                  <p>state :{provider.state} </p>
               
                  </div>
                  
                </div>

                </div>
              </div>
          ))}
      </div>

    )
}