import { ResearchExperience } from "./ResumeEntry";

const callab: ResearchExperience = {
  company: 'Communication and Learning Lab (CaLLab)',
  pi: 'Daniel Yurovsky',
  location: 'The University of Chicago',
  positions: [{
    title: 'Undergraduate Honors Thesis Researcher',
    startDate: 'December 2016',
    endDate: 'June 2018'
  }],
  bullets: [
    <div>Authored <em>Parents’ Response Times Provide Implicit Negative Evidence for Grammar Learning</em> which was approved by Daniel Yurovsky and Susan Goldin-Meadow to earn an honors distinction in the Psychology department</div>,
    'Performed computational analyses on 3 large natural language corpora using Python and R to demonstrate the existence of a novel form of negative evidence that children may use to learn English grammar',
    'Designed and implemented an online self-paced reading experiment that demonstrated a processing delay when adult readers are presented with over-regularized child utterances',
    'Participated in lab meetings, discussing research and providing feedback to fellow lab members'
  ]
}

const woodwardLab: ResearchExperience = {
  company: 'Infant Learning and Development Laboratory',
  pi: 'Amanda Woodward',
  location: 'The University of Chicago',
  positions: [{
    title: 'Undergraduate Research Assisstant',
    startDate: 'October 2015',
    endDate: 'October 2016'
  }],
  bullets: [
    "Coded qualitative behavioral and EEG data to support Courtney Filippi’s research on infant hand shaping and sensorimotor cortex activity",
    "Participated in lab meetings, discussing relevant research and lab members’ work",
    'Recruited, scheduled, and escorted families to participate in research'
  ]
};

export const researchExperiences = [callab, woodwardLab];