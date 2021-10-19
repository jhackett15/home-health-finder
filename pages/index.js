
import { connectToDatabase } from "../util/mongodb";
import Head from 'next/head'
import "tailwindcss/tailwind.css";


export default function Home({ providers }) {
  return (
      <div className="container m-auto w-5/6">
        <Head>
        </Head>
        <div className='flex flex-row align-center flex-wrap'>
          {providers && providers.map(provider => (
            <div key={provider._id}  className="flex-auto w-1/4 rounded overflow-hidden shadow-lg m-2"> 
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>
                  <div>{provider.name}</div>
                  <div>{provider.address} </div>
                  <div>{provider.city}, {provider.state} {provider.zip}  </div>
                  <div>star rating :{provider.rating} / 5 </div>
                  <span></span>
                  <span></span>
                  <a  href={`/listings/${provider._id}`}>
                         <a>VIEW</a>
                 </a>
                </div>

                </div>
        
    
              </div>
          ))}
        </div>
    </div>
    )
  }

export async function getServerSideProps(context) {
  //console.log(context,'context') //runs everytime the page is loaded
  const { db } = await connectToDatabase()
  const data = await db.collection("healthProviders").find({}).limit(20).toArray();
  const providers = JSON.parse(JSON.stringify(data));
 // console.log("DATA", data,"end of data")



 const filtered = providers.map(provider => {
    return {
      _id: provider._id,
      cms_id:provider.cms_id,
      zip: provider.zip,
      phone: provider.phone,
      name: provider.provider_name,
      city: provider.city,
      rating: provider.star_rating,
      state: provider.state,
      address: provider.address,
      date_certified:provider.date_certified,
      type_of_ownership:provider.type_of_ownership,
      nursing_care: provider.offers_nursing_care_services,
      physical_therapy: provider.physical_therapy_services,
      occupational_therapy: provider.occupational_therapy_services,
      speech_pathology: provider.speech_pathology_services,
      medical_social_services: provider.medical_social_services,
      timely_manner: provider.timely_manner,
      type_of_ownership: provider.type_of_ownership,
      date_certified: provider.date_certified,
      home_health_aide: provider.home_health_aide_services,
      drug_education: provider.how_often_the_home_health_team_taught_patients_about_their_drugs,
      seasonal_flu_shot: provider.how_often_the_home_health_team_determined_whether_patients_received_a_flu_shot_for_the_current_flu_season,
      improved_mobility: provider.how_often_patients_got_better_at_walking_or_moving_around,
      get_in_and_out_of_bed: provider.how_often_patients_got_better_at_getting_in_and_out_of_bed,
      improved_bathing: provider.how_often_patients_got_better_at_bathing,
      improved_breathing: provider.how_often_patients_breathing_improved,
      taking_drugs: provider.how_often_patients_got_better_at_taking_their_drugs_correctly_by_mouth,
      admitted_to_hospital: provider.how_often_home_health_patients_had_to_be_admitted_to_the_hospital,
      needed_urgent_care: provider.how_often_patients_receiving_home_health_care_needed_urgent_unplanned_care_in_the_er_without_being_admitted,
      change_in_skin: provider.changes_in_skin_integrity_post_acute_care_pressure_ulcer_injury,
      medications_issues: provider.how_often_physician_recommended_actions_to_address_medication_issues_were_completely_timely,
      dtc_rate: provider.dtc_observed_rate,
      dtc_performance_categorization: provider.dtc_performance_categorization,
      ppr_observed_rate: provider.ppr_observed_rate,
      ppr_performance_categorization: provider.ppr_performance_categorization,
      medicare_spend_per_episode: provider.how_much_medicare_spends_on_an_episode_of_care_at_this_agency_compared_to_medicare_spending_across_all_agencies_nationally,
      

    } 
  }) 

  return {
    props: { providers : filtered  },

  }

}
