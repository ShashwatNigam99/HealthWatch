# HealthWatch
## Motivation
The problems faced in the healthcare delivery in rural India are no secret. However, what is often missed is the depth India's primary healthcare systems, an integral part of which are the **Community Health Workers** (CHWs).

Community Health Workers like _ASHAs_, _ANMs_ and _Anganwadi_ workers are the backbone of rural healthcare delivery, servicing the last-mile healthcare needs of almost 70% of the Indian population. News headlines, numerous studies and multiple CHWs we have spoken to echo the same distress, _**overwork**_. They've just got too much to do.

The problem doesn't just lie in the ratio or even the coverage - it lies in the absence of workflow management systems. In any village, the conventional model CHWs follow as part of their responsibilities is door-to-door surveys and checkups of households which, as the CHWs told us in interviews, is incredibly inefficient because of the random, haphazard pattern of coverage with no technology to optimize the process.

## Our proposal
HealthWatch is a simple solution with a two pronged approach: 

- using Integrated Voice Recording Services(IVRS) for the end customers(residents of an area) to raise issues(ask for a home visit)/ask queries(recieve a call), and a toll-free helpline number for emergency cases and immediate response.
- An app for the CHWs and healthcare providers to track current emergency cases and pending consultation visits; for decision/policy makers to view health related analytics for different areas to make better strategies and decisions.

## What does it do and how does it work?
**For a Community Health Worker**
- At the start of the program the CHW's in association with the government authorities will fill in basic data (name, age, gender, and major health conditions like diabetes/hypertension etc.) about the residents of a region. This will help in stratification and sorting the current cases in the order of risk. For example a 26 year old male with no previous medical issues vs a 67 year old female with diabetes, the old woman would be placed at higher risk/priority in case of an emergency. The risk stratification algorithm willbased on government guidelines and public health reviews. For example for India : [ Risk Stratification Approach](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6360936/)

- There will be a toll free public helpline number for emergency cases. Just calling that number would get you immediate attention from a CHW. The CHW receives an immediate notification on the app, calls back and gets the patient to the hospital if needed. The app also records the emergency case directly, whenever someone calls the helpline number.

- Every evening, a prerecorded phone call using IVRS would be made to all families in the area, asking a simple question - if everyone in your family is okay, press 29 (and that ends the call). If not, press 1 (next).

- On pressing 1, the IVRS would say: if you need a general consultation/hospital visit, press 1 (and schedule a CHW home visit),  if you have a health query, press 2 (and schedule a CHW phone call).

- The CHW logs in and then receives real-time data about what segments of the population require urgent care, non-urgent care or simple counselling; sorted in the order of risk. They also get this same data in the form of vulnerable demographic segments allowing her to also focus on different health verticals, and also integrate and coordinate with other CHW counterparts, increasing efficiency.

- Once the issue is addressed by the CHW, they mark it as complete and also denote the category of the case from a drop-down which enlists some very broad health issue segments. The timestamps of the issue being created and completed, are also recorded for further analysis. 

- This deceptively simple tech solution also does something exceedingly powerful - it stratifies the population, giving the CHW real-time data about who requires care and who doesn't - data which, as of today, has no other means of being collected.

**For a Government Official**

- The real power of Sakhi is the massive impetus it would provide in the form of data to policy makers. The officials can view daily/weekly/monthly cases of category emergency/general for selected demographic region. For each of the data field mentioned, the official can also view age/gender-based classification.

- Because we also capture the timestamps when the issue was created(through the IVRS) and when the issue was resolved(when CHW marks it as completed in the app) we are able to calculate average response times and the number of cases that go unaddressed per day. This can help decision makers to appropriately distribute number of workers in the regions.

- When the workers mark issues as completed they also mention the category of the issue. This helps to identify illness patterns in the population and address incoming social health problems beforehand.

### Why should this be implemented, and what's next?

All 4 stakeholders benefit - patients, providers and CHWs, and Government policy makers in Public Health Domain. 

From epidemiology and symptomatic epidemic tracking - for example of SARIs ie flu-like symptoms to track transmission rates of COVID-19, to targeted interventions of high risk population groups and monitoring the efficacy of certain indices of national health programmes, this real-time monitoring of data can provide unprecedented improvements to long-term health and disease tracking, and more effective policy making. And all this is accessible to the district, state and national healthcare workers and policy makers through our app.

All this data is also accessible to district and state authorities. 

We did our competitor analysis, and as of today it's just us working in workflow management for CHWs in India.

We've done the math. We'll try to raise capital from govt grants under NHM and IDSP, the Gates foundation and 'Adopt a CHW' CSR programs.

And that is how we intend to use inexpensive, highly scalable, low tech solution to transform CHWs workers' lives.

### What we learnt and what we are proud of :)
- Fast prototyping: Reactjs with Material-UI components allowed for faster prototyping in the crazy previous 2 days. Also shoutout out to plotly for beautiful interactive plots!  
- Application containerization: Used docker! 
- Pitching: Attended great sessions at IvyHacks to learn more about pitching ideas and innovations.

### [Link to presentation](https://docs.google.com/presentation/d/1ZWQ2VrpXHHMIWX1cGt8kGqUCdBO6T3JQjuR2Iar6AFc/edit?usp=sharing)


