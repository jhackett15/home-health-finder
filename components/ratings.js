export default function Ratings({ provider }) {
    //console.log(provider)
    return(
<div className="flex flex-row">
    {provider && 
        <div key={provider._id} className="rounded m-2 "> 
            <div>Ratings</div>
          <div>
              <h1>Managing daily activities</h1>
          <div>How often patients got better at walking or moving around: 
              <b>{provider.how_often_patients_got_better_at_walking_or_moving_around}%</b>
              </div>
                <div>How often patients got better at getting in and out of bed
                <div>{provider.how_often_patients_got_better_at_getting_in_and_out_of_bed}% </div>
                </div>
                <div>How often patients got better at bathing
                <div>{provider.how_often_patients_got_better_at_bathing}% </div>
                </div>
          </div>

          <div>
              <h1>Treating symptoms</h1>
          <div>How often patients' breathing improved</div>
              <div>{provider.how_often_patients_breathing_improved}%</div>
                <div>How often patients have pressure ulcers/pressure injuries that are new or worsened</div>
                <div>{provider.changes_in_skin_integrity_post_acute_care_pressure_ulcer_injury}% </div>
          </div>


          <div>
              <h1>Preventing harm</h1>
          <div>How often the home health team began their patients' care in a timely manner</div>
              <div>{provider.timely_manner}%</div>
                <div>How often the home health team taught patients (or their family caregivers) about their drugs</div>
                <div>{provider.how_often_the_home_health_team_taught_patients_about_their_drugs}% </div>
                <div>How often patients got better at taking their drugs correctly by mouth</div>
                <div>{provider.how_often_patients_got_better_at_taking_their_drugs_correctly_by_mouth}% </div>
                <div>How often the home health team determined whether patients received a flu shot for the current flu season</div>
                <div>{provider.how_often_the_home_health_team_determined_whether_patients_received_a_flu_shot_for_the_current_flu_season}% </div>
                <div>How often physician-recommended actions to address medication issues were completed timely</div>
                <div>{provider.how_often_physician_recommended_actions_to_address_medication_issues_were_completely_timely}% </div>
          </div>



    </div>
    }

</div>
    )
}
