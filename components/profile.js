export default function Profile({ provider }) {
    console.log(provider)
    return(
<div className='flex align-center py-4 flex-col border-b-2'>
        {provider && 
            <div key={provider._id} className="flex rounded h-screen m-2 "> 
            <div className='font-bold text-xl lg:text-6xl'>{provider.provider_name}</div>
              <div className='px-6 py-4'>
                <div className='font-bold flex text-xl justify-end mb-2'>
                  <div className='mb-2 py-8'>
                  <div> Office Location:
                  <div>{provider.address} </div>
                  <div>{provider.city}, {provider.state} {provider.zip}  </div>
                  </div>
                  <div className=''>
                  <div>star rating :{provider.star_rating} / 5 </div>
                  <div>Phone:
                    <div>{provider.phone} </div>
                    <div>Type of Ownership: {provider.type_of_ownership} </div>
                    <div>Medicare certification date: {provider.date_certified} </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>                
              </div>
      } 
              {provider && 
                    <div className='m-auto'>
               
<table className="table-fixed ">
  <thead>
    <tr>
      <th className='underline p-4'>Services</th>
      <th className=' p-4'></th>
      <th className='underline p-4'>Offered?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='p-4'>Nursing Care</td>
      <td className='p-4'></td>
      <td className='p-4'>{provider.offers_nursing_care_services}</td>

    </tr>
    <tr>
      <td className='p-4'>Physical Therapy</td>
      <td className='p-4'></td>
      <td className='p-4'>{provider.physical_therapy_services}</td>

    </tr>
    <tr>
      <td className='p-4'>Occupational Therapy</td>
      <td className='p-4'></td>
      <td className='p-4'>{provider.occupational_therapy_services}</td>

    </tr>
    <tr>
      <td className='p-4'>Speech Pathology</td>
      <td className='p-4'></td>
      <td className='p-4'>{provider.speech_pathology_services}</td>

    </tr>
    <tr>
      <td className='p-4'>Medical social services</td>
      <td className='p-4'></td>
      <td className='p-4'>{provider.medical_social_services}</td>

    </tr>
    <tr>
      <td className='p-4'>Home Health aide </td>
      <td className='p-4'></td>
      <td className='p-4'>{provider.home_health_aide_services}</td>

    </tr>
  </tbody>
</table>
</div>
              }
       
  </div>
    )
}
