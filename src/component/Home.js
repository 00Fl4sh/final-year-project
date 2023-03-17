import React from "react";

// import React from 'react'
// import Props from 'react';




function Home() {
  return (
    <>
    
      {/* <div className="box1"> */}

      {/* <img src="https://cdn-icons-png.flaticon.com/512/5483/5483333.png" alt="MentalHealth" width="300px" height="250px"/>  */}
      <div className="para1">
        <h3>OVERVIEW</h3>
        <div className="iframeContainer">
        <div
          style={{
            background: " ghostwhite",
            fontSize: "20px",
            padding: " 10px",
            border: " 1px solid lightgray",
            margin: "10px",
          }}
        >
          <p>
            <iframe title="myFrame"className="iframeContent" src="https://www.nbcnews.com/health/mental-health"></iframe>
          </p>
      </div>
      </div>

        <p>
          Mental illness, also called mental health disorders, refers to a wide
          range of mental health conditions — disorders that affect your mood,
          thinking and behavior. Examples of mental illness include depression,
          anxiety disorders, schizophrenia, eating disorders and addictive
          behaviors. Many people have mental health concerns from time to time.
          But a mental health concern becomes a mental illness when ongoing
          signs and symptoms cause frequent stress and affect your ability to
          function. A mental illness can make you miserable and can cause
          problems in your daily life, such as at school or work or in
          relationships. In most cases, symptoms can be managed with a
          combination of medications and talk therapy (psychotherapy)
        </p>
      </div>
      <div className="box2">
        <div className="para2">
          <h3>SYMPTOMS</h3>
          Signs and symptoms of mental illness can vary, depending on the
          disorder, circumstances and other factors. Mental illness symptoms can
          affect emotions, thoughts and behaviors. Examples of signs and
          symptoms include:
          <ul>
            <li>Feeling sad or down</li>
            <li>Withdrawal from friends and activities</li>
            <li>Significant tiredness, low energy or problems sleeping</li>
            <li>
              Detachment from reality (delusions), paranoia or hallucinations
            </li>
            <li>Inability to cope with daily problems or stress</li>
            <li>
              Trouble understanding and relating to situations and to people
            </li>
            <li>Problems with alcohol or drug use</li>
            <li>Major changes in eating habits</li>
            <li>Excessive anger, hostility or violence</li>
            <li>Suicidal thinking</li>
            <li>Confused thinking or reduced ability to concentrate</li>
            <li>Excessive fears or worries, or extreme feelings of guilt</li>
            <li>Extreme mood changes of highs and lows</li>
            Sometimes symptoms of a mental health disorder appear as physical
            problems, such as stomach pain, backpain,headaches, or other
            unexplained aches and pains.
          </ul>
          {/* <img src="https://cdn-icons-png.flaticon.com/512/5483/5483442.png" alt="symptoms" width="300px" height="270px"/> */}
        </div>
      </div>

      <div className="box3">
        <div className="para3">
          <h3>WHEN TO SEE A DOCTOR</h3>
          <p>
            If you have any signs or symptoms of a mental illness, see your
            primary care provider or a mental health professional. Most mental
            illnesses don't improve on their own, and if untreated, a mental
            illness may get worse over time and cause serious problems.
          </p>
          {/* <img src={require('./public/mental-health10.png')} />         */}
          {/* <img src='./public/metal-health10.png' alt="mental-health10.png" width="230px" height="200px"/> */}
        </div>
      </div>

      <div className="para4">
        <h3>IF YOU HAVE SUICIDAL THOUGHTS</h3>
        <p>
          Suicidal thoughts and behavior are common with some mental illnesses.
          If you think you may hurt yourself or attempt suicide, get help right
          away:
        </p>
        <li>Call 911 or your local emergency number immediately.</li>
        <li>Call your mental health specialist.</li>
        <li>Call a suicide hotline number.</li>
        <li>Seek help from your primary care provider.</li>
        <li>Reach out to a close friend or loved one.</li>
        <li>
          Contact a minister, spiritual leader or someone else in your faith
          community.
        </li>
        <p>Suicidal thinking doesn't get better on its own — so get help.</p>
        {/* <img src="{{ url_for('static', filename ='img/mental-health.png') }}" alt="mental-health" width="290px" height="240px"/> */}
      </div>

      <div className="para5">
        <h3>HELPING A LOVED ONE</h3>

        <p>
          If your loved one shows signs of mental illness, have an open and
          honest discussion with him or her about your concerns. You may not be
          able to force someone to get professional care, but you can offer
          encouragement and support. You can also help your loved one find a
          qualified mental health professional and make an appointment. You may
          even be able to go along to the appointment.
        </p>
        <p>
          If your loved one has done self-harm or is considering doing so, take
          the person to the hospital or call for emergency help.
        </p>
        {/* <img src="{{ url_for('static', filename ='img/mental-health(2).png') }}" alt="mental-health(2)" width="270px" height="220px"/> */}
      </div>

      <div className="para6">
        <h3>CAUSES</h3>
        <p>
          Mental illnesses, in general, are thought to be caused by a variety of
          genetic and environmental factors:
        </p>

        <li>
          <strong>Inherited traits:</strong> Mental illness is more common in
          people whose blood relatives also have a mental illness. Certain genes
          may increase your risk of developing a mental illness, and your life
          situation may trigger it.
        </li>
        <li>
          <strong>Environmental exposures before birth:</strong> Exposure to
          environmental stressors, inflammatory conditions, toxins, alcohol or
          drugs while in the womb can sometimes be linked to mental illness.
        </li>
        <li>
          <strong>Brain chemistry:</strong> Neurotransmitters are naturally
          occurring brain chemicals that carry signals to other parts of your
          brain and body. When the neural networks involving these chemicals are
          impaired, the function of nerve receptors and nerve systems change,
          leading to depression and other emotional disorders.
        </li>
        {/* <img src="{{ url_for('static', filename ='img/mhf.png') }}" alt="mhf"/> */}
      </div>
      {/* </div> */}

      <div className="para7">
        <h3>RISK FACTORS</h3>
        <p>
          Certain factors may increase your risk of developing a mental illness,
          including:
        </p>
        <ul>
          <li>
            A history of mental illness in a blood relative, such as a parent or
            sibling
          </li>
          <li>
            Stressful life situations, such as financial problems, a loved one's
            death or a divorce
          </li>
          <li>An ongoing (chronic) medical condition, such as diabetes</li>
          <li>
            Brain damage as a result of a serious injury (traumatic brain
            injury), such as a violent blow to the head
          </li>
          <li>Traumatic experiences, such as military combat or assault</li>
          <li>Use of alcohol or recreational drugs</li>
          <li>A childhood history of abuse or neglect</li>
          <li>Few friends or few healthy relationships</li>
          <li>A previous mental illness</li>
        </ul>
        {/* <img src="{{ url_for('static', filename ='img/mhlys.png') }}" alt="mhlys"/> */}
      </div>

      <div className="para8">
        <p>
          Mental illness is common. About 1 in 5 adults has a mental illness in
          any given year. Mental illness can begin at any age, from childhood
          through later adult years, but most cases begin earlier in life.
        </p>

        <p>
          The effects of mental illness can be temporary or long lasting. You
          also can have more than one mental health disorder at the same time.
          For example, you may have depression and a substance use disorder.
        </p>
      </div>

      <div className="para9">
        <h3>COMPLICATION</h3>
        <p>
          Mental illness is a leading cause of disability. Untreated mental
          illness can cause severe emotional, behavioral and physical health
          problems. Complications sometimes linked to mental illness include:
        </p>
        <li>Unhappiness and decreased enjoyment of life</li>
        <li>Family conflicts</li>
        <li>Relationship difficulties</li>
        <li>Social isolation</li>
        <li> Problems with tobacco, alcohol and other drugs</li>
        <li>
          {" "}
          Missed work or school, or other problems related to work or school
        </li>
        <li> Legal and financial problems</li>
        <li>Poverty and homelessness</li>
        <li>Self-harm and harm to others, including suicide or homicide</li>
        <li>
          Weakened immune system, so your body has a hard time resisting
          infections
        </li>
        <li> Heart disease and other medical conditions</li>
        {/* <img src="{{ url_for('static', filename ='img/cb.png') }}" alt="cb"/> */}
      </div>
      <div className="para10">
        <h3>PREVENTION</h3>
        <p className="inpara4">
          There's no sure way to prevent mental illness. However, if you have a
          mental illness, taking steps to control stress, to increase your
          resilience and to boost low self-esteem may help keep your symptoms
          under control. Follow these steps:
        </p>

        <li>
          <strong>Pay attention to warning signs:</strong> Work with your doctor
          or therapist to learn what might trigger your symptoms. Make a plan so
          that you know what to do if symptoms return. Contact your doctor or
          therapist if you notice any changes in symptoms or how you feel.
          Consider involving family members or friends to watch for warning
          signs.
        </li>
        <li>
          <strong>Get routine medical care:</strong> Don't neglect checkups or
          skip visits to your primary care provider, especially if you aren't
          feeling well. You may have a new health problem that needs to be
          treated, or you may be experiencing side effects of medication.
        </li>
        <div>
          <strong>Get help when you need it:</strong> Mental health conditions
          can be harder to treat if you wait until symptoms get bad. Long-term
          maintenance treatment also may help prevent a relapse of symptoms.
          <li>
            <strong>Take good care of yourself.</strong> Sufficient sleep,
            healthy eating and regular physical activity are important. Try to
            maintain a regular schedule. Talk to your primary care provider if
            you have trouble sleeping or if you have questions about diet and
            physical activity.
          </li>
          {/* <img src="{{ url_for('static', filename ='img/prevention.png') }}" alt="prevention"/> */}
        </div>
      </div>
    </>
  );
}

Home.propTypes = {}

export default Home