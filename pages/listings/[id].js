
import { connectToDatabase } from '../../util/mongodb' // only works on server side
import Head from 'next/head'
import Ratings from '../../components/ratings'
import Profile from '../../components/profile'




export default function Listing ({provider}){
  return (
    <div className="container m-auto w-5/6">
      <Head>
  
      </Head>
      <Profile provider={provider}/> 
<div>
  <Ratings provider={provider}/>
      </div> 

   </div>
  )
}

export async function getStaticPaths() { //pre renders paths
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps({params}){
  const {db} = await connectToDatabase();
  const data = await db.collection("healthProviders").findOne({_id: params.id},  //find the id in DB and connect the params id from browser
    {
      projection: {
        cms_id: 1,
        zip: 1,
        provider_name:1,
        state:1,
        star_rating:1,
        phone:1,
        name: 1,
        city: 1,
        address: 1,
        type_of_ownership:1,
        date_certified:1,
        offers_nursing_care_services: 1,
        physical_therapy_services: 1,
        occupational_therapy_services: 1,
        speech_pathology_services: 1,
        medical_social_services: 1,
        home_health_aide_services: 1,
        how_often_the_home_health_team_taught_patients_about_their_drugs:1,
        how_often_patients_got_better_at_walking_or_moving_around:1,
        how_often_patients_got_better_at_getting_in_and_out_of_bed:1,
        how_often_patients_got_better_at_bathing:1,
        how_often_patients_breathing_improved:1,
        changes_in_skin_integrity_post_acute_care_pressure_ulcer_injury:1,
        timely_manner:1,
        how_often_the_home_health_team_taught_patients_about_their_drugs:1,
        how_often_patients_got_better_at_taking_their_drugs_correctly_by_mouth:1,
        how_often_the_home_health_team_determined_whether_patients_received_a_flu_shot_for_the_current_flu_season:1,
        how_often_physician_recommended_actions_to_address_medication_issues_were_completely_timely:1
      }
    })


    return {
      props: {provider: JSON.parse(JSON.stringify(data))},
      revalidate: 1
    }

}

  