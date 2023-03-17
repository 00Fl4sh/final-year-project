import React from 'react'

export default function Takethetest() {
  return (
    
    <>
    <div className="queoptions">
        <ul>

            <li>0.Did not apply to me at all </li>
            <li>1.Applied to me to some degree, or some of the time</li>
            <li>2.Applied to me to a considerable degree, or a good part of time</li>
            <li>3.Applied to me very much, or most of the time</li></ul>

    </div>


    <div>
        <form action="{{ url_for('predict')}}" method="post">
            <h1>Mental Health Examine</h1>

            <h3 data-aos="fade-left">I found it hard to wind down
                <input id="first" name="wind_down" type="number "/></h3>

            <h3 data-aos="fade-right">I was aware of dryness of my mouth
                <input id="first" name="dryness_mouth" required="required" type="number "/></h3>

            <h3 data-aos="fade-left">I couldn't seem to experience any positive feeling at all
                <input id="first" name="no_positive_feeling" required="required" type="number "/></h3>

            <h3 data-aos="fade-right">I experienced breathing difficulty (eg, excessively rapid breathing, breathlessness in the absence of physical exertion)
                <input id="first" name="breathing_difficulty" required="required" type="number "/></h3>

            <h3 data-aos="fade-down">I found it difficult to work up the initiative to do things
                <input id="first" name="difficult_to_work" required="required" type="number "/></h3>

            <h3 data-aos="fade-down">I tended to over-react to situations
                <input id="first" name="over_react" required="required" type="number "/></h3>

            <h3 data-aos="fade-down">I experienced trembling (eg, in the hands)
                <input id="first" name="trembling" required="required" type="number "/></h3>

            <h3 data-aos="fade-down">I felt that I was using a lot of nervous energy
                <input id="first" name="use_nervous_energy" required="required" type="number "/></h3>

            <h3 data-aos="fade-down">I was worried about situations in which I might panic and make a fool of myself
                <input id="first" name="panic" required="required" type="number "/></h3>

            <h3 data-aos="fade-down">I felt that I had nothing to look forward to
                <input id="first" name="nothing_look_forward" required="required" type="number "/></h3>

            <h3 data-aos="fade-down">I found myself getting agitated
                <input id="first" name="agitated" required="required" type="number "/></h3>

            <h3 data-aos="fade-down">I found it difficult to relax
                <input id="first" name="difficult_relax" required="required" type="number "/></h3>

            <h3 data-aos="fade-down">I felt down-hearted and blue
                <input id="first" name="blue" required="required" type="number "/></h3>

            <h3 data-aos="fade-down">I was intolerant of anything that kept me from getting on with what I was doing
                <input id="first" name="intolerant" required="required" type="number "/></h3>

            <h3 data-aos="fade-down">I felt I was close to panic
                <input id="first" name="close_panic" required="required" type="number "/></h3>

            <h3 data-aos="fade-down">I was unable to become enthusiastic about anything
                <input id="first" name="unable_enthusiatic" required="required" type="number "/></h3>

            <h3 data-aos="fade-down">I felt I wasn't worth much as a person
                <input id="first" name="not_worth_person" required="required" type="number "/></h3>

            <h3 data-aos="fade-down">I felt that I was rather touchy
                <input id="first" name="touchy" required="required" type="number "/></h3>

            <h3 data-aos="fade-down">I was aware of the action of my heart in the absence of physical exertion (eg, sense of heart rate increase, heart missing a beat)
                <input id="first" name="action_of_heart_abs" required="required" type="number "/></h3>

            <h3>I felt scared without any good reason
                <input id="first" name="scared_no_reason" required="required" type="number "/></h3>

            <h3>I felt that life was meaningless
                <input id="first" name="life_meaningless" required="required" type="number "/></h3>

            
            <br data-aos="fade-down"/><button id="sub" type="submit " onclick="output()">I'm Done</button>

            

        </form>

      </div>
    </>
  )
}